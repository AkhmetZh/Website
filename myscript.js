const accordions = document.querySelectorAll(".accordion-btn");

    accordions.forEach(btn => {
        btn.addEventListener("click", () => {
            const content = btn.nextElementSibling;

            content.style.display = content.style.display === "block" ? "none" : "block";

            content.style.transition = "all 0.6 ease";
        });
    });