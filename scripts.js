document.addEventListener('DOMContentLoaded', () => {
  console.log('OrStore World ready!');
});

function showSection(title, text) {
  document.getElementById("content").innerHTML = `
    <h2>${title}</h2>
    <p>${text}</p>
  `;
}

function showAboutUs() {
  showSection("À propos de nous", "OrStore est une entreprise dédiée au numérique, à l'innovation et à la qualité de service. Nous mettons en avant des produits modernes pour répondre à vos besoins technologiques.");
}

function showNews() {
  showSection("Actualités", "📢 Nouvelle collection de produits high-tech disponible dès maintenant !");
}
