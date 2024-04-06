"use strict";

const numbers = document.querySelector(".numbers-to_select");
const selectedNumber = document.querySelector(".selected");
const submitBtn = document.querySelector(".submit-btn");
const ratingState = document.querySelector(".rating-container");
const thankYouState = document.querySelector(".thank-you_state");
numbers.addEventListener("click", (e) => {
  if (e.target.tagName === "P") {
    let selection = e.target.textContent;
    selectedNumber.textContent = selection;
  }
});

submitBtn.addEventListener("click", () => {
  let selectedNumberText = selectedNumber.textContent.replace("0 ", " ");

  ratingState.style.display = "none";
  thankYouState.style.display = "block";
});
