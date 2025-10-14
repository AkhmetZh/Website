document.getElementById("changeColor").addEventListener("click", () => {
  const colors = ["#f8bbd0", "#e1bee7", "#bbdefb", "#c8e6c9", "#fff9c4"];
  document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
});
