export default {
  global: {
    componenteFormativo: 'Plan de pruebas de usabilidad',
    descripcionCurso:
      'Los conceptos, técnicas y herramientas relacionados con la arquitectura de la información determinan los elementos de interacción y sus funciones en la interfaz de un sistema de <i>software</i> interactivo. Además de permitir conocer a los usuarios, el tester debe entender que, para el éxito de la aplicación, es necesario validar la naturaleza del funcionamiento y, sobre todo, que la aplicación realmente sea usable y accesible.  ',
    imagenBannerPrincipal: require('@/assets/curso/Images/header/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/Images/header/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Arquitectura de la información, navegación y búsqueda',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Introducción a la arquitectura de la información',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'El arquitecto de la información',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'La investigación de la audiencia',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Organizando la información',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Metodologías de evaluación de usabilidad y accesibilidad',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Introducción y conceptos básicos',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Plan de evaluación, introducción y conceptos básicos ',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Introducción a la experiencia de usuario',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Diseño centrado en el usuario',
            hash: 't_3_1',
          },
        ],
      },
    ],
    subMenu: [
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Busquets, C. (2020). Arquitectura de la información: qué es y cómo hacerlo. uiFromMars.  ',
      link: 'https://www.uifrommars.com/arquitectura-de-la-informacion/ ',
    },
    {
      referencia:
        '<i>Assistant Secretary for Public Affairs.</i> (2020). <i>Card Sorting</i>. Usability.gov. ',
      link:
        'https://www.usability.gov/how-to-and-tools/methods/card-sorting.html ',
    },
    {
      referencia:
        'Granollers, T. (2014). Métodos evaluación usabilidad. Curso de Interacción Persona-Ordenador. ',
      link:
        'https://mpiua.invid.udl.cat/fases-mpiua/evaluacion/metodos-evaluacion-usabilidad/ ',
    },
    {
      referencia:
        'Granollers, T. (2015). Plan de evaluación. Curso de Interacción Persona-Ordenador.  ',
      link:
        'https://mpiua.invid.udl.cat/fases-mpiua/evaluacion/plan-de-evaluacion/  ',
    },
    {
      referencia:
        'Granollers, T. (2016). Evaluación. Curso de Interacción Persona-Ordenador ',
      link: ' https://mpiua.invid.udl.cat/fases-mpiua/evaluacion/ ',
    },
    {
      referencia:
        'Granollers, T. (2018). Clasificación de los métodos. Curso de Interacción Persona-Ordenador.  ',
      link:
        'https://mpiua.invid.udl.cat/fases-mpiua/evaluacion/clasificacion/  ',
    },
    {
      referencia:
        'Justinmind. (2018). UCD vs UX: <i>What’s the difference? </i> - UX Planet. Medium ',
      link: 'https://uxplanet.org/ucd-vs-ux-whats-the-difference-255443efa5f  ',
    },
    {
      referencia:
        'Barbaroux, M. (2016). <i>Untangling UX, part 1: Design Thinking vs UCD. Cambridge Consultants</i>.  ',
      link:
        'https://www.cambridgeconsultants.com/insights/untangling-ux-part-1-design-thinking-vs-ucd ',
    },
    {
      referencia:
        '<i>Interaction Design Foundation</i> [IDF]. (2020). <i>User Centered Design</i>.  ',
      link:
        'https://www.interaction-design.org/literature/topics/user-centered-design  ',
    },
    {
      referencia:
        'ISO. (2019).  <i>Ergonomics of human-system interaction — Part 210: Human-centred design for interactive systems</i> (ISO 9241-210:2010).   ',
      link: 'https://www.iso.org/standard/52075.html ',
    },
  ],
  glosario: [
    {
      termino: 'Arquitectura de la Información',
      significado:
        'Disciplina encargada del estudio, análisis, organización, disposición y estructuración de la información en espacios de contenidos, y de la selección y presentación de los datos en los sistemas de información interactivos y no interactivos.',
    },
    {
      termino: '<i>Brainstorming</i>',
      significado:
        'Es una herramienta de trabajo grupal, que facilita el surgimiento de nuevas ideas sobre un tema o problema determinado. La lluvia de ideas es una técnica de grupo para generar ideas originales en un ambiente relajado.',
    },
    {
      termino: '<i>Card Sorting</i>',
      significado:
        'Método utilizado para ayudar a diseñar o evaluar la arquitectura de información de un sitio. En una sesión con este método, los participantes organizan los temas en categorías que tienen sentido para ellos y también pueden ayudar a etiquetar estos grupos.',
    },
    {
      termino: 'UX',
      significado:
        'Es una referencia a cómo un usuario experimenta e interactúa con un producto o servicio, un concepto más que un proceso.',
    },
    {
      termino: '<i>Mapping</i>',
      significado: 'Herramienta para realizar mapas conceptuales.',
    },
    {
      termino: 'Página <i>web</i>',
      significado:
        'Es un documento que se puede mostrar en un navegador <i>web</i> como Firefox, Google Chrome, Microsoft Internet Explorer o Edge, o Safari de Apple,',
    },
  ],
  complementario: [
    {
      texto:
        'XMind: Aplicación poderosa para el diseño y la creación de mapas mentales y lluvias de ideas.',
      tipo: 'Instalador',
      link: 'https://www.xmind.net/',
    },
    {
      texto:
        'Artificial Bridge. (2020). Aprende a Crear un CARD SORTING REMOTO fácilmente y GRATIS con Optimal Workshop [Video]. YouTube. ',
      tipo: 'Video Youtube',
      link: 'https://www.youtube.com/watch?v=kuWQCxB5r_k',
    },
    {
      texto:
        'Oracleusableapps. (2013). Oracle <i>Applications User Experience Usability</i> Labs [Video]. YouTube. ',
      tipo: 'Video Youtube',
      link: 'https://www.youtube.com/watch?v=Nar8SZK3MdU ',
    },
    {
      texto:
        'Modroño, T. (2017). Metodologías de UX: Evaluación Heurística (PARTE I). Medium. ',
      tipo: 'Artículo',
      link:
        'https://blog.interactius.com/metodolog%C3%ADas-de-ux-evaluaci%C3%B3n-heur%C3%ADstica-parte-i-b5d02b566987 ',
    },
    {
      texto:
        'Nielsen, J. (2020). 10 <em>Usability Heuristics for User Interface Design</em>. Nielsen Norman Group. ',
      tipo: 'Artículo',
      link: 'https://www.nngroup.com/articles/ten-usability-heuristics/ ',
    },
    {
      texto:
        'Granollers, T. (2015). Plan de evaluación. Curso de Interacción Persona-Ordenador',
      tipo: 'Archivo',
      link:
        'http://mpiua.invid.udl.cat/wp-content/uploads/2014/07/Comparativa-M%C3%A9todos-Evaluaci%C3%B3n-Usabilidad.png ',
    },
    {
      texto: 'Negru, S. (2020). <em>Usability Test Plan Template.</em> ',
      tipo: 'Archivo',
      link: 'https://profs.info.uaic.ro/~stefan.negru/usability',
    },
    {
      texto:
        'Granollers, T. (2020). Curso IPO: Accesibilidad. Curso de Interacción Persona-Ordenador. ',
      tipo: 'Artículo',
      link: 'https://mpiua.invid.udl.cat/curso-ipo/curso-ipo-accesibilidad/ ',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Santiago Muñoz de la Rosa',
        cargo: 'Experto Temático',
        centro:
          'Centro de teleinformática y producción industrial - Regional Cauca',
      },
      {
        nombre: 'María Inés Machado López',
        cargo: 'Diseñadora Instruccional',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Carolina Coca Salazar',
        cargo: 'Revisora metodológica y pedagógica ',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Darío González',
        cargo: 'Corrección de estilo',
        centro: 'Centro Agropecuario La Granja - Regional Tolima',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Oscar Marquez Sanabria',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gustavo Adolfo Marún Suárez',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Andrés Mauricio Santaella ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodriguez Rodriguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ricardo Vásquez Arroyave',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Caceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Jhana Johanna Bustillo Ardila',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Alvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
