// assets/js/model.js

// MODELO (MVC)
// Aquí "quemamos" los datos. Es nuestro modelo de datos.
// Este archivo ahora contiene 12 posts.

const posts = [
  // === POSTS 1 y 2 (Ya estaban limpios) ===
  {
    id: 1,
    title: "Las Amenazas Gemelas: Armas Nucleares y Cambio Climático",
    summary: "Desde 1945, la humanidad vive bajo dos amenazas existenciales que surgieron tras la Segunda Guerra Mundial: el holocausto nuclear y la catástrofe climática.",
    image: "assets/images/post1.jpg", 
    content: `
      <p class="lead">Noam Chomsky argumenta que la perspectiva de la extinción humana surgió tras la Segunda Guerra Mundial, con el inicio de la era del Antropoceno.</p>
      <p>Chomsky traza la dualidad de la amenaza existencial que suponen las armas nucleares y el cambio climático, explicando cómo surgieron y cómo interactúan. El 6 de agosto de 1945, supimos que "la inteligencia de nuestra especie había concebido los medios para acabar [...] con el experimento humano".</p>
      <p>Al mismo tiempo, surgía una segunda era, el <strong>Antropoceno</strong>, definida por el impacto humano extremo sobre el entorno.</p>
      
      <blockquote class="my-4">
        "Así pues, de acuerdo con su análisis, el Antropoceno y la era atómica coincidirían, por lo que constituirían una amenaza dual para la perpetuación de la vida humana organizada."
        <footer class="blockquote-footer mt-2">Noam Chomsky</footer>
      </blockquote>
      
      <p>Estamos inmersos en una sexta extinción masiva, pero esta vez, provocada por el ser humano. A diferencia de las anteriores, "los animales de mayor tamaño morirán desproporcionadamente".</p>
    `
  },
  {
    id: 2,
    title: "La Tercera Amenaza: El Vaciamiento de la Democracia",
    summary: "Más allá de las armas y el clima, existe una tercera amenaza que agrava las otras dos: el socavamiento y debilitamiento de la democracia en todo el mundo.",
    image: "assets/images/post2.jpg",
    content: `
      <p class="lead">Chomsky añade una "tercera amenaza existencial, la del socavamiento de la democracia, que, a su vez, exacerba el cambio climático y las amenazas nucleares".</p>
      
      <p>Esta amenaza fue añadida por el <em>Bulletin of Atomic Scientists</em> al ajustar el Reloj del Apocalipsis, citando "el menoscabo de la democracia". ¿Por qué es tan peligrosa?</p>
      
      <blockquote class="my-4">
        "Y resultaba muy apropiado, porque la democracia efectiva es la <strong>única esperanza para superar tales peligros</strong>."
        <footer class="blockquote-footer mt-2">Noam Chomsky</footer>
      </blockquote>
      
      <p>Las grandes instituciones, tanto públicas como privadas, no actuarán "a menos que sea bajo una presión ciudadana de carácter masivo". Si las vías democráticas se cierran, la ciudadanía pierde su capacidad de presionar por el cambio.</p>
      <p>Chomsky identifica que las políticas neoliberales de austeridad han sido un factor sustancial en este deterioro, "ya que han concentrado la riqueza y socavado la democracia operativa, dejando marginada a la mayor parte de la población".</p>
    `
  },
  
  // === POST 3 (CORREGIDO) ===
  {
    id: 3,
    title: "La Solución: Activismo Popular y Cooperación Internacional",
    summary: "Frente a la extinción, la única alternativa viable es la movilización popular constante y la cooperación internacional para forzar acuerdos y cambiar el rumbo.",
    image: "assets/images/post3.jpg",
    content: `
      <p class="lead">La solución que plantea Chomsky no proviene de los sistemas de poder actuales, sino de la gente. Proclama la "urgente necesidad de que se materialicen tratados internacionales" y cómo "una serie de movimientos populares ya se están movilizando" para forzarlos.</p>
      
      <p>No podemos esperar que los sistemas de poder "lleven a cabo las acciones apropiadas [...] a menos que se vean empujados por una movilización popular y un activismo constantes y entregados".</p>
      
      <p>El libro destaca ejemplos de éxito, como la "ingente movilización popular de principios de los ochenta contra el desarrollo de las armas nucleares" o, más recientemente, el <strong>Sunrise Movement</strong> en EE.UU.</p>
      
      <blockquote class="my-4">
        "Bajo una gran presión popular, la congresista Alexandria Ocasio-Cortez, secundada por el senador Ed Markey, puso el New Deal Verde en la agenda, un logro bastante importante."
        <footer class="blockquote-footer mt-2">Noam Chomsky</footer>
      </blockquote>
      
      <p>Chomsky insiste en que no hay que rendirse. Cuando se le pregunta cómo mantener el espíritu, su respuesta es "concisa y sencilla: '¿Cuál sería entonces la alternativa?'". La conclusión es clara: "¡No hay que rendirse!".</p>
    `
  },

  // === POSTS 4-10 (Ya estaban limpios) ===
  {
    id: 4,
    title: "El Antropoceno y la 'Gran Aceleración'",
    summary: "No solo vivimos en una nueva era geológica definida por el impacto humano; vivimos en un período de aceleración sin precedentes que comenzó alrededor de 1950.",
    image: "assets/images/post4.jpg",
    content: `
      <p class="lead">El 6 de agosto de 1945 no solo inauguró la era atómica, sino también, sin que lo supiéramos, una nueva época geológica: el <strong>Antropoceno</strong>.</p>
      <p>Esta época se define "por un nivel extremo de impacto humano sobre el entorno". Los científicos del Anthropocene Working Group recomendaron situar sus inicios justo al final de la Segunda Guerra Mundial.</p>
      <p>Dentro de esta era, los científicos destacan la <strong>"Gran Aceleración"</strong>, un período que comenzó alrededor de 1950. Durante este tiempo, "los niveles de concentración de carbono han comenzado a elevarse con celeridad hasta más de cuatrocientas partes por millón, muy por encima de las trescientas cincuenta" consideradas seguras. Las emisiones de CO2 están aumentando "a la tasa más elevada existente en sesenta y seis millones de años".</p>
    `
  },
  {
    id: 5,
    title: "La 'Organización más Peligrosa de la Historia'",
    summary: "Chomsky hace una afirmación sorprendente: el Partido Republicano de EE.UU. es, potencialmente, la organización más peligrosa de la historia humana por su negacionismo climático.",
    image: "assets/images/post5.jpg",
    content: `
      <p class="lead">Chomsky pide a la audiencia que pondere un "hecho de una excepcionalidad tremenda": que "una organización política de la mayor importancia, desde el país más poderoso en la historia del mundo, está dedicada casi literalmente a la destrucción de la vida en la Tierra".</p>
      <p>Se refiere al Partido Republicano de EE.UU.. Señala que en las primarias de 2016, "cada uno de los candidatos ha negado los datos del cambio climático". El candidato favorito (Trump) exigía "incrementar el uso de los combustibles fósiles, incluido el carbón" y "acelerando así la carrera hacia el desastre".</p>
      
      <blockquote class="my-4">
        "Si consideramos los riesgos, es justo preguntarse si ha habido jamás una organización más peligrosa en toda la historia de la humanidad que el Partido Republicano. [...] creo que la respuesta está muy clara."
        <footer class="blockquote-footer mt-2">Noam Chomsky</footer>
      </blockquote>
      <p>Critica que esta "pasmosa situación pase sin apenas ninguna crítica" en los medios, comparando la ceguera colectiva con la de "los lemmings se arrojan al precipicio".</p>
    `
  },
  {
    id: 6,
    title: "A Dos Minutos de la Medianoche: El Reloj del Apocalipsis",
    summary: "El simbólico Reloj del Apocalipsis se ha ajustado para reflejar no solo las armas y el clima, sino también la desinformación que socava nuestra capacidad de actuar.",
    image: "assets/images/post6.jpg",
    content: `
      <p class="lead">El Reloj del Apocalipsis, creado en 1947 por científicos nucleares, usa la metáfora de "la medianoche" para significar el "desastre terminal para todo el mundo".</p>
      <p>En el momento de la charla, el reloj se había movido a tres minutos de la medianoche, "lo más cerca que ha estado desde principios de los años ochenta". Sin embargo, más recientemente, el reloj se ajustó a <strong>dos minutos de la medianoche</strong>.</p>
      <p>Las razones de este ajuste ya no son solo las dos amenazas principales (guerra nuclear y calentamiento global). Por primera vez, se añadió una tercera amenaza:</p>
      <blockquote class="my-4">
        "...el menoscabo de la democracia. [...] el incremento del recurso a la guerra informativa para minar la democracia en todo el mundo, aumentando el riesgo que suponen [...] y poniendo el futuro de la civilización en un extraordinario peligro."
        <footer class="blockquote-footer mt-2">Bulletin of Atomic Scientists</footer>
      </blockquote>
    `
  },
  {
    id: 7,
    title: "Los Héroes Anónimos que Salvaron al Mundo",
    summary: "Nuestra supervivencia ha dependido no de sistemas infalibles, sino de la valiente decisión de individuos que violaron el protocolo para evitar el apocalipsis.",
    image: "assets/images/post7.jpg",
    content: `
      <p class="lead">Chomsky advierte que "el hecho de que se haya evitado la catástrofe durante setenta años se debe casi a un milagro". Ese milagro, a menudo, tiene nombre y apellido.</p>
      <p>El libro destaca a dos individuos cuyas acciones personales nos salvaron de una guerra nuclear terminal:</p>
      <ul>
        <li><strong>Vasily Arjípov (1962):</strong> Durante la crisis de los misiles de Cuba, Arjípov "se negó a autorizar el lanzamiento de proyectiles con ojivas nucleares" desde su submarino, a pesar de que los otros dos oficiales a cargo sí querían hacerlo.</li>
        <li><strong>Stanislav Petrov (1983):</strong> Cuando el sistema de alerta temprana soviético detectó (erróneamente) un "aparente ataque nuclear masivo de Estados Unidos", el oficial al mando, Petrov, "decidió dejarlo estar en lugar de transmitir la información a instancias más elevadas", violando el protocolo y salvándonos de una probable destrucción.</li>
      </ul>
      <blockquote class="my-4">
        "El destino de la civilización ha descansado en demasiadas ocasiones sobre decisiones como esas durante la era atómica, y esto no puede ser."
        <footer class="blockquote-footer mt-2">Noam Chomsky</footer>
      </blockquote>
    `
  },
  {
    id: 8,
    title: "El 'Trágico Error': La Expansión de la OTAN",
    summary: "Las crecientes tensiones con Rusia no son accidentales. Chomsky las describe como el resultado predecible de la expansión de la OTAN hacia el Este.",
    image: "assets/images/post8.jpg",
    content: `
      <p class="lead">La principal amenaza nuclear se encuentra actualmente en la frontera rusa, con una "peligrosa escalada militar a ambos lados". Chomsky argumenta que esto es "en gran parte una consecuencia de la expansión que ha estado llevando a cabo la OTAN desde el colapso de la Unión Soviética".</p>
      <p>Tras la caída del Muro, Gorbachov aceptó la unificación de Alemania y su entrada en la OTAN, una concesión "bastante remarcable". Esto se hizo con un <em>quid pro quo</em> verbal: que la OTAN no se expandiría "ni un centímetro hacia el Este".</p>
      <p>Esa promesa se rompió. Primero con Clinton, "la OTAN se adentró aún más hacia el Este, hasta la misma frontera de Rusia", y luego ofreciendo el ingreso a Ucrania, "el corazón geopolítico de Rusia".</p>
      <blockquote class="my-4">
        "George Kennan y otros hombres de Estado con experiencia ya habían advertido antes, desde el mismo comienzo, que la ampliación de la OTAN sería, según sus propias palabras, 'un trágico error', una equivocación política de proporciones históricas de la que ahora vemos los resultados."
        <footer class="blockquote-footer mt-2">Noam Chomsky</footer>
      </blockquote>
    `
  },
  {
    id: 9,
    title: "¿Por Qué no lo Vemos en las Noticias?",
    summary: "Si las crisis son tan graves, ¿por qué los medios de comunicación no las tratan como tales? Chomsky apunta a la doctrina de la 'objetividad' periodística.",
    image: "assets/images/post9.jpg",
    content: `
      <p class="lead">Durante la charla, Wallace Shawn pregunta por qué los medios, como <em>The New York Times</em>, son "tan reacios a escribir sobre estas cosas".</p>
      <p>Chomsky explica que no es necesariamente "mala fe", sino una doctrina profesional llamada <strong>"objetividad"</strong>. En la práctica, esto significa "informar de un modo preciso e imparcial de los entresijos del Gobierno, la Casa Blanca o el Congreso".</p>
      <p>El problema es que esta "objetividad" limita el debate. Si "Donald Trump tuitea cualquier vulgaridad a las tres de la mañana, será la noticia más importante", pero los temas que quedan "fuera del estrecho marco político-económico establecido por el sistema" se consideran "una actitud sesgada" o "una pérdida de la objetividad".</p>
      <blockquote class="my-4">
        "La información está disponible. Pueden averiguarse muchas cosas, pero no se sirven en bandeja de plata, y sobre eso va el activismo."
        <footer class="blockquote-footer mt-2">Noam Chomsky</footer>
      </blockquote>
    `
  },
  {
    id: 10,
    title: "Tácticas de Activismo: ¿Cuándo Funciona la Desobediencia Civil?",
    summary: "La desobediencia civil es una táctica legítima, pero Chomsky advierte que debe usarse estratégicamente, no solo como una 'declaración personal de conciencia'.",
    image: "assets/images/post10.jpg",
    content: `
      <p class="lead">Chomsky, quien ha participado en desobediencia civil y ha estado en prisión por ello, la considera una "táctica legítima". Sin embargo, critica su uso cuando se hace como "una especie de declaración personal de conciencia" sin pensar en las consecuencias.</p>
      
      <p>Advierte contra acciones que, aunque hacen sentir bien al activista (como "rompiendo escaparates"), terminan "provocando el enfado de los trabajadores" o del público en general, lo cual puede ser "dañino".</p>
      
      <blockquote class="my-4">
        "La desobediencia civil tiene sentido si sirve para que otros ciudadanos se den cuenta de que hay un problema lo suficientemente serio como para que alguna gente asuma riesgos, de manera que, quizá, se pongan a pensar sobre ello y vayan y hagan algo ellos mismos."
        <footer class="blockquote-footer mt-2">Noam Chomsky</footer>
      </blockquote>
      <p>En resumen, si no hay una base de apoyo y organización, la desobediencia civil puede ser contraproducente.</p>
    `
  },

  // === POST 11 (CORREGIDO - EL DE TU IMAGEN) ===
  {
    id: 11,
    title: "'Extraños en su Propia Tierra': Empatía para Superar la División",
    summary: "Para construir un movimiento de masas, es crucial entender y respetar las preocupaciones de quienes no piensan como nosotros, en lugar de ridiculizarlos.",
    image: "assets/images/post11.jpg",
    content: `
      <p class="lead">¿Cómo se llega a la gente que apoya a políticos que niegan el cambio climático? Chomsky insiste en que "hay que afrontarlo con delicadeza y comprensión".</p>
      
      <p>Menciona que los demócratas "abandonaron a la clase obrera hace décadas", dejando a esta gente "marginada, por la que nadie hace nada".</p>
      
      <p>Cita el libro de Arlie Hochschild, "Extraños en su propia tierra", que estudió una comunidad pobre en Luisiana. Los habitantes "se oponen por completo a la Agencia de Protección Medioambiental" a pesar de sufrir la contaminación. ¿Por qué?</p>
      
      <blockquote class="my-4">
        "Ven a la Agencia [...] como un grupo de gente de ciudad con un doctorado, que va hasta allí y les dice cosas como que no pueden pescar, pero que a la industria petroquímica ni le chistan."
        <footer class="blockquote-footer mt-2">Noam Chomsky (resumiendo a Hochschild)</footer>
      </blockquote>
      
      <p>Esas actitudes "son significativas; merecen respeto, no burlas, y creo que se pueden abordar".</p>
    `
  },
  
  // === POST 12 (Ya estaba limpio) ===
  {
    id: 12,
    title: "Una Solución Concreta: El New Deal Verde",
    summary: "Frente a la crisis climática, propuestas como el 'New Deal Verde' (GND) son esenciales. Son ambiciosas, pero viables y necesarias para la supervivencia.",
    image: "assets/images/post12.jpg",
    content: `
      <p class="lead">El libro no solo se enfoca en los problemas, sino también en las soluciones. Una de las más destacadas es el <strong>New Deal Verde (GND)</strong>.</p>
      <p>Chomsky afirma que las propuestas de esta naturaleza "deben tener éxito. Han de tenerlo, o, de lo contrario, estamos condenados".</p>
      <p>Destaca el trabajo del economista Robert Pollin, quien ha delineado propuestas detalladas que demuestran la viabilidad de una transición ecológica.</p>
      <p>El GND ganó tracción política gracias al activismo de base, notablemente el <strong>Sunrise Movement</strong>, un grupo de jóvenes que "llegó al punto de hacer una sentada en las oficinas congresuales".</p>
      <blockquote class="my-4">
        "Como resultado del activismo de este grupo de jóvenes, ahora [el GND] está en el centro del programa; [...] Se trata de un cambio tremendo logrado por el compromiso de un reducido grupo de jóvenes."
        <footer class="blockquote-footer mt-2">Noam Chomsky</footer>
      </blockquote>
    `
  }
];