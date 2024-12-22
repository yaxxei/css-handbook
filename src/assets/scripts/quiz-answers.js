window.addEventListener("DOMContentLoaded", () => {
  const quizBlock = document.querySelector(".quiz");
  const finishButton = document.getElementById("finish");
  const questions = document.querySelectorAll(".quiz ol li");

  if (!quizBlock) return;

  // Функция для проверки, отвечены ли все вопросы
  function checkAnswers() {
    let allAnswered = true;

    // Проверяем каждый вопрос
    questions.forEach((question) => {
      const radioButtons = question.querySelectorAll("input[type='radio']");
      const isAnswered = Array.from(radioButtons).some(
        (radio) => radio.checked
      );

      // Если хотя бы один вопрос не отвечает, блокируем кнопку
      if (!isAnswered) {
        allAnswered = false;
      }
    });

    // Если все вопросы отвечены, активируем кнопку "Завершить", иначе блокируем
    finishButton.disabled = !allAnswered;
  }

  // Слушаем изменения выбора для каждого вопроса
  questions.forEach((question) => {
    const radioButtons = question.querySelectorAll("input[type='radio']");
    radioButtons.forEach((radio) => {
      radio.addEventListener("change", checkAnswers);
    });
  });

  checkAnswers();

  finishButton.addEventListener("click", () => {
    quizBlock.classList.add("finished");
    document.querySelector(".quiz ol li.active").classList.remove("active");
    document.querySelector(".quiz ol :first-child").classList.toggle("active");
    const questions = document.querySelectorAll(".quiz ol li");
    let correctAnswers = 0;

    // Проходим по всем вопросам
    questions.forEach((question) => {
      const answers = question.querySelectorAll(".answer");
      let selectedAnswer = null;
      let correctAnswer = null;

      // Находим выбранный ответ и правильный ответ
      answers.forEach((answer) => {
        const radio = answer.querySelector("input[type='radio']");
        if (radio.checked) {
          selectedAnswer = answer;
        }
        if (answer.getAttribute("data-correct") === "true") {
          correctAnswer = answer;
        }
      });
    });

    document
      .querySelectorAll(".quiz input")
      .forEach((input) => (input.disabled = true));
  });
});
