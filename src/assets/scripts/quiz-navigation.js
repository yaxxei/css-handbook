window.addEventListener("DOMContentLoaded", () => {
  const prevQuestionButton = document.getElementById("prev-question");
  const nextQuestionButton = document.getElementById("next-question");

  function prevQuestion() {
    const activeQuestion = document.querySelector(".quiz ol li.active");
    activeQuestion.classList.remove("active");
    activeQuestion.previousElementSibling.classList.add("active");
  }

  function nextQuestion() {
    const activeQuestion = document.querySelector(".quiz ol li.active");
    activeQuestion.classList.remove("active");
    activeQuestion.nextElementSibling.classList.add("active");
  }

  prevQuestionButton?.addEventListener("click", prevQuestion);
  nextQuestionButton?.addEventListener("click", nextQuestion);
});
