// assets/js/model.js

// MODELO (MVC)
// Aquí "quemamos" los datos. Es nuestro modelo de datos.

const posts = [
  {
    id: 1,
    title: "Las Amenazas Gemelas: Armas Nucleares y Cambio Climático",
    summary: "Desde 1945, la humanidad vive bajo dos amenazas existenciales que surgieron tras la Segunda Guerra Mundial: el holocausto nuclear y la catástrofe climática.",
    // Imagen de marcador de posición. Reemplaza con una imagen real en /assets/images/
    image: "https://via.placeholder.com/800x400.png?text=Amenazas+Gemelas", 
    content: `
      [cite_start]<p class="lead">Noam Chomsky argumenta que la perspectiva de la extinción humana surgió tras la Segunda Guerra Mundial, con el inicio de la era del Antropoceno[cite: 22].</p>
      [cite_start]<p>Chomsky traza la dualidad de la amenaza existencial que suponen las armas nucleares y el cambio climático, explicando cómo surgieron y cómo interactúan[cite: 23]. [cite_start]El 6 de agosto de 1945, supimos que "la inteligencia de nuestra especie había concebido los medios para acabar [...] con el experimento humano"[cite: 135].</p>
      [cite_start]<p>Al mismo tiempo, surgía una segunda era, el <strong>Antropoceno</strong>, definida por el impacto humano extremo sobre el entorno[cite: 146].</p>
      <blockquote class="blockquote fst-italic bg-light p-3 rounded">
        [cite_start]"Así pues, de acuerdo con su análisis, el Antropoceno y la era atómica coincidirían, por lo que constituirían una amenaza dual para la perpetuación de la vida humana organizada." [cite: 151]
      </blockquote>
      [cite_start]<p>Estamos inmersos en una sexta extinción masiva[cite: 152], pero esta vez, provocada por el ser humano. [cite_start]A diferencia de las anteriores, "los animales de mayor tamaño morirán desproporcionadamente"[cite: 158]. [cite_start]Las emisiones de CO2 están aumentando a la tasa más elevada en sesenta y seis millones de años [cite: 161][cite_start], y ya hemos superado el punto de peligro crítico de las cuatrocientas partes por millón[cite: 164].</p>
    `
  },
  {
    id: 2,
    title: "La Tercera Amenaza: El Vaciamiento de la Democracia",
    summary: "Más allá de las armas y el clima, existe una tercera amenaza que agrava las otras dos: el socavamiento y debilitamiento de la democracia en todo el mundo.",
    image: "https://via.placeholder.com/800x400.png?text=Democracia+Amenazada",
    content: `
      [cite_start]<p class="lead">Chomsky añade una "tercera amenaza existencial, la del socavamiento de la democracia, que, a su vez, exacerba el cambio climático y las amenazas nucleares"[cite: 81].</p>
      [cite_start]<p>Esta amenaza fue añadida por el <em>Bulletin of Atomic Scientists</em> al ajustar el Reloj del Apocalipsis, citando "el menoscabo de la democracia"[cite: 883]. ¿Por qué es tan peligrosa?</p>
      <blockquote class="blockquote fst-italic bg-light p-3 rounded">
        [cite_start]"Y resultaba muy apropiado, porque la democracia efectiva es la única esperanza para superar tales peligros." [cite: 885]
      </blockquote>
      [cite_start]<p>Las grandes instituciones, tanto públicas como privadas, no actuarán "a menos que sea bajo una presión ciudadana de carácter masivo"[cite: 886]. Si las vías democráticas se cierran, la ciudadanía pierde su capacidad de presionar por el cambio.</p>
      [cite_start]<p>Chomsky identifica que las políticas neoliberales de austeridad han sido un factor sustancial en este deterioro, "ya que han concentrado la riqueza y socavado la democracia operativa, dejando marginada a la mayor parte de la población"[cite: 717]. [cite_start]Esto crea una presa fácil para los demagogos y las "crecientes y destructivas tendencias hipernacionalistas y autocráticas"[cite: 716].</p>
    `
  },
  {
    id: 3,
    title: "La Solución: Activismo Popular y Cooperación Internacional",
    summary: "Frente a la extinción, la única alternativa viable es la movilización popular constante y la cooperación internacional para forzar acuerdos y cambiar el rumbo.",
    image: "https://via.placeholder.com/800x400.png?text=Activismo+Popular",
    content: `
      <p class="lead">La solución que plantea Chomsky no proviene de los sistemas de poder actuales, sino de la gente. [cite_start]Proclama la "urgente necesidad de que se materialicen tratados internacionales" y cómo "una serie de movimientos populares ya se están movilizando" para forzarlos[cite: 25].</p>
      [cite_start]<p>No podemos esperar que los sistemas de poder "lleven a cabo las acciones apropiadas [...] a menos que se vean empujados por una movilización popular y un activismo constantes y entregados"[cite: 113, 343].</p>
      [cite_start]<p>El libro destaca ejemplos de éxito, como la "ingente movilización popular de principios de los ochenta contra el desarrollo de las armas nucleares" [cite: 114, 366] o, más recientemente, el <strong>Sunrise Movement</strong> en EE.UU.</p>
      <blockquote class="blockquote fst-italic bg-light p-3 rounded">
        [cite_start]"Bajo una gran presión popular, la congresista Alexandria Ocasio-Cortez, secundada por el senador Ed Markey, puso el New Deal Verde en la agenda, un logro bastante importante." [cite: 874]
      </blockquote>
      <p>Chomsky insiste en que no hay que rendirse. [cite_start]Cuando se le pregunta cómo mantener el espíritu, su respuesta es "concisa y sencilla: '¿Cuál sería entonces la alternativa?'"[cite: 130]. [cite_start]La conclusión es clara: "¡No hay que rendirse!"[cite: 131].</p>
    `
  }
];