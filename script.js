const form = document.querySelector("form");
const content_1 = document.querySelector(".card");
const content_2 = document.querySelector(".content-2");
const email = document.getElementById("email");
const error = document.getElementById("error");
const dismissButton = document.getElementById("dismiss-btn");
const userEmailSpan = document.getElementById("userEmail");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (email.value.trim() === "") {
    error.textContent = "Email is required";
    error.style.display = "block";
  } else {
    userEmailSpan.textContent = email.value; // Update the span with user's email
    content_1.classList.add("hide");
    content_2.classList.remove("hide");
  }
});

email.addEventListener("input", () => {
  if (!email.checkValidity()) {
    error.textContent = "Valid email required";
    error.style.display = "block";
  } else {
    error.style.display = "none";
  }
});

dismissButton.addEventListener("click", () => {
  content_2.classList.add("hide");
  content_1.classList.remove("hide");
});
