"use strict";

const numbers = document.querySelectorAll(".numbers-to_select p");
const selectedNumber = document.querySelector(".selected");
const submitBtn = document.querySelector(".submit-btn");
const ratingState = document.querySelector(".rating-container");
const thankYouState = document.querySelector(".thank-you_state");

let numberClicked = false; // Flag to track if a number is clicked (approach 1)

numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    if (e.target.tagName === "P") {
      let selection = e.target.textContent;
      selectedNumber.textContent = " " + selection + " ";
      numberClicked = true; // Set flag to true when a number is clicked (approach 1)
    }
  });
});

submitBtn.addEventListener("click", () => {
  let selectedNumberText = selectedNumber.textContent.replace("0 ", " ");

  if (numberClicked) {
    // Check if numberClicked flag is true (approach 1)
    ratingState.style.display = "none";
    thankYouState.style.display = "block";
  } else {
    // Optional: Handle scenario where no number is clicked (e.g., display an error message)
  }
});
