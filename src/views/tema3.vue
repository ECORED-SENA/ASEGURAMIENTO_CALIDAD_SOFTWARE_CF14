<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Introducción a la experiencia de usuario
    
  
    .row.justify-content-center.align-items-center.sp4.p-2
      .col-lg-8
        p En esta unidad, se pretende generar claridad sobre conceptos que comúnmente se utilizan en equipos de desarrollo, como, por ejemplo, el término experiencia de usuario. Es por eso que la pretensión de esta sección es abordar de manera clave algunas particularidades de esta disciplina, a través de la metodología del Diseño Centrado en el Usuario, toda vez que sin la aplicación de la metodología no es muy posible llegar a generar experiencias positivas en el uso de un sistema <i>software</i>, interactivo.
      .col-lg-4.mb-5.mb-lg-0
        img(src="@/assets/curso/Images/tema3/img_1.svg", alt="")
    
    Separador 
    
    #t_3_1.titulo-segundo
      h2 3.1 Diseño centrado en el usuario
    
    p.mb-5 En esta última sección, se quiere dar a conocer una breve ilustración sobre una de las metodologías más importantes para el desarrollo de sistemas interactivos <em>software</em>. Esta metodología, además de ser estandarizada por la ISO 13407, propone una serie de lineamientos y fases para el éxito de las aplicaciones.

    .row.align-items-center.justify-content-center.mb-3
      .col-lg-10
        h3.mb-3 ¿Por qué diseño centrado en el usuario?
        p.mb-3 En la literatura, se encuentra una vasta información sobre las definiciones acerca de la metodología del Diseño Centrado en el Usuario <b>DCU</b> y de la experiencia de usuario UX. Por lo que, a nivel general, las definiciones convergen a que el <b>DCU</b> es un enfoque del diseño que se centra en los usuarios, a través de la planificación, el diseño y el desarrollo de un producto. Sus procesos y estrategias varían según el tipo de proyecto de diseño, no obstante, generalmente se basan en una combinación de actividades de investigación y diseño de <b>UX.</b> (Justinmind, 2018).
    
    .row.align-items-center.justify-content-center.mb-3     
      .col-lg-10
        .jumbotron-13.mb-3.p-4
          .row.justify-content-center.align-items-center.sp5.p-2
            .col-lg-7
              p El DCU es un paradigma, de cierta forma, cambia la forma en que se piensa y se percibe sobre los seres humanos y las computadoras. Este tipo de proceso de diseño tiene como objetivo involucrar activamente a los usuarios en cada etapa del proceso de construcción de un sistema interactivo <i>software</i>, para el desarrollo de productos más efectivos, eficientes y seguros. Estas etapas incluyen:  
            .col-lg-5.mb-5.mb-lg-0
              img(src="@/assets/curso/Images/tema3/img_2.svg", alt="")
    
    .col-lg-10.mx-auto.mb-5
      LineaTiempoD.color-secundario
        .p-4(titulo='Análisis de investigación' numero='1')
          .row.align-items-center
            .col-lg-8
              h3.mb-3 Análisis de investigación
              p Los pasos se inician con un análisis del usuario, el contexto y los escenarios. El análisis del usuario permite entender sus necesidades y conocer su perfil. Mientras que el de contexto busca entender todo lo que está alrededor, como la competencia, el mercado, entre otros. Analizar los escenarios permite entender un poco más las posibles formas de uso del sitio y corregirlas desde el comienzo. Aquí se pueden realizar entrevistas a los usuarios, se hace un análisis de la competencia respecto a su presencia digital, análisis heurístico, entre otros.
            .col-lg-4
              figure
                img(src='@/assets/curso/Images/tema3/img_3.svg' alt='')
        .p-4(titulo='Concepto y estrategia' numero='2')
          .row.align-items-center
            .col-lg-8
              h3.mb-3 Concepto y estrategia
              p La siguiente etapa incluye la conceptualización del proyecto, que consiste en organizar el mismo de manera esquemática. Un sitio <i>web</i> puede contener varias páginas <i>web</i>, es necesario definir la cantidad antes de iniciar su desarrollo. También, el sitio <i>web</i> puede necesitar ciertas funcionalidades, como base de datos, sistemas de seguridad, entre otros aspectos importantes. Para ello, se realizan mapas del sitio o <em>sitemaps</em>, diseño de arquitectura de la información y categorización de productos. Esta última implica identificar la línea de productos, como sucede con los <i>e-commerce,</i> donde se puede utilizar <em>card sorting</em>, que es una herramienta sencilla y práctica para establecer estas categorías.
            .col-lg-4
              figure
                img(src='@/assets/curso/Images/tema3/img_4.svg' alt='')

        .p-4(titulo='Diseño' numero='3')
          .row.align-items-center
            .col-lg-8
              h3.mb-3 Diseño
              p Luego, en la etapa de prototipado, se desarrolla un diseño en baja y alta, de manera que se puedan apreciar las funcionalidades del sitio <i>web</i>. El prototipado lo que busca es tener una <i>web</i> funcional, pero que no está en línea aún. Es una plataforma de prueba, sin colores ni diseños o fotos (diseño en baja). Solo es un sitio <i>web</i> donde se pueden hacer pruebas de funcionalidad, como el uso de botones, uso de formularios o caja de búsqueda, por mencionar algunos elementos. Se hacen también pruebas piloto y se define el diseño gráfico (diseño en alta). 

            .col-lg-4
              figure
                img(src='@/assets/curso/Images/tema3/img_5_1.gif' alt='')
         
        .p-4(titulo='Desarrollo' numero='4')
          .row.align-items-center
            .col-lg-8
              h3.mb-3 Desarrollo
              p La etapa anterior se pone en evidencia cuando se realiza el test de usuario, que incluye pruebas finales de la plataforma y uso de herramientas de analítica, como <i>eye tracking,</i> que permiten hacerle seguimiento a la vista mientras navega en una pantalla.
            .col-lg-4
              figure
                img(src='@/assets/curso/Images/tema3/img_5.svg' alt='')

        .p-4(titulo='Implementación y prueba' numero='5')
          .row.align-items-center
            .col-lg-8
              h3.mb-3 Implementación y prueba
              p Finalmente, una vez que se detectaron y corrigieron los problemas, se pasa al desarrollo e implementación del sitio <i>web</i>. Aquí se busca poner el proyecto <i>web</i> en producto final, para realizar el lanzamiento.
            .col-lg-4
              figure
                img(src='@/assets/curso/Images/tema3/img_6.svg' alt='')

    h3.mb-5 Contexto, objetivos y métodos
    .bloque-texto-g.color-acento-botones.p-3.p-sm-4.p-md-5.mb-5.verticalLine
      .bloque-texto-g__img.m-left(
      :style="{'background-image': `url(${require('@/assets/curso/Images/tema3/img_8.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Según <i>Interaction Design Foundation IDF</i>, los diseñadores centrados en el usuario necesitan de una comprensión profunda de sus usuarios objetivo, sus requerimientos y su entorno (IDF, 2020). Tener empatía y ser sensible a los puntos débiles de su usuario es clave.
     

    p.mb-3 IDF señala que el proceso tiene como objetivo capturar y abordar toda la experiencia del usuario de una interfaz. Por lo tanto, se debe involucrar a profesionales de múltiples disciplinas (por ejemplo, etnógrafos, psicólogos, ingenieros de <i>software</i>, y <i>hardware</i>), así como a expertos en el dominio, partes interesadas y los propios usuarios.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.mb-5.mb-lg-0
        .cajon.color-custom-1.p-4
          p.mb-3 De esta forma, como se ha apuntado en anteriores secciones, el equipo de desarrollo debe llevar a cabo el análisis y pruebas de usuario de los diseños producidos, basados en la estrategia del proyecto y los objetivos del usuario y del negocio. 

          p De manera adicional, para abarcar toda la experiencia del usuario, los usuarios deben participar durante todo el proceso de diseño centrado en el usuario, incluida la validación de los diseños.
      .col-lg-4.mb-5.mb-lg-0
        img(src="@/assets/curso/Images/tema3/img_10.svg", alt="")

    h3.mb-3 Generación de experiencias desde DCU

    p.mb-3 Es necesario hacer la diferenciación entre DCU y UX. Mientras que el diseño centrado en el usuario se refiere al proceso o estrategia aplicada para diseñar experiencias, la experiencia del usuario se ocupa de la experiencia específica que los usuarios tienen con los productos que utilizan.

    p Así que UX es una referencia a cómo un usuario experimenta e interactúa con un producto o servicio, un concepto más que un proceso. (Justinmind, 2018).

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        .cajon.color-acento-contenido.p-4.mb-3
          p.mb-3 Según la ISO 9241- 210: 2010 (ISO, 2019), la definición exacta de experiencia de usuario es: “Las percepciones y respuestas de una persona resultantes del uso y / o uso anticipado de un producto, sistema o servicio”. 

        p.mb-3  Así que el interés por la experiencia de usuario ha crecido de manera constante en los últimos años. Aunque UX se refiere a cómo un usuario interpreta la interacción que tiene con cualquier producto o servicio, ocupa un lugar especial en el diseño de interfaces <i>web</i> y móviles.

        p Finalmente, la UX no es un diseño centrado en el usuario. Más bien, UX es un valor del diseño centrado en el usuario, y se necesita crear experiencias <i>web</i> y móviles que atraigan a los usuarios y los mantengan interesados. Conocer a los usuarios y diseñar para ellos no es solo una buena práctica de diseño, también beneficia a la marca.
      .col-lg-4.mb-5.mb-lg-0
        img(src="@/assets/curso/Images/tema3/img_9.svg", alt="")
    
    .row.justify-content-center.mb-5
      h3.mb-3 Síntesis

      p.mb-3 Las pruebas de usabilidad son una necesidad para el desarrollador de <i>software</i>, debe tenerse en cuenta siempre la necesidad del usuario, ya que los gustos e intereses de quien desarrolla el contenido y los de quien lo va a usar no son necesariamente correspondientes. Una vez se ha determinado cuál es la prueba que mejor se adapta a sus necesidades, se requiere encontrar participantes válidos, bien sea usuarios directos o expertos en los contenidos que se encuentra desarrollando, sin perder de vista que estos deben tener correspondencia con la población objetivo a la cual se pretende impactar.

      p.mb-3 Las diferentes pruebas que hemos revisado permiten validar la usabilidad y accesibilidad de los contenidos, a la vez que mejorarán la experiencia de los usuarios, y ahorrarán tiempo y dinero en su creación.

      p El siguiente mapa ofrece una vista rápida de los contenidos de este componente formativo:
    
    .row.justify-content-center
      .col-lg-10.mb-3
        img(src="@/assets/curso/Images/tema3/img_11.svg", alt= "")























</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
