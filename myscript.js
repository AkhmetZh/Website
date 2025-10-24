const accordions = document.querySelectorAll(".accordion-btn");
accordions.forEach(btn => { btn.addEventListener("click", () => {
    const content = btn.nextElementSibling;
    content.style.display = content.style.display === "block" ? "none" : "block"; content.style.transition = "all 0.6 ease"; });
});

accordions.forEach(btn => {
    btn.addEventListener("click", () => {
        const content = btn.nextElementSibling;

        document.querySelectorAll('.accordion-content').forEach(c => {
            if (c !== content) c.style.maxHeight = null;
        });
        if (content.style.maxHeight) {
            content.style.maxHeight = null; // close
        } else {
            content.style.maxHeight = content.scrollHeight + "px"; // open
        }
});

const userName = prompt("Welcome to Cloudly! What’s your name?");
if (userName) {
    const logo = document.querySelector('.logo');

    // Keep the logo's original styled span part
    logo.innerHTML = `Cloud<span>ly</span> welcomes you, ${userName}!`;
    logo.classList.add('greeted');
}
const perfumes = [
    { name: "CHANEL COCO MADEMOISELLE", price: 16000 },
    { name: "COSMIC KYLIE JENNER", price: 45000 },
    { name: "R.E.M. ARIANA GRANDE", price: 36000 },
    { name: "MISS DIOR", price: 80000 }
];
// Apply discount using map
const discountedPerfumes = perfumes.map(p => ({
    ...p,
    discounted: (p.price * 0.9).toFixed(0)
}));

console.log("Discounted Perfumes (10% off):", discountedPerfumes);

const randomPerfume = discountedPerfumes[Math.floor(Math.random() * discountedPerfumes.length)];
const offerDiv = document.createElement('div');
offerDiv.classList.add('special-offer', 'animate-offer');

offerDiv.innerHTML = `
  <span class="offer-text">
    <strong>Special Offer:</strong> 
    <em>${randomPerfume.name}</em> — 
    <span class="price-highlight">${randomPerfume.discounted}₸</span> only!
  </span>
`;

document.querySelector('main').appendChild(offerDiv);
