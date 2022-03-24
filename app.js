const buttons = document.querySelectorAll(".btn-rating");
const submit = document.querySelector(".btn-submit");
const card = document.querySelector(".card");
const thankYouCard = document.querySelector(".thank-you-card");
const selectedRating = document.querySelector(".selected-rating");
let rating = "";

buttons.forEach((button) =>
  button.addEventListener("click", (event) => {
    console.log("click");
    buttons.forEach((button) => {
      button.classList.remove("active");
    });
    rating = event.target.innerText;
    button.classList.toggle("active");
  })
);

submit.addEventListener("click", () => {
  if (rating) {
    selectedRating.innerText = rating;
    card.classList.remove("active");
    thankYouCard.classList.add("active");
  }
});
