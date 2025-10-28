// assets/js/controller.js

// CONTROLADOR (MVC)
// Contiene la lógica para conectar el Modelo (datos) con las Vistas (HTML)

// Se ejecuta cuando el DOM (la página) está completamente cargado
document.addEventListener("DOMContentLoaded", () => {
  
  // --- ¡NUEVA FUNCIÓN! ---
  // Inicia el cambiador de colores en TODAS las páginas
  initializeColorSwitcher();
  // ---------------------

  // Revisa en qué página estamos
  const page = document.body.dataset.page;

  if (page === "home") {
    loadBlogPosts();
  } else if (page === "post") {
    loadSinglePost();
  }
  // No se necesita un 'else' para la página 'about', ya es estática
});

/**
 * Carga la lista de posts en la página principal (index.html)
 */
function loadBlogPosts() {
  const container = document.getElementById("blog-posts-container");
  if (!container) return; 

  let html = "";
  
  posts.forEach(post => {
    html += `
      <div class="col-md-6 col-lg-4 mb-4">
        <div class="card h-100 shadow-sm border-0 blog-card">
          <div class="overflow-hidden">
            <img src="${post.image}" class="card-img-top" alt="${post.title}">
          </div>
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
  const params = new URLSearchParams(window.location.search);
  const postId = params.get("id");

  if (!postId) {
    window.location.href = "index.html"; 
    return;
  }

  const post = posts.find(p => p.id === +postId);

  if (!post) {
     window.location.href = "index.html";
    return;
  }

  document.title = post.title;
  document.getElementById("post-title").innerText = post.title;
  document.getElementById("post-image").src = post.image;
  document.getElementById("post-image").alt = post.title;
  document.getElementById("post-content").innerHTML = post.content;
}


// --- ¡NUEVA FUNCIÓN PARA LOS BOTONES DE COLOR! ---

/**
 * Añade la lógica a los botones de cambio de tema.
 */
function initializeColorSwitcher() {
  // Selecciona todos los botones
  const swatches = document.querySelectorAll('.color-swatch');
  
  // Selecciona el elemento raíz (la etiqueta <html>) para cambiar las variables CSS
  const root = document.documentElement; 

  swatches.forEach(swatch => {
    swatch.addEventListener('click', () => {
      // Obtiene los colores desde los atributos 'data-' del botón
      const startColor = swatch.dataset.colorStart;
      const endColor = swatch.dataset.colorEnd;
      
      // Actualiza las variables CSS en tiempo real
      root.style.setProperty('--gradient-color-start', startColor);
      root.style.setProperty('--gradient-color-end', endColor);
    });
  });
}