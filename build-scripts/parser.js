import { parse } from "marked";

export function parseMarkdown(markdown) {
  return parse(markdown, {
    walkTokens(token) {
      if (token.type === "paragraph" && typeof token.raw === "string") {
        parseCustomToken(token, "note");
        parseCustomToken(token, "warning");
        parseCustomToken(token, "tip");
        parseQuizToken(token);
      }
    },
  });
}

function parseCustomToken(token, type) {
  const marker = `::${type}`;
  if (token.raw.startsWith(marker) && token.raw.endsWith("::")) {
    const content = token.raw.replace(marker, "").replace("::", "").trim();

    const lines = content.split("\n");

    // Оборачиваем каждую строку в <p> тег
    const htmlContent = lines.map((line) => `<p>${line.trim()}</p>`).join("");

    token.type = "html";
    token.text = `
    <div class="${type}">
      <p>${htmlContent}</p>
    </div>`;
  }
}

function parseQuizToken(token) {
  const marker = "::quiz";
  if (token.raw.startsWith(marker) && token.raw.endsWith("::")) {
    const content = token.raw.replace(marker, "").replace("::", "").trim();
    const quizContent = parseQuizContent(content);
    token.type = "html";
    token.text = `
    <div class="quiz">
      <a id="prev-question">
        <svg fill="#b7b9cc" height="50px" width="50px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 330 330" xml:space="preserve">
          <path id="XMLID_92_" d="M111.213,165.004L250.607,25.607c5.858-5.858,5.858-15.355,0-21.213c-5.858-5.858-15.355-5.858-21.213,0.001 l-150,150.004C76.58,157.211,75,161.026,75,165.004c0,3.979,1.581,7.794,4.394,10.607l150,149.996 C232.322,328.536,236.161,330,240,330s7.678-1.464,10.607-4.394c5.858-5.858,5.858-15.355,0-21.213L111.213,165.004z"/>
        </svg>
      </a>
      ${quizContent}
      <a id="next-question">
        <svg fill="#b7b9cc" height="50px" width="50px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 330 330" xml:space="preserve">
          <path id="XMLID_92_" transform="scale(-1, 1) translate(-330, 0)" d="M111.213,165.004L250.607,25.607c5.858-5.858,5.858-15.355,0-21.213c-5.858-5.858-15.355-5.858-21.213,0.001 l-150,150.004C76.58,157.211,75,161.026,75,165.004c0,3.979,1.581,7.794,4.394,10.607l150,149.996 C232.322,328.536,236.161,330,240,330s7.678-1.464,10.607-4.394c5.858-5.858,5.858-15.355,0-21.213L111.213,165.004z"/>
        </svg>
      </a>
      <button id="finish">Завершить</button>
    </div>`;
  }
}

function parseQuizContent(content) {
  const lines = content.split("\n");
  let questionIndex = 1;
  let html = `<ol>`;

  while (lines.length > 0) {
    const question = lines.shift().trim(); // Первый вопрос
    if (question) {
      html += `<li class="${questionIndex === 1 ? "active" : ""}">`;
      html += `<div class="question-${questionIndex}"><p>${question}</p>`;
      html += parseAnswers(lines, questionIndex); // Обработка ответов
      html += parseExplanation(lines); // Обработка объяснений
      html += `</div></li>`;
    }
    questionIndex++;
  }

  html += `</ol>`;
  return html;
}

function parseAnswers(lines, questionIndex) {
  let answersHtml = "";
  while (lines.length > 0) {
    const answer = lines.shift().trim();
    if (answer.startsWith("-") || answer.startsWith("+")) {
      const isCorrect = answer.startsWith("+");
      const answerText = answer.slice(1).trim();
      answersHtml += `
        <div class="answer" data-correct="${isCorrect}">
          <label><input type="radio" name="answer-${questionIndex}" /> ${answerText}</label>
        </div>`;
    } else {
      break;
    }
  }
  return answersHtml;
}

function parseExplanation(lines) {
  let explanationHtml = "";
  if (lines.length > 0 && lines[0].startsWith("В")) {
    const explanation = lines.shift().trim();
    explanationHtml = `<div class="explanation">${explanation}</div>`;
  }
  return explanationHtml;
}
