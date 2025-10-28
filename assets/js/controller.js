// assets/js/controller.js

// CONTROLADOR (MVC)
// Contiene la lógica para conectar el Modelo (datos) con las Vistas (HTML)

// Se ejecuta cuando el DOM (la página) está completamente cargado
document.addEventListener("DOMContentLoaded", () => {
  
  // Revisa en qué página estamos
  const page = document.body.dataset.page;

  if (page === "home") {
    loadBlogPosts();
  } else if (page === "post") {
    loadSinglePost();
  }
});

/**
 * Carga la lista de posts en la página principal (index.html)
 */
function loadBlogPosts() {
  const container = document.getElementById("blog-posts-container");
  if (!container) return; // Salir si el contenedor no existe

  let html = "";
  
  // Usamos el array 'posts' que viene de 'model.js'
  posts.forEach(post => {
    html += `
      <div class="col-md-6 col-lg-4 mb-4">
        <div class="card h-100 shadow-sm border-0 blog-card">
          <img src="${post.image}" class="card-img-top" alt="${post.title}">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">${post.title}</h5>
            <p class="card-text flex-grow-1">${post.summary}</p>
            <a href="post.html?id=${post.id}" class="btn btn-primary mt-auto align-self-start">Leer más &rarr;</a>
          </div>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}

/**
 * Carga un post individual en la página (post.html)
 */
function loadSinglePost() {
  // 1. Obtener el ID del post desde la URL (ej: post.html?id=2)
  const params = new URLSearchParams(window.location.search);
  const postId = params.get("id");

  if (!postId) {
    window.location.href = "index.html"; // Redirigir si no hay ID
    return;
  }

  // 2. Encontrar el post en nuestro 'modelo'
  // El +postId convierte el string "id" en un número
  const post = posts.find(p => p.id === +postId);

  if (!post) {
     window.location.href = "index.html"; // Redirigir si el ID no existe
    return;
  }

  // 3. "Pintar" los datos en la vista (HTML)
  document.title = post.title; // Actualiza el título de la pestaña
  document.getElementById("post-title").innerText = post.title;
  document.getElementById("post-image").src = post.image;
  document.getElementById("post-image").alt = post.title;
  document.getElementById("post-content").innerHTML = post.content;
}