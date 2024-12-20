import { parse } from "marked";

export function parseMarkdown(markdown) {
  return parse(markdown, {
    walkTokens(token) {
      if (token.type === "paragraph" && typeof token.raw === "string") {
        if (token.raw.startsWith("::note") && token.raw.endsWith("::")) {
          const content = token.raw
            .replace("::note", "")
            .replace("::", "")
            .trim();

          token.type = "html";
          token.text = `
          <div class="note">
            <p>${content}</p>
          </div>`;
        }
        if (token.raw.startsWith("::warning") && token.raw.endsWith("::")) {
          const content = token.raw
            .replace("::warning", "")
            .replace("::", "")
            .trim();

          token.type = "html";
          token.text = `
          <div class="warning">
            <p>${content}</p>
          </div>`;
        }
        if (token.raw.startsWith("::tip") && token.raw.endsWith("::")) {
          const content = token.raw
            .replace("::tip", "")
            .replace("::", "")
            .trim();

          token.type = "html";
          token.text = `
          <div class="tip">
            <p>${content}</p>
          </div>`;
        }
        if (token.raw.startsWith("::quiz") && token.raw.endsWith("::")) {
          const content = token.raw
            .replace("::quiz", "")
            .replace("::", "")
            .trim();

          token.type = "html";
          token.text = `
          <div class="tip">
            <p>${content}</p>
          </div>`;
        }
      }
    },
  });
}

export function generateQuizHtml(quiz) {
  const question = quiz.question;
  const answers = quiz.answers;
  const explanation = quiz.explanation;

  return `
    <li>
      
    </li>
  `;
}

// function generateQuizHTML(questions, quizId) {
//   const questionHTML = questions
//     .map((q, index) => {
//       const optionsHTML = q.options
//         .map(
//           (opt, optIndex) =>
//             `<button class="quiz-option" data-answer="${q.answer}" data-index="${optIndex}">${opt}</button>`
//         )
//         .join("");

//       return `
//         <div class="quiz-question-block ${index === 0 ? "active" : ""}" data-question-index="${index}">
//           <p class="quiz-question">${q.question}</p>
//           <div class="quiz-options">${optionsHTML}</div>
//         </div>`;
//     })
//     .join("");

//   return `
//     <div class="quiz" id="${quizId}">
//       ${questionHTML}
//       <div class="quiz-controls">
//         <button class="prev-btn" disabled>Previous</button>
//         <button class="next-btn">Next</button>
//       </div>
//     </div>`;
// }
