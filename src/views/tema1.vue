<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-0
    .px-4.px-md-5.pt-4.pt-md-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1  Arquitectura de la Información, navegación y búsqueda

      .row.justify-content-center.align-items-center
        .col-lg-6.mb-3
          img(src="@/assets/curso/Images/tema1/img_1.svg", alt= "")

      p.mb-3 En esta unidad, se abordarán, de manera general, áreas claves para la comprensión de la disciplina de la usabilidad, por lo que es necesario profundizar en temáticas como la Arquitectura de la Información (AI), donde no solo se trata de la estructura gráfica visual de una aplicación <i>software</i>, sino que también importa el contenido que se va colocar, es decir, debe haber un sentido y organización de la información, por lo que se adicionan técnicas y consejos  alrededor de una buena construcción, en pro de la navegación y la búsqueda. De esta manera, con estas temáticas y herramientas, se pretende que un egresado de este programa tenga las habilidades y competencias para validar y mejorar las aplicaciones <i>software</i> asociadas al concepto de la usabilidad. 

      Separador 
    
      #t_1_1.titulo-segundo
        h2 1.1 Introducción a la Arquitectura de la Información
      
      p.mb-5 La <i>Information Architecture (IA)</i>, o la Arquitectura de la Información (AI), tiene un propósito y unos beneficios de uso, es así como su presencia va más allá de los entornos no <i>web.</i> En ese sentido, se inicia mediante la generación de una serie de preguntas, para así entender de manera epistemológica el sentido de este concepto:

      .row.align-items-center.mb-5.sp6
        .col-lg-6.mb-4.mb-lg-0.py-3
          .row.align-items-center.mb-3
            .col-auto
              img.mx-3(src='@/assets/curso/Images/tema1/ico_10.svg' alt="", style="width:40px; display:block; margin:auto 0;")
            .col
              p.mb-0 ¿Cuántas veces ha tenido que preguntar en una estación de ferrocarriles la ubicación de una determinada vía? 

          hr
          .row.align-items-center.mb-3
            .col-auto
              img.mx-3(src='@/assets/curso/Images/tema1/ico_11.svg' alt="", style="width:40px; display:block; margin:auto 0;")
            .col
              p.mb-0 ¿Cuántas veces ha entrado en una página <em>web</em> buscando un teléfono de contacto y ha sido incapaz de localizarlo? 
          hr
          .row.align-items-center
            .col-auto
              img.mx-3(src='@/assets/curso/Images/tema1/ico_12.svg' alt="", style="width:40px; display:block; margin:auto 0;")
            .col
              p.mb-0 ¿En alguna ocasión se ha perdido por los pasillos de un hospital sin encontrar la consulta que buscaba?
        .col-lg-6.p-0
          figure
            img(src="@/assets/curso/Images/tema1/img_2.png")

      
      p.mb-5 Para resolver este tipo de problemas, y otros más, es que surge la Arquitectura de la Información (AI). La AI lleva tres décadas tratando de resolver y mejorar estos problemas.  El <em>Information Architecture Institute</em> (https://www.iainstitute.org) la define como: 

      .titulo-quinto.color-acento-contenido
        h4 Qué es la Arquitectura de la Información
      SlyderA.tarjeta_Sp-2.mb-3
        .row.align-items-center.justify-content-center
          .col-lg-5
            p Es el diseño estructural de los entornos de información compartidos.
          .col-lg-4
            figure
              img(src="@/assets/curso/Images/tema1/img_3.svg" alt="", style="width:600px; display:block; margin:0 auto;")
        .row.align-items-center.justify-content-center
          .col-lg-5
            p Es el arte y la ciencia de organizar y etiquetar sitios <i>web,</i> intranets, comunidades en línea y <i>software,</i> para apoyar la usabilidad y la facilidad de encontrar contenidos.
          .col-lg-4
            figure
              img(src="@/assets/curso/Images/tema1/img_4.svg" alt="", style="width:600px; display:block; margin:0 auto;")
        .row.align-items-center.justify-content-center
          .col-lg-5
            p Es una comunidad emergente en la práctica enfocada en proporcionar los principios del diseño y la arquitectura al entorno digital.
          .col-lg-4
            figure
              img(src="@/assets/curso/Images/tema1/img_5.svg" alt="", style="width:600px; display:block; margin:0 auto;")
        
      p.mb-3 El objetivo de la Arquitectura de la Información no es otro que el de ayudar a las personas a entender su entorno y encontrar lo que están buscando en el mundo real, así como en entornos digitales. Es decir, ayuda a los usuarios a ubicarse, saber dónde se encuentran, cuál es la información disponible y cómo volver al punto de partida cuando se sumergen demasiado en una estructura siguiendo unas pistas equivocadas.  

      p.mb-5 La AI ofrece una visión clara de lo que se puede esperar de la página o aplicación en la que el usuario se encuentra. Un simple golpe de vista proporcionará una idea de la intencionalidad del sitio, su actividad principal y qué tipo de contenidos se pueden encontrar navegando por su interior.


      .row.justify-content-center.align-items-center
        .col-lg-10
          .jumbotron-1.p-2
            p.text-center.mb-0 <b>En resumen, la Arquitectura de la Información se centra en las siguientes acciones:</b> 

    .p-4.p-lg-5.mb-5(style='background-color:#F6F6F6')
      .row.align-items-center
        .col-lg-6
            .row.align-items-center.mb-3
              .col-auto
                img(src='@/assets/curso/Images/tema1/ico_13.svg' alt="", style="width:40px; display:block; margin:auto 0;")
              .col
                p.mb-0 Organizar los contenidos y los objetos de manera intuitiva para los usuarios.  
            hr
            .row.align-items-center.mb-3
              .col-auto
                img(src='@/assets/curso/Images/tema1/ico_14.svg' alt="", style="width:40px; display:block; margin:auto 0;")
              .col
                p.mb-0 Etiquetar y describir los grupos de información de manera clara y sencilla. 
            hr
            .row.align-items-center.mb-3
              .col-auto
                img(src='@/assets/curso/Images/tema1/ico_15.svg' alt="", style="width:40px; display:block; margin:auto 0;")
              .col
                p.mb-0 Facilitar la localización <i>(findability)</i> de la información, bien sea por los elementos de navegación disponibles o por sistemas de búsqueda directa.
        .col-lg-6 
          figure
            img(src="@/assets/curso/Images/tema1/img_6.svg" alt="", style="width:700px; display:block; margin:0 auto;")

    .px-4.px-md-5
      h3.mb-3 La importancia de la AI 

      p Desde el momento en que se agrupan términos o ideas y estos grupos tienen que ser etiquetados, es necesaria una Arquitectura de la Información. Se debe tener presente que si en muchas ocasiones (en nuestra vida diaria) es difícil agrupar u ordenar las cosas para uso privado, las cosas se complican más cuando esta agrupación se realiza para personas ajenas a nuestro círculo privado. 
      p El nombre que se asigna a un grupo tiene que ser lo más simple e intuitivo posible, a fin de que sea encontrado fácilmente por el mayor número de usuarios. 
      p.mb-5 Además, la información crece constantemente, y cuanta más información, más difícil será encontrar lo que se busca.

      .row.align-items-center.justify-content-center.mb-5
        .col-lg-auto(style='z-index:1')
          figure
            img(src='@/assets/curso/Images/tema1/img_7.svg' alt='Atención' style='height:260px')
        .col-lg-6
          .p-4(style='background-color:rgba(77,208,225,.2);padding-left:50px !important;margin-left:-50px')
            p.mb-0 Una buena Arquitectura de la Información, por tanto, ayudará a encontrar la información que se está buscando, descartando el contenido que no está relacionado con la misma, mediante una toma de decisiones que requiera el menor tiempo posible.

      p.mb-5 La dificultad, no obstante, radica en una serie de características que se debe tener en cuenta sobre los usuarios y contenidos:
      
      .row.mb-5.justify-content-center
        .col-lg-12
          ImagenInfografica.color-secundario.mb-5
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/Images/tema1/img_8.svg', alt='')
          
              .tarjeta.color-acento-botones.p-3(x="14.9%" y="5%" numero="")
                p.mb-0 No todos tienen las mismas ideas respecto a la agrupación de términos.
              .tarjeta.color-acento-botones.p-3(x="49.6%" y="5%" numero="")
                p.mb-0 Tienen diferentes necesidades y prioridades.
              .tarjeta.color-acento-botones.p-3(x="85.2%" y="5%" numero="")
                p Tienen diferentes grados de conocimiento de los términos.
                p.mb-0 Los usuarios tienen diferente grado de conocimientos de la información, son más o menos expertos en referencia a un tema.
              .tarjeta.color-acento-botones.p-3(x="15%" y="65.4%" numero="")
                p.mb-0 La forma de agrupar la información no es única. Hay múltiples opciones.
              .tarjeta.color-acento-botones.p-3(x="49.6%" y="65.4%" numero="")
                p.mb-0 Existencia de términos ambiguos, con diferentes significados para unos u otros usuarios.
              .tarjeta.color-acento-botones.p-3(x="85.2%" y="65.4%" numero="")
                p.mb-0 Los usuarios tienen unas costumbres o mecanismos de interpretación diferentes. 

      p.mb-3 A la hora de realizar una Arquitectura de la Información, se debe, por tanto, realizar una investigación previa con usuarios. Siempre se debe tener presente que no todo el mundo puede tener conocimientos de los temas que se exponen, con los términos que comúnmente se utiliza, ni que entienden las cosas a su manera, o ven las cosas desde su mismo punto de vista.
  
      p.mb-5 Antes de realizar una buena Arquitectura de la Información, se deben reconocer tres pilares que intervienen directamente en el proceso:   

      .row.justify-content-center.align-items-center
        .col-lg-10
          .jumbotron-1.p-3
            p.text-center.mb-0 <b>Pilares de la Arquitectura de la Información</b> 

    .row.justify-content-center.align-items-center
      .jumbotron-2.p-5.mb-5
        p.mb-5 Louis Rosenfeld, Peter Morville y Jorge Arango, en su libro: <i>“Information Architecture for the World Wide Web”</i>, establecen unos pilares definitivos sobre arquitectura de la información:
        .row.align-items-center.mb-3
          .col-lg-5
            img.mx-5(src='@/assets/curso/Images/tema1/img_9.svg' alt="", style="width:300px; display:block; margin:auto 0;")
          .col-lg-7
            p.mb-3 Esta idea de que la IA se da por la intersección de estos 3 conceptos recibe el nombre de ecología de la información y representa un ambiente de interdependencia, que será diferente de negocio para negocio.

            p Siendo así, para que la arquitectura de la información sea de hecho útil, es necesario desarrollar un contenido con atención a los usuarios y al contexto en que ellos, la empresa y el proyecto se encuentran.
    .px-4.px-md-5.pb-4.pb-md-5
      TabsC.color-acento-contenido
        .py-3.py-md-4.color-tab(titulo='Contenido')
          .row.align-items-center.justify-content-center
            .col-lg-10
              h3 Contenido
              p De qué contenido disponemos y qué contenido necesitamos, ya que sin comprender el contenido crearemos algo que nunca acabará de funcionar (ni para el contenido definitivo ni para el contenido futuro que se irá añadiendo a la estructura establecida). 
            .col-lg-5
              .cajon.color-custom-1.p-4
                p <b>Se relaciona con:</b> textos, imágenes, gráficos, contenido en audio, etc.; mapeo de las páginas o pantallas; estructura; taxonomía; volumen de información.
            .col-lg-5
              figure
                img(src='@/assets/curso/Images/tema1/img_10.svg' alt='')
        .py-3.py-md-4.color-tab(titulo='Usuarios')
          .row.align-items-center.justify-content-center
            .col-lg-10
              h3 Usuarios
              p.mb-3  Se debe tener en cuenta qué piensan al respecto y qué saben sobre la materia, qué necesitan hacer, encontrar, conocer, aprender, etc. 
              p Si no conocemos a los usuarios, seremos incapaces de agrupar los conceptos de manera que tengan sentido para ellos y sean encontrados fácilmente en su navegación o búsquedas.

            .col-lg-5
              .cajon.color-custom.p-4
                p <b>Se relaciona con:</b> personalidad; necesidades; comportamiento de búsqueda de la información; experiencia de uso; tareas que desean ejecutar en tu aplicación.
            .col-lg-5
              figure
                img(src='@/assets/curso/Images/tema1/img_11.svg' alt='')
        .py-3.py-md-4.color-tab(titulo='Contexto')
          .row.align-items-center.justify-content-center
            .col-lg-10
              h3 Contexto
              p ¿Cuáles serán los objetivos personales de los usuarios y los objetivos de negocio de la organización? Cuáles son las personas implicadas y cuáles son las limitaciones que se pueden tener, dispositivos o plataformas en las que correrá la aplicación <i>web</i> o móvil, intranet, aplicación o solución digital en general. Todos estos aspectos se deben tener en cuenta a la hora de diseñar una buena Arquitectura de la Información. 
            .col-lg-5 
              .cajon.color-custom-2.p-4
                p <b>Se relaciona con:</b> modelo de negocios; objetivos del proyecto; tecnologías y metodologías de desarrollo; recursos (capital, personas, equipos, entre otros); restricciones.
            .col-lg-5
              figure
                img(src='@/assets/curso/Images/tema1/img_12.svg' alt='')
    
      .jumbotron-3.p-4.mb-5
        h3.mb-3 La AI como parte del proyecto
        
        p.mb-5 Se deben conocer, también, las formas de comunicar el trabajo y estar atento para detallar, identificar y definir los sistemas y componentes en los que se basan los sitios. Se debe desarrollar la capacidad de convencer a los clientes y colegas sobre el análisis y las soluciones planteadas, que se comunicarán a través de una documentación y entregables que pueden agruparse en dos grandes tipos, como se puede ver a continuación:

        .row.justify-content-center.align-items-center
          .col-lg-10
            .tarjeta--container.row.mb-5
              .col-md.tarjeta.sp1.p-5.mx-3
                .row.justify-content-center.mb-4
                  .col-6
                    figure
                      img(src='@/assets/curso/Images/tema1/ico_8.svg' alt='')
                  
                .h2.text-center Relacionados con la Arquitectura de la Información en sí 
                p A través de la estructura o la forma del sitio y cómo se relaciona cada una de estas partes. También, mediante la creación de grupos y el etiquetado de los mismos. En esta categoría, se incluye el «metadato», es decir, la forma de describir los productos y los términos utilizados (muy común en <i>e-commerce</i> y en <i>webs</i> que disponen de amplios listados de productos)
              .col-md.tarjeta.sp1.p-5.mx-3
                .row.justify-content-center.mb-4
                  .col-6
                    figure
                      img(src='@/assets/curso/Images/tema1/ico_9.svg' alt='')
                    br
                  .h2.text-center Relacionados con la navegación 
                  p Describiendo cómo se desplazan los usuarios a través de la <i>web</i>, rutas y atajos que definen su comportamiento, y los elementos que componen en sí dicha navegación (barras de navegación, <i>links, in-page navigation</i>, etc.)


      .row.justify-content-center.align-items-center
        .jumbotron-2.p-5.mb-5
          h3.mb-3  AI en el contexto
          p.mb-3 Al iniciar un proyecto, se debe tener en cuenta una serie de parámetros: ¿Cuáles son los objetivos? ¿Cuál es la tecnología empleada y cuáles son nuestras oportunidades y limitaciones? ¿El diseño nos añade alguna limitación adicional? ¿En qué entorno o filosofía de trabajo nos encontramos y cómo afecta eso a nuestro proyecto? ¿Cuáles son todas las personas implicadas y de qué manera influyen en el proyecto? Además, no se deben perder de vista dos puntos clave durante el proceso: 
          
          .row.justify-content-center.align-items-center.mb-5
            .col-lg-7
              .jumbotron-4.p-4.mb-4
                p ¿Cuál es el objetivo del proyecto o su razón de ser?
              .jumbotron-4.p-4 
                p ¿Qué se espera una vez se haya finalizado el proyecto? 
            .col-lg-4
              figure
                img(src='@/assets/curso/Images/tema1/img_13.svg' alt='')

          p.mb-3 Si se desconoce el norte o ruta del proyecto, difícilmente se podrá llegar a destino; por esta razón, el conocimiento claro de los objetivos permitirá: 

          .row.justify-content-center.align-items-center.p-4.mb-5
            .col-lg-6
                hr
                .row.align-items-center.mb-3
                  .col-auto
                    img(src='@/assets/curso/Images/tema1/ico_13.svg' alt="", style="width:40px; display:block; margin:auto 0;")
                  .col
                    p.mb-0 Evaluar requerimientos y soluciones.  
                hr
                .row.align-items-center.mb-3
                  .col-auto
                    img(src='@/assets/curso/Images/tema1/ico_14.svg' alt="", style="width:40px; display:block; margin:auto 0;")
                  .col
                    p.mb-0 Establecer funcionalidades y prioridades.  
                hr
                .row.align-items-center.mb-3
                  .col-auto
                    img(src='@/assets/curso/Images/tema1/ico_15.svg' alt="", style="width:40px; display:block; margin:auto 0;")
                  .col
                    p.mb-0 Toma de decisiones a favor de si las funcionalidades a implementar van alineadas con los objetivos del proyecto.
                hr
            .col-lg-6 
              figure
                img(src="@/assets/curso/Images/tema1/img_14.svg" alt="", style="width:400px; display:block; margin:0 auto;")

      .jumbotron-3.p-4.mb-5
        h3.mb-3 AI más allá de la <i>web</i>
        p.mb-3 Es frecuente pensar que la Arquitectura de la Información únicamente está presente o es aplicable a páginas <i>web</i> pero en realidad las metodologías y técnicas de AI son aplicables en cualquier lugar donde un usuario necesite ubicarse o encontrar una determinada información. Se presentan algunos de estos ejemplos no <i>web</i> para otras soluciones digitales, así:

        SlyderA
          .row.align-items-center.justify-content-center.tarjeta_Sp-3.p-4
            .col-md-6.mb-4.mb-md-0
              h3.mb-3 Aplicaciones de escritorio 
              p.mb-3 En aplicaciones de escritorio con múltiples herramientas y menús, es fundamental una organización correcta de las mismas y un acceso lo más sencillo posible, así como la forma de interactuar con los elementos.
            .col-md-4
              img(src="@/assets/curso/Images/tema1/img_37.svg", alt= "")
          .row.align-items-center.justify-content-center.tarjeta_Sp-4.p-4
            .col-md-6.mb-4.mb-md-0
              h3.mb-3 <i>Dashboards</i> o paneles de control 
              p.mb-0 Secciones o herramientas en las que la visualización y organización de mucha información debe ser procesada al mismo tiempo. En estas plataformas, es esencial el uso de la jerarquía para enfatizar o resaltar los elementos más importantes.
            .col-md-4
              img(src="@/assets/curso/Images/tema1/img_35.svg", alt= "", style="width:150px; display:block; margin:0 auto;")
          .row.align-items-center.justify-content-center.tarjeta_Sp-3.p-4
            .col-md-6.mb-4.mb-md-0
              h3.mb-3 Aplicaciones móviles
              p.mb-0 El alto rendimiento y excelente Experiencia de Usuario (UX) es indispensable, además de tener acceso a una amplia gama de aplicaciones, ayuda a acelerar el trabajo de desarrollo y a ampliar los límites del uso de la aplicación. 
            .col-md-4
              img(src="@/assets/curso/Images/tema1/img_36.svg", alt= "", style="width:180px; display:block; margin:0 auto;")
    
      Separador 
    
      #t_1_2.titulo-segundo
        h2 1.2 El arquitecto de la información
      .row
        p.mb-5 Para generar un plan de pruebas de usabilidad a cualquier interfaz de un sistema <i>software</i> interactivo, es necesario conocer de manera conceptual y epistemológica diversos conceptos y áreas que de por sí generarán mayor autonomía a la hora de aplicar una técnica de evaluación de usabilidad. Es por eso que en este apartado se continúa con términos y fórmulas claves para el aprendizaje efectivo de esta disciplina.

      .row.justify-content-center.align-items-center
        .jumbotron-2.p-5.mb-5
          h3.mb-3 El rol del arquitecto de información
          p.mb-5 Para el proceso de evaluación de una interfaz, no solo basta con revisar la naturaleza funcional de la aplicación, sino que es necesario entender su concepto mismo, a lo que está destinada, es decir, cuál es la razón de esa aplicación, a qué tipo de usuario objetivo está destinada y las características especiales derivadas de los requerimientos, como puede observarse en la Figura 1. Al respecto, se presenta una serie de pasos que dará pistas al <i>tester</i> para entender la lógica de la interfaz:

          .row.justify-content-center.mb-5
            .col-lg-10.mb-3
              .titulo-sexto.color-acento-contenido
                h5 Figura 1 
                br
                span Ejemplo de arquitectura de la información
              .col-lg-12
                figure
                  img(src="@/assets/curso/Images/tema1/img_15.svg" alt="", style="width:800px; display:block; margin:0 auto;")

          SlyderA.color-custom-3.p-3
            .row.align-items-center.justify-content-center.P-4
              .col-md-6.mb-4.mb-md-0
                  h3.mb-3 Realice un inventario
                  p.mb-3 Consiste en identificar todo aquello que se quiera incluir en el proyecto, partiendo del contenido y de las funcionalidades que se quiere ofrecer.
                  p Para decidir qué incluir, se debe soportar en la investigación y el conocimiento que se haya obtenido sobre los usuarios; esta información debe ser realizada por instancia del equipo de desarrollo de la empresa, pero también sobre el sitio <i>web</i> o app actual (si se trata de un rediseño).
              .col-md-4
                  img(src="@/assets/curso/Images/tema1/img_16.svg", alt= "")
            .row.align-items-center.justify-content-center
              .col-md-12.mb-4.mb-md-0
                  h3.mb-3 Agrupe las tarjetas
                  p.mb-3 En seguida, se deben establecer relaciones entre los ítems o tópicos inventariados, para decidir cuáles se deben agrupar en la arquitectura dentro de las distintas secciones o menús, lo que a nivel técnico se conoce como categorías. Aquí, la clave es descubrir dónde esperan los usuarios encontrar los ítems cuando están navegando, con el fin de llegar a su objetivo deseado.

                  p.mb-3 La diseñadora Cris Busquets, en su artículo “Arquitectura de la información: qué es y cómo hacerlo”, describe el siguiente ejemplo: “En una tienda <i>online</i> de muebles y productos para el hogar, ¿cómo preferirán los usuarios navegar para encontrar los productos que buscan?… ¿querrán un acceso por tipos de muebles (camas, mesas, sillas, armarios…) …por uso y funciones (descansar, trabajar, cocinar…) … por habitación (dormitorio, salón, despacho, cocina…) … por un buscador… o por todas esas formas? Una buena técnica para contestar a estas preguntas es el <em>Card Sorting</em>, o realizar entrevistas o encuestas a los usuarios para comprender cómo y por qué utilizan ese producto determinado. (Busquets, 2020)
              .col-lg-6
                  p Esta técnica es muy utilizada hoy en día por expertos en el área del diseño de experiencia de usuario; de igual forma, es también utilizada por <i>testers</i> del área de UX, debido a lo iterativo de la ingeniería de <i>software</i> y a la búsqueda de mejora continua de la aplicación. Se aclara que la técnica de <em>Card Sorting</em> será abordada más adelante en este componente formativo.
              .col-lg-6
                  img(src="@/assets/curso/Images/tema1/img_17.svg", alt= "")
            .row.align-items-center.justify-content-center
              .col-md-6.mb-4.mb-md-0
                  h3.mb-3 Defina el mapa
                  p.mb-0 Finalmente, se deben presentar o ilustrar todos los datos anteriores en un mapa que muestra la estructura de la información y del contenido (no confundir con sitemap). De esta forma, se permitirá ver las relaciones y agrupaciones establecidas entre los contenidos. Hay casos donde será necesario renombrar algunas categorías o incluso permitir el acceso a algún apartado desde distintas categorías. 

              .col-md-4
                  img(src="@/assets/curso/Images/tema1/img_18.svg", alt= "")


      .jumbotron-5.p-4.mb-5
        .row.align-items-center.justify-content-center
          .col-lg-7
            p.mb-3 Si es de su interés conocer más sobre este tema, se le invita a consultar un canal de YouTube donde encontrará un video tutorial para realizar mappings y sesiones de brainstorming, a través del siguiente enlace:
            p Igualmente, está a su disposición el enlace de la herramienta Xmind para su instalación 
          .col-lg-5 
            a.anexo.mb-4.mb-lg-0(href="https://www.youtube.com/watch?v=kuWQCxB5r_k" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-link.svg")
              .anexo__texto
                p Aprende a Crear un <em>CARD SORTING</em> REMOTO
            br
            a.anexo.mb-4.mb-lg-0(href="https://www.xmind.net/" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-link.svg")
              .anexo__texto
                p xmind.net

      .jumbotron-6.p-4
        .row.align-items-center.justify-content-center
          .col-lg-7
            h3 Competencias: colaboración y comunicación
            p Es importante que haya una precisa comunicación entre los miembros del equipo de desarrollo. Como evaluador de interfaces, es apremiante conocer o interpretar la estrategia diseñada por sus colegas, revisar el mapa de la AI de la aplicación. Al igual que el arquitecto de información, el <i>tester</i> debe conocer los puntos de interacción entre un producto o servicio digital y sus usuarios.
          .col-lg-5 
            img(src="@/assets/curso/Images/tema1/img_19.svg", alt= "")

      Separador 
    
      #t_1_3.titulo-segundo
        h2 1.3 La investigación de la audiencia
      
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5.verticalLine
        .bloque-texto-g__img.m-left(
      :style="{'background-image': `url(${require('@/assets/curso/Images/tema1/img_20.png')})`}"
      )
        .bloque-texto-g__texto.p-4
          p.mb-0 En esta sección, se presentarán de manera muy precisa conceptos y técnicas para la comprensión del usuario y, de esta forma, tener de manera más prolija la organización de la información. Así, se espera que todo lo conceptual visto en los apartados anteriores quede claro con esta parte práctica.
        

      .row.align-items-center.justify-content-center.mb-3
          .col-lg-10
            h3.mb-3 Aprendiendo de nuestros usuarios
            p De manera rápida, no solo la persona encargada de realizar las pruebas a las aplicaciones <i>software</i>, sino todo el equipo de desarrollo, debería hacerse estos cuestionamientos:
            .row.align-items-center.justify-content-center.mb-5
                .col-lg-6
                    hr
                    .row.align-items-center.mb-3
                      .col-auto
                        img(src='@/assets/curso/Images/tema1/ico_13.svg' alt="", style="width:40px; display:block; margin:auto 0;")
                      .col
                        p.mb-0 ¿Cuál es la manera más intuitiva de presentar la información?
                    hr
                    .row.align-items-center.mb-3
                      .col-auto
                        img(src='@/assets/curso/Images/tema1/ico_14.svg' alt="", style="width:40px; display:block; margin:auto 0;")
                      .col
                        p.mb-0 ¿Cuál es la información más relevante? 
                    hr
                .col-lg-6 
                  figure
                    img(src="@/assets/curso/Images/tema1/img_21.svg" alt="", style="width:250px; display:block; margin:0 auto;")

            p.mb-3 Esta reflexión lleva a establecer que el cliente no es el usuario, que el equipo de desarrollo (diseñadores, programadores y <i>tester</i>) tampoco. Se debe entender que los usuarios tienen diferentes conocimientos, diferente experiencia o diferentes maneras de ver las cosas. Por lo tanto, en el momento de realizar las pruebas de interfaces, es importante entender qué información están buscando, por lo que la interfaz debe obedecer a lo siguiente:

      .row.align-items-center.justify-content-center.mb-5
          .col-lg-4
              img.mb-3(src='@/assets/curso/Images/tema1/bar_1.svg')
              img(src='@/assets/curso/Images/tema1/bar_3.svg')
          .col-lg-4
              img.mb-3(src='@/assets/curso/Images/tema1/bar_2.svg')
              img(src='@/assets/curso/Images/tema1/bar_4.svg')
      .row.align-items-center.justify-content-center.mb-5
          .col-lg-10
            h3.mb-3 Metodologías de investigación
            p.mb-3 En este apartado, se hará énfasis en solo una de las metodologías, se trata de aquella que involucra la organización y la categorización de la información de acuerdo con el usuario y su contexto, esta se denomina <i>card sorting.</i> No obstante, se presenta un esquema que engloba las principales metodologías, según las condiciones de presencia con usuarios (directo), las que generan un informe de manera inmediata (reportados) y las que se realizan cuando no se tiene contacto directo con los usuarios (observados).

      .row.justify-content-center.mb-5
        .col-lg-10.mb-3
          .titulo-sexto.color-acento-contenido
            h5 Figura 2 
            br
            span <i>Métodos de evaluación según condiciones</i>

      .row.align-items-center.justify-content-center.mb-5
          .col-lg-7
              img(src='@/assets/curso/Images/tema1/img_24.svg' alt="", style="width:550px; display:block; margin:0 auto;")
          .col-lg-4
              img(src='@/assets/curso/Images/tema1/img_22.svg')

      .row.align-items-center.justify-content-center.mb-5
          .col-lg-5
            h3.mb-3 <i>Card sorting</i>
            p.mb-0 Es un método utilizado para ayudar a diseñar o evaluar la arquitectura de información de un sitio. En una sesión de <i>Card Sorting</i> u ordenamiento de tarjetas, los participantes organizan los temas en categorías que tienen sentido para ellos y también pueden apoyar a etiquetar estos grupos. La dinámica de <i>Card Sorting</i> puede utilizar tarjetas reales, trozos de papel o una de las varias herramientas de <i>software</i> de clasificación de tarjetas en línea. (Para este caso, se utilizará <em>Optimal Workshop</em> [El enlace se compartirá en el material complementario].) (<i>Assistant Secretary for Public Affairs,</i> 2021).
          .col-lg-5
            img(src='@/assets/curso/Images/tema1/img_23.svg')

      .row.justify-content-center.mb-5
          .col-lg-10
            h3.mb-3 Beneficios del <em>Card Sorting</em>
            p Ayuda a comprender las expectativas de los usuarios y los temas de su interés. Esta información del grupo de usuarios reclutados puede apoyar al equipo desarrollador a:
          .col-lg-6
            hr
            .row.align-items-center.justify-content-center.mb-3
              .col-auto
                img(src='@/assets/curso/Images/tema1/ico_13.svg' alt="", style="width:40px; display:block; margin:auto 0;")
              .col
                p.mb-0 Construir la estructura de un sitio <i>web</i>
            hr
            .row.align-items-center.justify-content-center.mb-3
              .col-auto
                img(src='@/assets/curso/Images/tema1/ico_14.svg' alt="", style="width:40px; display:block; margin:auto 0;")
              .col
                p.mb-0 Decidir qué poner en la página de inicio  
            hr
            .row.align-items-center.justify-content-center.mb-3
              .col-auto
                img(src='@/assets/curso/Images/tema1/ico_15.svg' alt="", style="width:40px; display:block; margin:auto 0;")
              .col
                p.mb-0 Navegar y categorizar las etiquetas 
            hr
      .row.align-items-center.justify-content-center.mb-5
          .col-lg-10
            h3.mb-3 Analizando los resultados
            p.mb-3 Para entender el análisis de los resultados de la técnica de <i>Card Sorting</i>, es necesario abordar las instrucciones y procedimiento que se establecen. En ese sentido, se define lo siguiente:
      .jumbotron-2.p-5.mb-5
        .row.align-items-stretch.d-flex.mb-5
          .col-md-6.col-xl.mb-4.mb-xl-0.d-flex
            .tarjeta-numerada.color-secundario.p-5
                .tarjeta-numerada__numero
                  .h2 1
                p  Aplicando el <em>Card Sorting</em> se pueden tener resultados de tipo: 
                ul.lista-ul--color
                  li 
                    i.fas.fa-circle.cac
                    | Cuantitativo (resultados, dendrograma, matriz de coocurrencia).
                  li 
                    i.fas.fa-circle.cac
                    | Cualitativo (Comentarios, sugerencias, dudas, alternativas).
          .col-md-6.col-xl.mb-4.mb-xl-0.d-flex
            .tarjeta-numerada.color-acento-contenido.p-5
              .tarjeta-numerada__numero
                .h2 2
              p.text-center Es recomendable que para la prueba se tengan cinco (5) personas, y el tiempo utilizado es de 20 min x persona.

          .col-md-6.col-xl.mb-4.mb-xl-0.d-flex
            .tarjeta-numerada.color-primario.p-5
              .tarjeta-numerada__numero
                .h2 3
              p.text-center La técnica puede realizarse en dos tipos, de manera cerrada (validación) o abierta (investigación). Es decir, cuando es cerrada, es porque las categorías ya están definidas, de esta manera, los usuarios lo que hacen es clasificar los ítems en las categorías ya establecidas. Por otro lado, cuando se aplica de manera abierta, los usuarios agrupan los ítems y dan nombres a las categorías de estas agrupaciones.

        .jumbotron-7.p-5
          .row.align-items-center.justify-content-center
            .col-lg-7
              p.mb-3 Si es de su interés conocer más sobre este tema, se le invita a consultar un canal de YouTube donde encontrará un video tutorial sobre la herramienta Optimal Workshop, para su instalación y manejo, en el siguiente enlace:  
            .col-lg-5 
              a.anexo.mb-4.mb-lg-0(href="https://www.youtube.com/watch?v=kuWQCxB5r_k " target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p Aprende a crear un <em>CARD SORTING</em> REMOTO

      p.mb-5 De acuerdo con lo visto hasta el momento, en relación al análisis de resultados, se pueden presentar estos con alguna de las siguientes técnicas:

      .jumbotron-2.p-4.p-lg-5.mb-5
        p.mb-5 <b> Matriz  de concurrencia:</b> con el resultado de la matriz de concurrencia, se muestra claramente la clasificación de varios ítems en ciertas categorías, por lo que se ve con un color azul mucho más oscuro la concurrencia de los términos, por lo tanto, lo que se presume y propone es que la interfaz de la aplicación debe tener entre 5 a 6 agrupaciones (o categorías) fijas. Los otros ítems pueden ser adicionados en las categorías más concurridas.

        .row.justify-content-center
          .col-lg-10
            .titulo-sexto.color-acento-contenido
              h5 Figura 3 
              br
              span <i>Ejemplo de matriz de concurrencia</i>

            img(src='@/assets/curso/Images/tema1/img_26.svg' alt="")
      .jumbotron-2.p-4.p-lg-5.mb-5
        p.mb-5 <b>Dendrograma:</b> con el resultado del dendrograma, se ven de igual forma las agrupaciones, aquí se demuestra la responsabilidad del equipo de desarrollo en tomar la decisión si en el diseño de la interfaz se dejan 2, 3 o 4 categorías, todo está en la investigación que se haya hecho con los usuarios. De ahí la importancia y el protagonismo del evaluador o <i>tester</i> de interfaces de aplicaciones <i>software</i>, porque tendrá la habilidad de conocer si la arquitectura está bien hecha o no, además tendrá rigor de decisión con base en estas técnicas y conceptos vistos. Adicionalmente, se aclara que en el material complementario se ve el resultado del dendrograma con la herramienta Optimal Workshop, cuyo nombre es práctica de <em>Card Sorting</em>.
        .row.justify-content-center
          .col-lg-10
            .titulo-sexto.color-acento-contenido
              h5 Figura 4
              br
              span <i>Ejemplo de dendrograma</i>
            img(src='@/assets/curso/Images/tema1/img_27.svg' alt="")

      Separador 
    
      #t_1_4.titulo-segundo
        h2 1.4  Organizando la información
      
      p.mb-3 Hay algunos consejos importantes para la determinación de una buena interfaz, estos serán de utilidad para el evaluador de una interfaz gráfica de un sistema <i>software</i> interactivo, que, aunque en el caso práctico se toma una aplicación <i>web</i>, estos consejos sirven para cualquier aplicación <i>software.</i>

      .row.justify-content-center.mb-5
        .col-lg-10.mb-3
          h3.mb-3 Páginas <i>web</i> que funcionan
          p.mb-3 Los criterios para definir si una aplicación o sitio <i>web</i> funciona o no dependen de una serie de hallazgos comunes. Normalmente, los hallazgos se refieren a una de las siguientes categorías, obsérvelas en el siguiente recurso:
      
          AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
            div(titulo="Aspectos negativos generales")
              .row.align-items-center.justify-content-center.p-4
                  .col-lg-6
                    p.mb-3 Entre los aspectos denominados negativos en la experiencia con páginas web, están:

                      ul.lista-ul
                        li 
                          i.fas.fa-angle-right
                          | Velocidad.
                        li 
                          i.fas.fa-angle-right
                          | Ancho de banda.
                        li 
                          i.fas.fa-angle-right
                          | Efectividad (no hace lo que tiene que hacer en los tiempos más esperados).
                        li 
                          i.fas.fa-angle-right
                          | Estética.
                        li 
                          i.fas.fa-angle-right
                          | Funcionalidad.
                        li 
                          i.fas.fa-angle-right
                          p.mb-0 Interacción (uso de banners, <em>frames</em>, elementos confusos).
                        li 
                          i.fas.fa-angle-right
                          | Navegación.

                  .col-lg-6
                    figure  
                      img(src='@/assets/curso/Images/tema1/img_28.svg' alt="", style="width:300px; display:block; margin:auto 0;")

            div(titulo="Principales hallazgos negativos")
              .row.align-items-center.justify-content-center.p-4
                .col-lg-6
                  h4.mb-3 Estos se relacionan con:
                  ul.lista-ul
                      li 
                        i.fas.fa-angle-right
                        | Contenidos difíciles de encontrar (etiquetas poco claras, ambiguas, navegación por encabezados incorrecta).
                      li 
                        i.fas.fa-angle-right
                        | Diseño gráfico descuidado.
                      li 
                        i.fas.fa-angle-right
                        | Demasiadas alertas.
                      li 
                        i.fas.fa-angle-right
                        | Tono/Lenguaje inapropiado (jerga empresarial ajena a la audiencia).

                .col-lg-6
                  figure  
                    img(src='@/assets/curso/Images/tema1/img_29.svg' alt="", style="width:300px; display:block; margin:auto 0;")
            div(titulo="Principales hallazgos positivos")
              .row.align-items-center.justify-content-center.p-4
                .col-lg-6
                  h4.mb-3 Relacionados con:
                  ul.lista-ul
                      li 
                        i.fas.fa-angle-right
                        | Estética agradable
                      li 
                        i.fas.fa-angle-right
                        | Información de interés, actualizada
                      li 
                        i.fas.fa-angle-right
                        | Utilidad
                      li 
                        i.fas.fa-angle-right
                        | Sencillez
                .col-lg-6        
                  figure  
                    img(src='@/assets/curso/Images/tema1/img_30.svg' alt="", style="width:300px; display:block; margin:auto 0;")

      TabsC.color-acento-contenido
        .py-3.py-md-4.color-tab.color-custom-4(titulo="El planteamiento inicial")
          .row.align-items-center.justify-content-center
            .col-lg-5
              h3 El planteamiento inicial
              p El punto de partida es que, a través de la investigación de los usuarios, se debe presentar la información organizada, que a la vez es comprensiva y explícita para estos usuarios. De hecho, los sistemas de organización van a reflejar siempre las perspectivas y objetivos del proyecto, pues al ser un estudio sistemático para descubrir comportamientos, necesidades, motivaciones y tendencias, se centra sobre lo que se requiere y debe hacerse.
            .col-lg-5
              figure
                img.mx-5(src='@/assets/curso/Images/tema1/img_31.svg' alt='', style="width:300px; display:block; margin:auto 0;")
        .py-3.py-md-4.color-tab.color-custom-4(titulo='Esquemas de organización')
          .row.align-items-center.justify-content-center
            .col-lg-10
              h3 Esquemas de organización
              p Según el enunciado, los esquemas son lineamientos o marcos de referencia para organizar y presentar la información. En ese sentido, es importante tener en cuenta estos aspectos, por lo que, entre los más representativos, se tienen:
          .row.align-items-center.justify-content-center
            .col-lg-2
              .jumbotron-8.p-4 
                p.mb-0 <b>Esquemas ambiguos</b>
                  
                  ul.lista-ul
                    li 
                      i.fas.fa-angle-right
                      | Alfabéticos
                    li 
                      i.fas.fa-angle-right
                      | Cronológicos
                    li 
                      i.fas.fa-angle-right
                      | Geográficos
            .col-lg-4
              .jumbotron-9.p-4 
                p.mb-0 <b>Esquemas ambiguos</b>
                  ul.lista-ul
                    li 
                      i.fas.fa-angle-right
                      | Tópico / Temática / Producto
                    li 
                      i.fas.fa-angle-right
                      | Audiencia
                    li 
                      i.fas.fa-angle-right
                      | Tarea 
                    li 
                      i.fas.fa-angle-right
                      | Organización (no recomendados) 
                    li 
                      i.fas.fa-angle-right
                      | Metáfora (se utilizan gráficas y el sentido que ellas representan para presentar la información, como, por ejemplo, un árbol representa una compañía y los frutos de ese árbol son los servicios que ofrece esa empresa)
            .col-lg-4
              figure
                img(src='@/assets/curso/Images/tema1/img_32.svg' alt='')
        .py-3.py-md-4.color-tab.color-custom-4(titulo='Estructuras de organización')
          .row.align-items-center.justify-content-center
            .col-lg-10
              h3 Estructuras de organización
              p El punto de partida es que, a través de la investigación de los usuarios, se debe presentar la información organizada, que a la vez es comprensiva y explícita para estos usuarios. De hecho, los sistemas de organización van a reflejar siempre las perspectivas y objetivos del proyecto, pues al ser un estudio sistemático para descubrir comportamientos, necesidades, motivaciones y tendencias, se centra sobre lo que se requiere y debe hacerse. 
            
          .row.justify-content-center.align-items-center
            .col-lg-10
              .tarjeta--container.row.mb-5
                .col-md.tarjeta.sp2.p-5
                  .row.justify-content-center.mb-4
                  .h2.text-center Simples
                  p.mb-3  Jerarquías: Modelo Top – Down. Organizadas en grupos, pueden ser amplias o profundas. Es decir, un menú puede ser amplio, pero máximo hasta 7 categorías, según uno de los pioneros del diseño responsivo, Steven Krug. 

                  p La recomendación para esta jerarquía es que las categorías deben ser:
                    ul.lista-ul
                      li 
                        i.fas.fa-angle-right
                        | Mutuamente excluyentes
                      li 
                        i.fas.fa-angle-right
                        | Equilibradas tanto en amplitud como en profundidad
                      li 
                        i.fas.fa-angle-right
                        | Pueden ser amplias o profundas
                  p.mb-3  Como se puede ver en el ejemplo de organización de un menú, tanto en amplitud como en profundidad.
                  .col-lg-8
                      figure
                        img.mx-5(src='@/assets/curso/Images/tema1/img_33.svg' alt='')
                .col-md.tarjeta.sp3.p-5
                  .row.justify-content-center.mb-4
                  .h2.text-center Complejos
                  ul.lista-ul
                    li 
                      i.fas.fa-angle-right
                      | Hipertexto
                    li 
                      i.fas.fa-angle-right
                      | Linear
                    li 
                      i.fas.fa-angle-right
                      p <b>Combinados:</b> – Jerarquía (1er nivel) + Rel. (Secciones) – Catálogo (Niveles superiores, jerarquía – Niveles inferiores: contenido).

                  .col-lg-8
                      figure
                        img.mx-5(src='@/assets/curso/Images/tema1/img_34.svg' alt='')

    






















  </template>

<script>
import Muestras from '../components/Muestras' // borrar una vez el componente "Muestras" no se necesite
export default {
  name: 'Tema1',
  components: {
    Muestras, // borrar una vez el componente "Muestras" no se necesite
  },
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Estructura de datos Lineal',
        texto:
          'Las estructuras lineales son estructuras que se definen inicialmente como una secuencia de elementos en donde se crea una relación de predecesor y sucesor, estas estructuras utilizan cuatro operaciones básicas que son: crear, añadir, borrar y consultar y existen tres estructuras lineales que son: las pilas ejecuta las tres operaciones al final de la secuencia, listas las tres operaciones se ejecutan sobre una posición en específico y puede ser desplazada y colas se añade al final y se consulta y borra al inicio	.',
        imagen: require('@/assets/curso/Images/tema1/img_3.svg'),
      },
      {
        titulo: 'Árbol Binario',
        texto:
          'Es una estructura de datos en donde se representa por nodos y cada nodo puede tener dos hijos uno a la izquierda y otro a la derecha, si uno de los nodos tiene un valor de <i>null</i> se le dice que es un nodo hoja.',
        imagen: require('@/assets/curso/Images/tema1/img_4.svg'),
      },
    ],
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
