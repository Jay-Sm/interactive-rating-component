const ratingButtons = document.querySelectorAll(".js-rating-button");
let ratingValue = undefined;

ratingButtons.forEach((button) => {
  button.addEventListener("click", () => {
    ratingButtons.forEach((btn) => {
      btn.classList.remove("js-button-active");
    });

    button.classList.add("js-button-active");
    ratingValue = Number(button.value);
  });
});
