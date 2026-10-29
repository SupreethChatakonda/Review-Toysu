const WHATSAPP_NUMBER = "919966494752"; // +91 99664 94752

const starInput = document.getElementById("starInput");
const starButtons = [...starInput.querySelectorAll("button")];
let rating = 0;

function paintStars() {
  starButtons.forEach((btn) => {
    btn.classList.toggle("active", Number(btn.dataset.value) <= rating);
  });
}

starButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    rating = Number(btn.dataset.value);
    paintStars();
  });
});

document.getElementById("reviewForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const toy = document.getElementById("toy").value;
  const quality = document.getElementById("quality").value.trim();
  const fun = document.getElementById("fun").value.trim();
  const note = document.getElementById("formNote");

  if (rating === 0) {
    alert("Please tap the stars to rate the quality before sending.");
    return;
  }

  const stars = "★".repeat(rating) + "☆".repeat(5 - rating);
  const text = [
    "🧸 New Toysu Review",
    "",
    `👤 Name: ${name}`,
    `🧩 Toy: ${toy}`,
    `⭐ Quality: ${stars} (${rating}/5)`,
    `🔧 Quality review: ${quality}`,
    `🎉 What made it fun: ${fun}`,
  ].join("\n");

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

  note.hidden = false;
  window.open(url, "_blank");
});
