window.addEventListener("DOMContentLoaded", () => {
  const quizBlock = document.querySelector(".quiz");
  const finishButton = document.getElementById("finish");
  const questions = document.querySelectorAll(".quiz ol li");

  if (!quizBlock) return;

  function checkAnswers() {
    let allAnswered = true;

    questions.forEach((question) => {
      const radioButtons = question.querySelectorAll("input[type='radio']");
      const isAnswered = Array.from(radioButtons).some(
        (radio) => radio.checked
      );

      if (!isAnswered) {
        allAnswered = false;
      }
    });

    finishButton.disabled = !allAnswered;
  }

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
    let correctAnswers = 0;

    questions.forEach((question) => {
      const answers = question.querySelectorAll(".answer");
      let selectedAnswer = null;
      let correctAnswer = null;

      answers.forEach((answer) => {
        const radio = answer.querySelector("input[type='radio']");
        if (radio.checked) {
          selectedAnswer = answer;
        }
        if (answer.getAttribute("data-correct") === "true") {
          correctAnswer = answer;
        }
      });

      if (selectedAnswer === correctAnswer) {
        correctAnswers++;
      }
    });

    const correctAnswerCounter = document.createElement("span");
    correctAnswerCounter.innerText = `${correctAnswers}/${questions.length}`;
    correctAnswerCounter.classList.add("correct-answer-counter");
    quizBlock.appendChild(correctAnswerCounter);

    document
      .querySelectorAll(".quiz input")
      .forEach((input) => (input.disabled = true));
  });
});
