// ========== 1. Dynamic Logo Greeting ==========
const logo = document.querySelector(".logo");
const userName = prompt("Welcome to Cloudly! What's your name?");
if (userName) {
    logo.innerHTML = `Cloud<span>ly</span> welcomes you, ${userName}!`;
}

// ========== 2. Contact Form Validation & Feedback ==========
const form = document.querySelector("form");

if (form) {
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        const oldMsg = document.getElementById("formMessage");
        if (oldMsg) oldMsg.remove();

        const info = document.createElement("p");
        info.id = "formMessage";
        info.style.marginTop = "12px";
        info.style.fontWeight = "600";
        info.style.transition = "all 0.4s ease";
        form.appendChild(info);

        // Validation
        if (!name || !email || !message) {
            info.textContent = "❌ Please fill in all fields.";
            info.style.color = "#e53935";
            playSound("error");
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            info.textContent = "❌ Invalid email format.";
            info.style.color = "#e53935";
            playSound("error");
            return;
        }

        info.textContent = "✅ Your message has been sent successfully!";
        info.style.color = "#2e7d32";
        info.style.opacity = "0";
        playSound("success");

        // Fade-in animation
        setTimeout(() => (info.style.opacity = "1"), 100);

        // Button glow
        const btn = form.querySelector("button");
        btn.classList.add("sent");
        setTimeout(() => btn.classList.remove("sent"), 800);

        // Reset form
        setTimeout(() => form.reset(), 400);
    });
}
const channels = [
    { name: "Instagram", emoji: "📸" },
    { name: "Facebook", emoji: "👍" },
    { name: "Twitter", emoji: "🐦" },
    { name: "TikTok", emoji: "🎵" },
];

// Create a friendly join-message list dynamically
const socialArea = document.querySelector(".social-icons");
if (socialArea) {
    const messages = channels.map(
        (ch) =>
            `<div class="join-msg">${ch.emoji} Follow us on <span>${ch.name}</span>!</div>`
    );
    const wrapper = document.createElement("div");
    wrapper.classList.add("social-messages");
    wrapper.innerHTML = messages.join("");
    socialArea.after(wrapper);
}

