const form = document.querySelector("form");

if (form) {
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // не перезагружать страницу

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        const oldMsg = document.getElementById("formMessage");
        if (oldMsg) oldMsg.remove();

        const info = document.createElement("p");
        info.id = "formMessage";
        info.style.marginTop = "10px";

        if (!name || !email || !message) {
            info.textContent = "❌ Please fill in all fields.";
            info.style.color = "red";
            form.appendChild(info);
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            info.textContent = "❌ Invalid email format.";
            info.style.color = "red";
            form.appendChild(info);
            return;
        }

        info.textContent = "✅ Your message has been sent successfully!";
        info.style.color = "green";
        form.appendChild(info);

        form.reset();
    });
}
