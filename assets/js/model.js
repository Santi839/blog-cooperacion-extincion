// assets/js/model.js

// MODELO (MVC)
// Aquí "quemamos" los datos. Es nuestro modelo de datos.
// Este archivo ahora contiene 12 posts.

const posts = [
  // === LOS 3 POSTS ORIGINALES ===
  {
    id: 1,
    title: "Las Amenazas Gemelas: Armas Nucleares y Cambio Climático",
    summary: "Desde 1945, la humanidad vive bajo dos amenazas existenciales que surgieron tras la Segunda Guerra Mundial: el holocausto nuclear y la catástrofe climática.",
    image: "assets/images/post1.jpg", 
    content: `
      [cite_start]<p class="lead">Noam Chomsky argumenta que la perspectiva de la extinción humana surgió tras la Segunda Guerra Mundial, con el inicio de la era del Antropoceno[cite: 22].</p>
      [cite_start]<p>Chomsky traza la dualidad de la amenaza existencial que suponen las armas nucleares y el cambio climático, explicando cómo surgieron y cómo interactúan[cite: 23]. [cite_start]El 6 de agosto de 1945, supimos que "la inteligencia de nuestra especie había concebido los medios para acabar [...] con el experimento humano"[cite: 135].</p>
      [cite_start]<p>Al mismo tiempo, surgía una segunda era, el <strong>Antropoceno</strong>, definida por el impacto humano extremo sobre el entorno[cite: 146].</p>
      
      <blockquote class="my-4">
        [cite_start]"Así pues, de acuerdo con su análisis, el Antropoceno y la era atómica coincidirían, por lo que constituirían una amenaza dual para la perpetuación de la vida humana organizada." [cite: 151]
        <footer class="blockquote-footer mt-2">Noam Chomsky</footer>
      </blockquote>
      
      [cite_start]<p>Estamos inmersos en una sexta extinción masiva, pero esta vez, provocada por el ser humano[cite: 152, 155]. [cite_start]A diferencia de las anteriores, "los animales de mayor tamaño morirán desproporcionadamente"[cite: 158].</p>
    `
  },
  {
    id: 2,
    title: "La Tercera Amenaza: El Vaciamiento de la Democracia",
    summary: "Más allá de las armas y el clima, existe una tercera amenaza que agrava las otras dos: el socavamiento y debilitamiento de la democracia en todo el mundo.",
    image: "assets/images/post2.jpg",
    content: `
      [cite_start]<p class="lead">Chomsky añade una "tercera amenaza existencial, la del socavamiento de la democracia, que, a su vez, exacerba el cambio climático y las amenazas nucleares"[cite: 81, 772, 773].</p>
      
      [cite_start]<p>Esta amenaza fue añadida por el <em>Bulletin of Atomic Scientists</em> al ajustar el Reloj del Apocalipsis, citando "el menoscabo de la democracia"[cite: 883, 1002]. ¿Por qué es tan peligrosa?</p>
      
      <blockquote class="my-4">
        [cite_start]"Y resultaba muy apropiado, porque la democracia efectiva es la <strong>única esperanza para superar tales peligros</strong>." [cite: 885]
        <footer class="blockquote-footer mt-2">Noam Chomsky</footer>
      </blockquote>
      
      [cite_start]<p>Las grandes instituciones, tanto públicas como privadas, no actuarán "a menos que sea bajo una presión ciudadana de carácter masivo"[cite: 886]. Si las vías democráticas se cierran, la ciudadanía pierde su capacidad de presionar por el cambio.</p>
      [cite_start]<p>Chomsky identifica que las políticas neoliberales de austeridad han sido un factor sustancial en este deterioro, "ya que han concentrado la riqueza y socavado la democracia operativa, dejando marginada a la mayor parte de la población"[cite: 717].</p>
    `
  },
  {
    id: 3,
    title: "La Solución: Activismo Popular y Cooperación Internacional",
    summary: "Frente a la extinción, la única alternativa viable es la movilización popular constante y la cooperación internacional para forzar acuerdos y cambiar el rumbo.",
    image: "assets/images/post3.jpg",
    content: `
      <p class="lead">La solución que plantea Chomsky no proviene de los sistemas de poder actuales, sino de la gente. [cite_start]Proclama la "urgente necesidad de que se materialicen tratados internacionales" [cite: 25] [cite_start]y cómo "una serie de movimientos populares ya se están movilizando" [cite: 25, 921] para forzarlos.</p>
      
      [cite_start]<p>No podemos esperar que los sistemas de poder "lleven a cabo las acciones apropiadas [...] a menos que se vean empujados por una movilización popular y un activismo constantes y entregados"[cite: 113, 343].</p>
      
      [cite_start]<p>El libro destaca ejemplos de éxito, como la "ingente movilización popular de principios de los ochenta contra el desarrollo de las armas nucleares" [cite: 114, 366] [cite_start]o, más recientemente, el <strong>Sunrise Movement</strong> en EE.UU.[cite: 873].</p>
      
      <blockquote class="my-4">
        [cite_start]"Bajo una gran presión popular, la congresista Alexandria Ocasio-Cortez, secundada por el senador Ed Markey, puso el New Deal Verde en la agenda, un logro bastante importante." [cite: 874, 878]
        <footer class="blockquote-footer mt-2">Noam Chomsky</footer>
      </blockquote>
      
      <p>Chomsky insiste en que no hay que rendirse. [cite_start]Cuando se le pregunta cómo mantener el espíritu, su respuesta es "concisa y sencilla: '¿Cuál sería entonces la alternativa?'"[cite: 130]. [cite_start]La conclusión es clara: "¡No hay que rendirse!"[cite: 131].</p>
    `
  },

  // === 9 NUEVOS POSTS ===
  {
    id: 4,
    title: "El Antropoceno y la 'Gran Aceleración'",
    summary: "No solo vivimos en una nueva era geológica definida por el impacto humano; vivimos en un período de aceleración sin precedentes que comenzó alrededor de 1950.",
    image: "assets/images/post4.jpg",
    content: `
      [cite_start]<p class="lead">El 6 de agosto de 1945 no solo inauguró la era atómica, sino también, sin que lo supiéramos, una nueva época geológica: el <strong>Antropoceno</strong>[cite: 146].</p>
      [cite_start]<p>Esta época se define "por un nivel extremo de impacto humano sobre el entorno"[cite: 146]. [cite_start]Los científicos del Anthropocene Working Group recomendaron situar sus inicios justo al final de la Segunda Guerra Mundial[cite: 148, 149].</p>
      [cite_start]<p>Dentro de esta era, los científicos destacan la <strong>"Gran Aceleración"</strong>, un período que comenzó alrededor de 1950[cite: 92]. [cite_start]Durante este tiempo, "los niveles de concentración de carbono han comenzado a elevarse con celeridad hasta más de cuatrocientas partes por millón, muy por encima de las trescientas cincuenta" [cite: 91] consideradas seguras. [cite_start]Las emisiones de CO2 están aumentando "a la tasa más elevada existente en sesenta y seis millones de años"[cite: 161].</p>
    `
  },
  {
    id: 5,
    title: "La 'Organización más Peligrosa de la Historia'",
    summary: "Chomsky hace una afirmación sorprendente: el Partido Republicano de EE.UU. es, potencialmente, la organización más peligrosa de la historia humana por su negacionismo climático.",
    image: "assets/images/post5.jpg",
    content: `
      [cite_start]<p class="lead">Chomsky pide a la audiencia que pondere un "hecho de una excepcionalidad tremenda": que "una organización política de la mayor importancia, desde el país más poderoso en la historia del mundo, está dedicada casi literalmente a la destrucción de la vida en la Tierra"[cite: 95, 193].</p>
      [cite_start]<p>Se refiere al Partido Republicano de EE.UU.[cite: 96]. [cite_start]Señala que en las primarias de 2016, "cada uno de los candidatos ha negado los datos del cambio climático"[cite: 196]. [cite_start]El candidato favorito (Trump) exigía "incrementar el uso de los combustibles fósiles, incluido el carbón" [cite: 199] [cite_start]y "acelerando así la carrera hacia el desastre"[cite: 200].</p>
      
      <blockquote class="my-4">
        [cite_start]"Si consideramos los riesgos, es justo preguntarse si ha habido jamás una organización más peligrosa en toda la historia de la humanidad que el Partido Republicano. [...] creo que la respuesta está muy clara." [cite: 203, 204]
        <footer class="blockquote-footer mt-2">Noam Chomsky</footer>
      </blockquote>
      [cite_start]<p>Critica que esta "pasmosa situación pase sin apenas ninguna crítica" [cite: 205] [cite_start]en los medios, comparando la ceguera colectiva con la de "los lemmings se arrojan al precipicio"[cite: 209].</p>
    `
  },
  {
    id: 6,
    title: "A Dos Minutos de la Medianoche: El Reloj del Apocalipsis",
    summary: "El simbólico Reloj del Apocalipsis se ha ajustado para reflejar no solo las armas y el clima, sino también la desinformación que socava nuestra capacidad de actuar.",
    image: "assets/images/post6.jpg",
    content: `
      [cite_start]<p class="lead">El Reloj del Apocalipsis, creado en 1947 por científicos nucleares, usa la metáfora de "la medianoche" para significar el "desastre terminal para todo el mundo"[cite: 264].</p>
      [cite_start]<p>En el momento de la charla, el reloj se había movido a tres minutos de la medianoche [cite: 283][cite_start], "lo más cerca que ha estado desde principios de los años ochenta"[cite: 267]. [cite_start]Sin embargo, más recientemente, el reloj se ajustó a <strong>dos minutos de la medianoche</strong>[cite: 881].</p>
      [cite_start]<p>Las razones de este ajuste ya no son solo las dos amenazas principales (guerra nuclear y calentamiento global)[cite: 882]. Por primera vez, se añadió una tercera amenaza:</p>
      <blockquote class="my-4">
        [cite_start]"...el menoscabo de la democracia. [cite: 883] [cite_start][...] el incremento del recurso a la guerra informativa para minar la democracia en todo el mundo, aumentando el riesgo que suponen [...] y poniendo el futuro de la civilización en un extraordinario peligro." [cite: 1002]
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
      [cite_start]<p class="lead">Chomsky advierte que "el hecho de que se haya evitado la catástrofe durante setenta años se debe casi a un milagro"[cite: 138]. Ese milagro, a menudo, tiene nombre y apellido.</p>
      <p>El libro destaca a dos individuos cuyas acciones personales nos salvaron de una guerra nuclear terminal:</p>
      <ul>
        [cite_start]<li><strong>Vasily Arjípov (1962):</strong> Durante la crisis de los misiles de Cuba, Arjípov "se negó a autorizar el lanzamiento de proyectiles con ojivas nucleares" [cite: 108, 281] [cite_start]desde su submarino, a pesar de que los otros dos oficiales a cargo sí querían hacerlo[cite: 110].</li>
        [cite_start]<li><strong>Stanislav Petrov (1983):</strong> Cuando el sistema de alerta temprana soviético detectó (erróneamente) un "aparente ataque nuclear masivo de Estados Unidos" [cite: 278][cite_start], el oficial al mando, Petrov, "decidió dejarlo estar en lugar de transmitir la información a instancias más elevadas" [cite: 279][cite_start], violando el protocolo y salvándonos de una probable destrucción[cite: 107].</li>
      </ul>
      <blockquote class="my-4">
        [cite_start]"El destino de la civilización ha descansado en demasiadas ocasiones sobre decisiones como esas durante la era atómica, y esto no puede ser." [cite: 282]
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
      [cite_start]<p class="lead">La principal amenaza nuclear se encuentra actualmente en la frontera rusa, con una "peligrosa escalada militar a ambos lados"[cite: 287, 288]. [cite_start]Chomsky argumenta que esto es "en gran parte una consecuencia de la expansión que ha estado llevando a cabo la OTAN desde el colapso de la Unión Soviética"[cite: 298].</p>
      [cite_start]<p>Tras la caída del Muro, Gorbachov aceptó la unificación de Alemania y su entrada en la OTAN, una concesión "bastante remarcable"[cite: 304]. [cite_start]Esto se hizo con un <em>quid pro quo</em> verbal: que la OTAN no se expandiría "ni un centímetro hacia el Este"[cite: 305].</p>
      <p>Esa promesa se rompió. [cite_start]Primero con Clinton, "la OTAN se adentró aún más hacia el Este, hasta la misma frontera de Rusia" [cite: 316][cite_start], y luego ofreciendo el ingreso a Ucrania, "el corazón geopolítico de Rusia"[cite: 317].</p>
      <blockquote class="my-4">
        [cite_start]"George Kennan y otros hombres de Estado con experiencia ya habían advertido antes, desde el mismo comienzo, que la ampliación de la OTAN sería, según sus propias palabras, 'un trágico error', una equivocación política de proporciones históricas de la que ahora vemos los resultados." [cite: 319]
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
      [cite_start]<p class="lead">Durante la charla, Wallace Shawn pregunta por qué los medios, como <em>The New York Times</em>, son "tan reacios a escribir sobre estas cosas"[cite: 422].</p>
      [cite_start]<p>Chomsky explica que no es necesariamente "mala fe"[cite: 424], sino una doctrina profesional llamada <strong>"objetividad"</strong>. [cite_start]En la práctica, esto significa "informar de un modo preciso e imparcial de los entresijos del Gobierno, la Casa Blanca o el Congreso"[cite: 425].</p>
      <p>El problema es que esta "objetividad" limita el debate. [cite_start]Si "Donald Trump tuitea cualquier vulgaridad a las tres de la mañana, será la noticia más importante" [cite: 425][cite_start], pero los temas que quedan "fuera del estrecho marco político-económico establecido por el sistema" [cite: 427] [cite_start]se consideran "una actitud sesgada" o "una pérdida de la objetividad"[cite: 428].</p>
      <blockquote class="my-4">
        [cite_start]"La información está disponible. [cite: 436] [cite_start]Pueden averiguarse muchas cosas, pero no se sirven en bandeja de plata, y sobre eso va el activismo." [cite: 437]
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
      [cite_start]<p class="lead">Chomsky, quien ha participado en desobediencia civil y ha estado en prisión por ello [cite: 456][cite_start], la considera una "táctica legítima"[cite: 457]. [cite_start]Sin embargo, critica su uso cuando se hace como "una especie de declaración personal de conciencia" [cite: 457] sin pensar en las consecuencias.</p>
      
      [cite_start]<p>Advierte contra acciones que, aunque hacen sentir bien al activista (como "rompiendo escaparates" [cite: 469][cite_start]), terminan "provocando el enfado de los trabajadores" [cite: 464] [cite_start]o del público en general, lo cual puede ser "dañino"[cite: 462].</p>
      
      <blockquote class="my-4">
        [cite_start]"La desobediencia civil tiene sentido si sirve para que otros ciudadanos se den cuenta de que hay un problema lo suficientemente serio como para que alguna gente asuma riesgos, de manera que, quizá, se pongan a pensar sobre ello y vayan y hagan algo ellos mismos." [cite: 460]
        <footer class="blockquote-footer mt-2">Noam Chomsky</footer>
      </blockquote>
      [cite_start]<p>En resumen, si no hay una base de apoyo y organización, la desobediencia civil puede ser contraproducente[cite: 461].</p>
    `
  },
  {
    id: 11,
    title: "'Extraños en su Propia Tierra': Empatía para Superar la División",
    summary: "Para construir un movimiento de masas, es crucial entender y respetar las preocupaciones de quienes no piensan como nosotros, en lugar de ridiculizarlos.",
    image: "assets/images/post11.jpg",
    content: `
      [cite_start]<p class="lead">¿Cómo se llega a la gente que apoya a políticos que niegan el cambio climático? [cite: 475] [cite_start]Chomsky insiste en que "hay que afrontarlo con delicadeza y comprensión"[cite: 477].</p>
      [cite_start]<p>Menciona que los demócratas "abandonaron a la clase obrera hace décadas" [cite: 491][cite_start], dejando a esta gente "marginada, por la que nadie hace nada"[cite: 490].</p>
      [cite_start]<p>Cita el libro de Arlie Hochschild, "Extraños en su propia tierra"[cite: 499], que estudió una comunidad pobre en Luisiana. [cite_start]Los habitantes "se oponen por completo a la Agencia de Protección Medioambiental" [cite: 501] a pesar de sufrir la contaminación. ¿Por qué?</p>
      
      <blockquote class="my-4">
        [cite_start]"Ven a la Agencia [...] como un grupo de gente de ciudad con un doctorado, que va hasta allí y les dice cosas como que no pueden pescar, pero que a la industria petroquímica ni le chistan." [cite: 502]
        <footer class="blockquote-footer mt-2">Noam Chomsky (resumiendo a Hochschild)</footer>
      </blockquote>
      [cite_start]<p>Esas actitudes "son significativas; merecen respeto, no burlas, y creo que se pueden abordar"[cite: 504].</p>
    `
  },
  {
    id: 12,
    title: "Una Solución Concreta: El New Deal Verde",
    summary: "Frente a la crisis climática, propuestas como el 'New Deal Verde' (GND) son esenciales. Son ambiciosas, pero viables y necesarias para la supervivencia.",
    image: "assets/images/post12.jpg",
    content: `
      <p class="lead">El libro no solo se enfoca en los problemas, sino también en las soluciones. [cite_start]Una de las más destacadas es el <strong>New Deal Verde (GND)</strong>[cite: 743].</p>
      [cite_start]<p>Chomsky afirma que las propuestas de esta naturaleza "deben tener éxito. Han de tenerlo, o, de lo contrario, estamos condenados"[cite: 746, 747].</p>
      [cite_start]<p>Destaca el trabajo del economista Robert Pollin, quien ha delineado propuestas detalladas que demuestran la viabilidad de una transición ecológica[cite: 725, 747].</p>
      [cite_start]<p>El GND ganó tracción política gracias al activismo de base, notablemente el <strong>Sunrise Movement</strong>, un grupo de jóvenes que "llegó al punto de hacer una sentada en las oficinas congresuales"[cite: 873].</p>
      <blockquote class="my-4">
        [cite_start]"Como resultado del activismo de este grupo de jóvenes, ahora [el GND] está en el centro del programa; [cite: 877] [cite_start][...] Se trata de un cambio tremendo logrado por el compromiso de un reducido grupo de jóvenes." [cite: 880]
        <footer class="blockquote-footer mt-2">Noam Chomsky</footer>
      </blockquote>
    `
  }
];