/**
 * quiz.js — reusable single-choice quiz widget for lessons
 */
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-quiz]").forEach((quiz) => {
    const correct = parseInt(quiz.dataset.correct, 10);
    const explain = quiz.dataset.explain || "";
    const feedback = quiz.querySelector(".quiz-feedback");
    const buttons = quiz.querySelectorAll(".quiz-options button");

    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const chosen = parseInt(btn.dataset.index, 10);
        buttons.forEach((b) => (b.disabled = true));

        if (chosen === correct) {
          btn.classList.add("correct");
          feedback.textContent = "Correct. " + explain;
          feedback.className = "quiz-feedback correct";
        } else {
          btn.classList.add("wrong");
          buttons[correct].classList.add("correct");
          feedback.textContent = "Not quite. " + explain;
          feedback.className = "quiz-feedback wrong";
        }
      });
    });
  });
});
