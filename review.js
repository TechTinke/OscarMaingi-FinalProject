const reviewForm = document.querySelector("#review-form");
const ratingField = document.querySelector("#rating");
const reviewTextField = document.querySelector("#review-text");

if (reviewForm) {
  reviewForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const rating = ratingField.value;
    const reviewText = reviewTextField.value.trim();

    if (rating && reviewText) {
      alert("Review submitted!");
    } else {
      alert("Please provide both a rating and review text");
    }
  });
}
