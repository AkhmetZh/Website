document.getElementById("changeColor").addEventListener("click", () => {
  const colors = ["#f8bbd0", "#e1bee7", "#bbdefb", "#c8e6c9", "#fff9c4"];
  document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
});

const recommendedPerfumes = [
  { name: "Creed Aventus", price: 120, rating: 4.8 },
  { name: "Versace Eros", price: 90, rating: 4.6 },
  { name: "Gucci Bloom", price: 85, rating: 4.4 },
  { name: "Le Labo Santal 33", price: 150, rating: 4.9 },
  { name: "YSL Black Opium", price: 95, rating: 4.7 }
];


const listContainer = document.getElementById("recommendations");

recommendedPerfumes.forEach(perfume => {
  const li = document.createElement("li");
  li.classList.add("list-group-item");
  li.textContent = `${perfume.name} — $${perfume.price} | ⭐ ${perfume.rating}`;
  listContainer.appendChild(li);
});
