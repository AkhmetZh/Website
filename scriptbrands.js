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
}
);

document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("themeToggle");
  const body = document.body;

  if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-theme");
    toggleButton.textContent = "🌙 Night";
  } else {
    toggleButton.textContent = "🌞 Day";
  }

  toggleButton.addEventListener("click", () => {
    body.classList.toggle("dark-theme");

    if (body.classList.contains("dark-theme")) {
      localStorage.setItem("theme", "dark");
      toggleButton.textContent = "🌙 Night";
    } else {
      localStorage.setItem("theme", "light");
      toggleButton.textContent = "🌞 Day";
    }
  });
});

const showTimeBtn = document.getElementById("showTimeBtn");

showTimeBtn.addEventListener("click", () => {
  const now = new Date();
  const timeString = now.toLocaleTimeString();

  alert("Current Time: " + timeString);

  document.getElementById("datetime").textContent = now.toLocaleString();
});

const cards = document.querySelectorAll('.brand-card');
document.querySelectorAll('.perfume-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transition = 'transform 0.2s ease';
    card.style.transform = 'scale(1.07) rotate(1deg)';
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'scale(1) rotate(0deg)';
  });
});

 const hoverSound = new Audio('water.mp3');
    document.querySelectorAll('.perfume-card').forEach(card => {
      card.addEventListener('mouseenter', () => {
        hoverSound.currentTime = 0;
        hoverSound.play();
      });
    });



