const faqLink = document.getElementById("faqLink");
const faqPopup = document.getElementById("faqPopup");
const closeBtn = document.querySelector(".close-btn");

faqLink.addEventListener("click", (e) => {
  e.preventDefault();
  faqPopup.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  faqPopup.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === faqPopup) {
    faqPopup.style.display = "none";
  }
});
