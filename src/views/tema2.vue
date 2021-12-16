<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Metodologías de evaluación de usabilidad y accesibilidad
    
    .row.align-items-center
      .col-lg-12.mb-5
        img(src="@/assets/curso/Images/tema2/img_1.png", alt= "")

    p.mb-3 Una vez revisado y comprendido de manera precisa y sucinta los conceptos y técnicas que engloban en gran medida la disciplina de la usabilidad, es posible ahora entrar a uno de los más interesantes mecanismos y apartados de este componente, que es la evaluación.
    
    Separador 
   
    #t_2_1.titulo-segundo
      h2 2.1 Introducción y conceptos básicos
    p.mb-5 A Son patrones de X niveles y se organizan en capas horizontales. Muchas de las aplicaciones informáticas han tomado este patrón como arquitectura, funciona conectando los componentes, pero estos no dependen uno del otro. Cada una de estas capas cumple con una función específica en el desarrollo de la aplicación. Su objetivo primordial es la separación de la lógica de negocios de la lógica de diseño, es decir, separar la capa de datos de la capa de presentación al usuario. 

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5.reverse
      .bloque-texto-g__texto.p-4
        p.mb-0 Una de las científicas informáticas más renombradas en el mundo de la interacción humano-computador, Jenny Preece, indica en su libro Interaction Design: Beyond Human‑Computer lo siguiente: “…hace poco me encontré con dos diseñadores de sitios web que orgullosos de su nuevo sitio me miraron atónitos cuando les pregunté si lo habían probado con usuarios. «No», dijeron, «pero nosotros sabemos que está bien». Indagué un poco más y descubrí que en su empresa eran considerados como expertos pues conocían perfectamente todos los trucos del diseño web…”
      .bloque-texto-g__img(
    :style="{'background-image': `url(${require('@/assets/curso/Images/tema2/img_2.png')})`}"
    )

    p.mb-3 Lo anteriormente expuesto constituye una de las verdades que lamentablemente se da con demasiada frecuencia y, por infortunio, es lo habitual. Además, aunque el concepto de usabilidad pueda ser sencillo de comprender, conseguir que un producto sea usable y comprensible es difícil, ahora, aún más, que deje sensaciones positivas al usarlo (experiencia de usuario). En general, cuando se diseña y desarrolla una aplicación software, se está más preocupado por la funcionalidad que por la usabilidad del mismo, y eso que no se trata de la accesibilidad, que en últimas es poco tratada.

    p.mb-5 En ese sentido, la actividad de evaluar se muestra como una de las fases más importantes de la ingeniería de software, así como de diversos modelos de desarrollo, debido a que en esa fase radica o confluye todo el desarrollo y hasta las expectativas de los implicados. Esto está soportado bajo la reseña que indica el profesor Tony Granollers, gurú de la usabilidad y accesibilidad, el cual indica: 

    .row.align-items-center.mb-4 
      .col-lg-12.tarjeta.ofvisible(style='background-color:#1565c0;')
        .col-auto.ms-5
          img(src='@/assets/curso/Images/tema2/comilla1.svg' alt='"' style='width:73px;margin-top:-10px;')
        .col-11.mx-auto.p-5
          p.text-white La evaluación no debe ser pensada solamente como una simple etapa del proceso general del diseño y mucho menos de la implementación del sistema, sino que esta debe realizarse durante todo el ciclo de vida del proceso de desarrollo, los resultados de la cual deben aportar mejoras respecto a las soluciones evaluadas y correcciones respecto a errores reportados
          h6.text-right.fRight.mb-5 <span class='text-white'>(Landa, 2018c)</span> <i class='fas fa-square cac'></i>


    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-7.mb-5.mb-lg-0
        p.mb-3 Por otra parte, existen varias alternativas de métodos de evaluación. Cada una de ellas utiliza ciertas técnicas y mecanismos cuyo principal objetivo es medir diferentes aspectos. Se debe aclarar que la elección de un método u otro no depende solamente de cuál es el resultado que se quiere conocer, sino de múltiples factores que pueden resumirse en ciertas preguntas, como: ¿cuánto cuesta?, ¿qué obtendremos con su realización?, ¿cuáles son las expectativas de los implicados? Además, se debe tener en cuenta que los métodos no son totalmente independientes, sino que es posible que se solapen en cuanto a las actividades que se desarrollan.
      .col-lg-5.mb-5.mb-lg-0
        img.my-3(src="@/assets/curso/Images/tema2/img_3.svg", alt="")

      .row.justify-content-center.align-items-center.mb-5
        .col-lg-11
          p.mb-3 Dados estos criterios, los métodos de evaluación pueden clasificarse de varias maneras, como se muestra a continuación:

          .row.justify-content-center.mb-5
            .col-lg-10.mb-3
              .titulo-sexto.color-acento-contenido
                h5 Figura 5
                br
                span Clasificación de métodos de evaluación de usabilidad
              .col-lg-110
                figure
                  img(src="@/assets/curso/Images/tema2/img_4.svg" alt="", style="width:800px; display:block; margin:0 auto;")
                  figcaption Nota. Tomada de Granollers (2018). 
          p.mb-3 En ese sentido, se abordará cada método y técnica de manera sucinta. 
          h3.mb-3 Lugar de realización
          p.mb-5 En relación al lugar de realización, se tiene en cuenta el ambiente, controlado o no, al llevar a cabo la evaluación. Puede ser en espacios controlados, como los laboratorios, donde hay mayor manejo de las condiciones y variables externas. Y también están los espacios naturales, que, de acuerdo con el entorno del observado, se tendrá menor manejo sobre variables que puedan intervenir en la evaluación. Se presentan dos categorías generales, así:
    
          .row.justify-content-center.align-items-center
            .col-lg-10
              .tarjeta--container.row.mb-5
                .col-md.tarjeta.sp2.p-5
                  .row.justify-content-center.mb-4
                    .col-lg-12
                      .h2.text-center.text-small.mb-3 Aquellos que se realizan en el laboratorio
                        figure
                          img.my-4(src='@/assets/curso/Images/tema2/ico_1.svg' alt='', style="width:180px; display:block; margin:0 auto;")
                      p.mb-3  El objetivo del evaluador, a veces, es comprobar aspectos sin que sea necesaria la ayuda y/o presencia de los usuarios. Este tipo de comprobaciones y validaciones las realiza, normalmente, en su área de trabajo, que por lo general es en el laboratorio, donde se puede tener una gran oportunidad de traer usuarios para un estudio particular.

                      p En la sección de material complementario, se presenta un ejemplo de laboratorio de usabilidad construido por una de las grandes multinacionales, como lo es Oracle. Para visualizar y aprender sobre este escenario, encontrará el enlace con el nombre de laboratorios de usabilidad.
                .col-md.tarjeta.sp3.p-5
                  .row.justify-content-center.mb-4
                    .col-lg-12
                      .h2.text-center.text-small Aquellos que se realizan en el entorno natural o habitual del escenario (donde se realizan las tareas a evaluar)
                        figure
                          img.my-3(src='@/assets/curso/Images/tema2/ico_2.svg' alt='', style="width:180px; display:block; margin:0 auto;")
                    
                      p Esta condición se da cuando el evaluador realiza su trabajo en el escenario natural donde se realiza la escena o acciones cotidianas del usuario. Por ejemplo, muchas de las empresas utilizan la tecnología de seguimiento ocular para revisar dónde los usuarios enfocan su atención. Este tipo de prácticas se usa con frecuencia para revisar mejorar la usabilidad de los sitios web de e-commerce, utilizando la técnica de Tracking Eye Movements) para reconocer y comprender la navegación ocular de dichas aplicaciones web.

         
              .jumbotron-3.p-5.mb-5
                .row.align-items-center.justify-content-center
                  .col-lg-7
                    p.mb-3 Si es de su interés conocer más sobre el lugar de realización de evaluación respecto a usabilidad y accesibilidad, se le invita a consultar un video de YouTube que muestra un laboratorio de usabilidad construido por una de las grandes multinacionales, como lo es Oracle, que puede acceder a través del siguiente enlace.  
                  .col-lg-5 
                    a.anexo.mb-4.mb-lg-0(href="https://www.youtube.com/watch?v=Nar8SZK3MdU" target="_blank")
                      .anexo__icono
                        img(src="@/assets/template/icono-link.svg")
                      .anexo__texto
                        p Oracle Applications User Experience Usability Labs.
            .row.align-items-center.justify-content-center
              .col-lg-10
                h3.mb-3 Tipo de técnica
                p.mb-3 En cuanto al tipo de técnica de comprobación utilizada, se distinguen tres categorías: inspección, indagación y test, tal como se puede consultar en el siguiente recurso:

            ImagenInfografica.color-secundario.mb-5
                template(v-slot:imagen)
                  figure
                    img(src='@/assets/curso/Images/tema2/img_5.svg', alt='', style="width:918px; display:block; margin:0 auto;")
            
                .tarjeta.color-acento-botones.p-3(x="9%" y="65%" numero="")
                  p.mb-3 Es una de las formas más económicas de encontrar errores en la web, aplicación, o cualquier sistema que interactúe con el usuario.
                .tarjeta.color-acento-botones.p-3(x="9%" y="73%" numero="")
                  p.mb-3 Un grupo de evaluadores examina la interfaz, realizando un conjunto de tareas y evaluando su comprensión y facilidad de aprendizaje.
                  p La interfaz está usualmente en forma de prototipo. Es una técnica idónea en la etapa de diseño.
                .tarjeta.color-acento-botones.p-3(x="9%" y="81%" numero="")
                  p.mb-3 Son reuniones multidisciplinares, en las que diseñadores, desarrolladores, usuarios y expertos en usabilidad asumen el rol de usuarios del sistema.
                .tarjeta.color-acento-botones.p-3(x="9%" y="89%" numero="")
                  p.mb-3 Este método aporta una primera aproximación conocida de implicar a usuarios en los tradicionales recorridos cognitivos. Pues, conocedores de las ventajas de estos recorridos, se hace consistente evidenciar los principales problemas que puedan presentarse y, a la vez, detectados por los usuarios.
                .tarjeta.color-acento-botones.p-3(x="9%" y="96%" numero="")
                  p.mb-3 Se realiza por medio de un experto en un estándar de la interfaz, que puede ser de facto o de iure. El experto realiza una inspección minuciosa a la interfaz, para comprobar que en todo momento y de manera global se cumplen los puntos definidos en el estándar.
                .tarjeta.color-acento-botones.p-3(x="41%" y="66%" numero="")
                  p.mb-3 La investigación de campo, generalmente, implica una combinación del método de observación de participante, entrevistas y análisis. Las grandes corporaciones pueden tener su propio departamento de marketing o investigación, para recopilar datos de fuentes primarias. Sin embargo, para la mayor parte de la investigación de campo, se contrata a terceros que realizan encuestas, grupos focales y entrevistas a nombre de la compañía.
                .tarjeta.color-acento-botones.p-3(x="41%" y="73%" numero="")
                  p.mb-3 El Focus Group o Grupo de Discusión Dirigido es una técnica de recogida de datos, donde se reúnen de 6 a 9 personas (generalmente usuarios y también implicados) para discutir aspectos relacionados con el sistema. En ellos, un evaluador experto en usabilidad y/o accesibilidad (dependiendo del objetivo de la evaluación) realiza la función de moderador. Este preparará previamente la lista de aspectos a discutir y se encargará de recoger la información que necesita de la discusión.
                  p Esto permite capturar reacciones espontáneas e ideas de los usuarios que evolucionan en el proceso dinámico del grupo
                .tarjeta.color-acento-botones.p-3(x="41%" y="82%" numero="")
                  p.mb-3 Entrevistar a los usuarios respecto de su experiencia en un sistema interactivo resulta una manera directa y una técnica potente de adquirir información. Pueden ser estructuradas o abiertas (o desestructuradas), en las primeras, el evaluador es más rígido en procurar el buen seguimiento del guión preestablecido, mientras que en las abiertas, se da espacio a los contertulios a expresarse con más libertad.
                  p Las entrevistas pueden ser efectivas para una evaluación de alto nivel, particularmente para extraer información sobre las preferencias del usuario, impresiones y actitudes. Pueden ayudar a encontrar problemas no previstos en el diseño.
                .tarjeta.color-acento-botones.p-3(x="41%" y="89%" numero="")
                  p.mb-3 En el ámbito de la evaluación de sistemas interactivos, hablamos de cuestionarios para referirnos a listas de preguntas que el evaluador distribuye entre usuarios y/o implicados, para que estos nos las devuelvan con sus respuestas y, así, poder extraer conclusiones. El cuestionario normalmente se distribuye en formato escrito y las preguntas plantean aspectos relacionados con el sistema o aplicación concreta.
                  p Así pues, la base del cuestionario es la recolección de información a partir de respuestas contestadas por los usuarios y/o los implicados.
                .tarjeta.color-acento-botones.p-3(x="41%" y="97%" numero="")
                  p.mb-3 La técnica grabación de uso, más conocida como análisis de logs o simplemente logging, se basa en «grabar» o «recoger» todas las actividades realizadas por el usuario con el sistema para su posterior análisis. Para ello, se precisa de una aplicación secundaria que realice automáticamente esta labor y que pase, además, totalmente inadvertida para el usuario.
                  p El logging implica disponer en el ordenador de una aplicación del sistema que recoja automáticamente estadísticas sobre el uso detallado del sistema. Es útil porque muestra cómo los usuarios realizan su trabajo real y porque es fácil recoger automáticamente datos de una gran cantidad de usuarios que trabajan bajo diversas circunstancias.
                .tarjeta.color-acento-botones.p-3(x="74%" y="65%" numero="")
                  p.mb-3 En este método de evaluación, conocido como «thinking aloud», descrito por Nielsen, se pide a los usuarios, de forma individual, que expresen en voz alta y libremente sus pensamientos, sentimientos y opiniones sobre cualquier aspecto (diseño, funcionalidad, etc.), mientras que interactúan con el sistema o un prototipo del mismo.
                  p Resulta ser un método altamente eficaz para capturar aspectos relacionados con las actividades cognitivas de los usuarios potenciales del sistema evaluado.
                .tarjeta.color-acento-botones.p-3(x="74%" y="73%" numero="")
                  p.mb-3 Una variante del thinking aloud es el método conocido como Interacción Constructiva, el cual, en vez de un solo usuario, cuenta dos usuarios que realizan el test simultáneamente.
                  p La verbalización conjunta lo hace “más natural”. Aunque, como desventaja, puede ser que los usuarios tengan diferentes estrategias de aprendizaje y dificulten el test.
                .tarjeta.color-acento-botones.p-3(x="74%" y="81%" numero="")
                  p.mb-3 El método del conductor es algo diferente de estos métodos de test vistos hasta ahora, en los que hay una interacción  explícita entre el usuario y el evaluador (o conductor), donde se trata de interferir lo menos posible al usuario mientras realiza el test.
                .tarjeta.color-acento-botones.p-3(x="74%" y="89%" numero="")
                  p.mb-3 La técnica conocida como ordenación de tarjetas, o card sorting, es la utilizada para conocer cómo los usuarios visualizan la organización de la información. El diseñador utiliza las aportaciones de los usuarios para decidir cómo deberá estructurarse la información en la interfaz.
                  p.mb-3 Se trata de una técnica simple -fácil de entender y de aplicar-, barata, rápida y que involucra a los usuarios, que es especialmente indicada cuando disponemos de una serie de ítems que precisan ser catalogados, así como para decidir la estructura organizativa de cualquier sistema de información.
                  p Esta técnica tiene demostrada utilidad para desarrollar sitios web, para lo cual está especialmente recomendada. 
            
            .row.align-items-center.justify-content-center.mb-5
              .col-lg-11
                .cajon.color-custom-6.p-4
                  p.mb-3 Para el caso especial de este componente formativo, se hará énfasis en la técnica de la evaluación heurística, debido a la complejidad de esta disciplina y también a la extensión del componente formativo. No obstante, se dejan en el material complementario enlaces a videos y artículos sobre las diferentes técnicas de evaluación, como soporte al proceso formativo.
                
    
            .row.align-items-center.justify-content-center
              .col-lg-11
                h3.mb-3 Evaluación heurística 
                p.mb-3 Toni Granollers, en su página oficinal de metodologías de usabilidad, se refiere a esta técnica como: “La «Heurística» es un método de evaluación de sistemas interactivos desarrollado por Nielsen y Molich, que consiste en analizar (mediante la inspección de varios evaluadores expertos) la calidad de uso de una interfaz, a partir de comprobar su conformidad respecto unos principios reconocidos de usabilidad”.

            .row.align-items-center.mb-5
              .col-lg-7.mb-5.mb-lg-0
                .row.justify-content-center.align-items-center
                  .col-12.col-md-8.col-lg-8.col-xl-10
                      p.mb-0 Este método consiste en aplicar el decálogo de Nielsen, que consta de 10 reglas o lineamientos. Para ello, se reúne un conjunto de evaluadores expertos en usabilidad, los cuales contrastan y validan individualmente el conjunto de reglas (o comúnmente llamadas heurísticas, o guidelines) escogidas en la interfaz del sistema. Tras las revisiones individuales por cada experto, los resultados son puestos en común y discutidos en una reunión entre los evaluadores y la persona responsable de la evaluación, generando un informe final de la práctica.
              .col.md-6.col-lg-5.mb-4.mb-lg-0
                  img(src="@/assets/curso/Images/tema2/img_6.svg", alt="",)

            ImagenInfografica.color-secundario.mb-5
                template(v-slot:imagen)
                  figure
                    img(src='@/assets/curso/Images/tema2/img_7.svg', alt='', style="width:900px; display:block; margin:0 auto;")
            
                .tarjeta.color-acento-botones.p-3(x="18%" y="23%" numero="")
                  p.mb-3 El sistema software siempre debe mantener a todos los usuarios informados sobre lo que ocurre o pasa en la aplicación, a través de una retroalimentación apropiada en un tiempo razonable, de hecho, el tiempo es lo que más cuenta en la actualidad, debido a que los usuarios se han acostumbrado a la inmediatez y, además, los usuarios ya poco leen en la web, dado que han afianzado la acción de escanear.
                .tarjeta.color-acento-botones.p-3(x="34%" y="23%" numero="")
                  p.mb-3 El sistema software debe hablar en el lenguaje del usuario, con palabras, frases, coloquios y conceptos familiares para él. Aquí cobra bastante importancia la arquitectura de la información, vista anteriormente. Por eso, utilizar convenciones del mundo real, haciendo que la información aparezca en un orden natural y lógico, este tipo de convenciones y gráficos es lo que técnicamente se llaman metáforas.
                .tarjeta.color-acento-botones.p-3(x="50%" y="23%" numero="")
                  p.mb-3 Es normal que, cuando se utiliza por primera vez, los usuarios ingresen a un sitio donde no querían, por lo que necesitan una ‘puerta de emergencia’ para salir del estado indeseado. En ese sentido es imperativo ofrecer soporte para deshacer y rehacer acciones.
                .tarjeta.color-acento-botones.p-3(x="66%" y="23%" numero="")
                  p.mb-3 No se debe colocar en juicios a los usuarios, ni ponerlos en escenarios de dudas si las diversas palabras, situaciones o acciones significan la misma cosa. Por lo tanto, se deben seguir las normas y convenciones de la plataforma sobre la que está implementado el sistema.
                .tarjeta.color-acento-botones.p-3(x="82%" y="23%" numero="")
                  p.mb-3 Es necesario tener la cultura de la proactividad, más que ser reactivos a incidentes. Esta reflexión recae sobre que antes que diseñar buenos mensajes o notificaciones de error, es mejor evitar que el problema ocurra.
                .tarjeta.color-acento-botones.p-3(x="18%" y="61%" numero="")
                  p.mb-3 Es importante entender que menos es más, debido a que el usuario necesita enfocarse en lo que debe hacer para alcanzar sus objetivos, y así se minimiza la carga de memoria del usuario, haciendo que los objetos de interacción, las acciones y las opciones estén visibles. De esta forma, se evitará que el usuario tenga que recordar la información de una parte del diálogo a otra.
                .tarjeta.color-acento-botones.p-3(x="34%" y="61%" numero="")
                  p.mb-3 La personalización de un sistema es crucial para su éxito. Esto permitirá adaptarse a diversas condiciones de los usuarios. Por ejemplo, los aceleradores, no vistos por el usuario principiante, pero sí por el usuario experto, lo que le permite una mejor interacción con el sistema, así que el sistema podrá adaptarse a los distintos tipos de usuarios. Es crucial que el sistema permita personalizar acciones frecuentes.
                .tarjeta.color-acento-botones.p-3(x="50%" y="61%" numero="")
                  p.mb-3 Los diálogos, alertas o notificaciones no deben contener información irrelevante, como se ha indicado anteriormente. Se debe propiciar que el usuario alcance su objetivo. Se hace claridad que, cada vez que adicionemos alguna información, sea un diálogo o notificación, va a competir con la información importante, disminuyendo la atención y visibilidad relativa.
                .tarjeta.color-acento-botones.p-3(x="66%" y="61%" numero="")
                  p.mb-3 Los mensajes de error, alertas o notificaciones deben estar expresados en lenguaje sencillo (sin códigos), indicando de manera precisa y rápida el problema y siempre sugiriendo una solución.
                .tarjeta.color-acento-botones.p-3(x="82%" y="61%" numero="")
                  p.mb-3 Aunque es mejor que se pueda usar el sistema sin documentación, es necesario proveer al usuario de ayuda y documentación. Esta tiene que ser fácil de buscar, centrada en las tareas del usuario, con información de las etapas a realizar y que no sea muy extensa.


            .jumbotron-3.p-5.mb-5
                .row.align-items-center.justify-content-center
                  .col-lg-7
                    p.mb-3 Si es de su interés conocer más sobre el decálogo de Nielsen (encontrar con este nombre), se le invita a consultar el material complementario, donde además encontrará ejemplos gráficos, las buenas y malas prácticas de esta evaluación, para ilustrar de mejor manera este apartado, que puede acceder en el siguiente enlace. 
                  .col-lg-5 
                    a.anexo.mb-4.mb-lg-0(href="https://www.nngroup.com/articles/ten-usability-heuristics/ " target="_blank")
                      .anexo__icono
                        img(src="@/assets/template/icono-link.svg")
                      .anexo__texto
                        p 10 Usability Heuristics for User Interface Design.

            .row.align-items-center.justify-content-center.mb-5
              .col-lg-11
                h3.mb-3 Comparativa de los métodos de evaluación de la usabilidad
                p.mb-3 A continuación, se presenta una tabla que resume los métodos de evaluación de la usabilidad nombrados, esto con el objetivo de disponer de una visión holística que permita comprender, entre otras cosas, las principales características de cada una de ellos. Este cuadro es tomado del curso de Interacción humano-ordenador del profesor Toni Granollers.  Para mejor visualización de la tabla, se anexa en el material complementario como tabla comparativa de técnicas de evaluación, y puede ser consultada en el enlace.
                .row.align-items-center.justify-content-center
                  .col-lg-6
                    a.anexo.mb-4.mb-lg-0(href="http://mpiua.invid.udl.cat/wp-content/uploads/2014/07/Comparativa-M%C3%A9todos-Evaluaci%C3%B3n-Usabilidad.png" target="_blank")
                      .anexo__icono
                        img(src="@/assets/template/icono-link.svg")
                      .anexo__texto
                        p 10 Usability Heuristics for User Interface Design.

            .row.justify-content-center.mb-5
              .col-lg-10.mb-3
                .titulo-sexto.color-acento-contenido
                  h5 Figura 6
                  br
                  span Tabla comparativa técnicas evaluación de usabilidad
                .col-lg-12
                  figure
                    img(src="@/assets/curso/Images/tema2/img_8.svg" alt="", style="width:800px; display:block; margin:0 auto;")
                    br
                    figcaption Nota. Tomada de https://mpiua.invid.udl.cat/wp-content/uploads/2014/07/Comparativa-M%C3%A9todos-Evaluaci%C3%B3n-Usabilidad-794x1024.png

            .jumbotron-2.p-5.mb-5
              .row.align-items-center.justify-content-center
                .col-lg-7
                  h3.mb-3 Automatización
                  p.mb-3 La característica de automatización se centra en la forma en que los resultados son obtenidos al emplear un método. Según la tabla anterior, hay una columna en la que se puede apreciar cuáles tienen esta característica. Esos métodos son aquellos que disponen de mecanismos, sean hardware y/o software, que facilitan la comprobación de los aspectos a validar. Los métodos automáticos resultan eficientes por la inmediatez de sus resultados, dado que siempre provienen de los mismos parámetros, sin apreciaciones subjetivas.
                .col-lg-5 
                  figure
                    img(src="@/assets/curso/Images/tema2/img_9.svg" alt="", style="width:300px; display:block; margin:0 auto;")
              p.mb-3 El principal problema de estos métodos radica en que siempre se soportan en sistemas ya finalizados o versiones beta y no pueden utilizarse en etapas tempranas del ciclo de vida del desarrollo software del proyecto.

            .row.align-items-center.justify-content-center
              .col-lg-12
                h3.mb-3 Participantes
                p.mb-3 Otra característica a tener en cuenta son las personas que intervienen en los métodos, el tipo de participantes en la evaluación. Se pueden distinguir los siguientes métodos:

            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
              div(titulo="Sin usuarios y/o implicados")
                .row.align-items-center.justify-content-center.p-4
                    .col-lg-6
                      p.mb-3 Métodos que son realizados solo por expertos evaluadores con la ayuda de pautas o instrucciones que permiten hacer un seguimiento de lo que han realizado los usuarios mientras utilizan el sistema. Esta modalidad de trabajar sin la presencia de los usuarios permite que este tipo de métodos se realicen con mayor rapidez; no obstante, por el mismo motivo, carecen de la valiosa información que evaluar con dichos usuarios aporta al desarrollo del aplicativo software. Adicionalmente, el método tiene un valor agregado y es que permite detectar errores funcionales.
                    .col-lg-6
                      figure  
                        img.mx-5(src='@/assets/curso/Images/tema2/img_10.svg' alt="", style="width:300px; display:block; margin:auto 0;")

              div(titulo="Con usuarios y/o implicados")
                .row.align-items-center.justify-content-center.p-4
                  .col-lg-6
                    p.mb-3 Son los métodos en los que se evalúa el sistema con la intervención directa de los usuarios objetivos. De igual manera, también pueden participar en las sesiones otras personas que, sin ser usuarios finales, tienen la condición de stakeholders o implicados del sistema.
                    p Estos métodos resultan ser muy pertinentes debido a que implican la participación de usuarios en el proceso de diseño; la desventaja es que no siempre resulta fácil reclutar usuarios para este tipo de ejercicios.
                  .col-lg-6
                    figure  
                      img.mx-5(src='@/assets/curso/Images/tema2/img_11.svg' alt="", style="width:300px; display:block; margin:auto 0;")
            Separador 
   
            #t_2_2.titulo-segundo
              h2 2.2  Plan de evaluación. Introducción y conceptos básicos
            
            .row.align-items-center.justify-content-center.mb-5
              .col-lg-12
                p.mb-3 Para esta sección, se conocen de manera precisa y teórica los pasos que se deben seguir para la elaboración de un plan de pruebas. Además, se anexa un template o plantilla para este proceso, que agrupa los pasos y todo lo visto anteriormente para que pueda ser aplicado.

                p Un plan de evaluación es una secuencia de pasos ya establecidos, y en la literatura se encuentra gran variedad de estos ejercicios; no obstante, para este fin, se considera el siguiente modelo como el más pertinente, el que propone el Profesor Toni Granollers en su curso de Interacción humano-ordenador (Granollers, 2015). En el siguiente recurso educativo, se presentan los pasos:
            
            .jumbotron-2.mb-5.p-4
              .col-lg-10.mx-auto.mb-5.p-5
                PasosA.color-acento-contenido.mb-5(tipo="n")
                  .row.align-items-center 
                    .col-md-12
                      p.mb-0 Antes de iniciar una evaluación, se deben tener claros los objetivos de la misma. No se debe pensar en el sistema en global, sino solo en la parte que va a ser probada y en lo que se espera de la prueba. Aquí toma precisión una de las frases más importantes del desarrollo software: “divide y vencerás”.
                  .row.align-items-center 
                    .col-md-12
                      p.mb-5 Cada evaluación debe tener un responsable (puede ser un integrante del equipo de desarrollo), el cual tendrá las siguientes responsabilidades:
                      ul.lista-ul--color
                        li 
                          i.fas.fa-circle.cac
                          | Moderar las sesiones
                        li 
                          i.fas.fa-circle.cac
                          | Reclutar a los usuarios y/o a los evaluadores
                        li 
                          i.fas.fa-circle.cac
                          | Reservar el lugar de celebración de la evaluación (tanto si se trata del laboratorio como del lugar de trabajo)
                        li 
                          i.fas.fa-circle.cac
                          | Dirigir las tareas a evaluar (en función de los objetivos del punto anterior)
                        li 
                          i.fas.fa-circle.cac
                          | Disponer de todos los recursos necesarios para la evaluación (prototipos, dispositivos necesarios, etc.)
                        li 
                          i.fas.fa-circle.cac
                          | Tener claras las tareas a probar
                        li 
                          i.fas.fa-circle.cac
                          | Qué técnicas de evaluación se utilizarán
                  
                  
                  .row.align-items-center
                    .col-md-12
                      p.mb-0 La evaluación debe tener una planeación bien hecha, y eso está sujeto también a los costos que demanda la misma (presupuesto). Como es una planeación, se deberán prever tantas actividades como sean necesarias, y dependiendo de las necesidades y requerimientos de cada una, se aplicará uno o más métodos de evaluación de usabilidad y/o accesibilidad.
                  .row.align-items-center
                    .col-md-12
                      p.mb-0 Se deben documentar los resultados de la evaluación (responsabilidad del integrante del equipo de desarrollo) y esta deberá ser distribuida y socializada entre los miembros del equipo que precisen de dichos resultados (responsabilidad del director del proyecto).
            
            .row.align-items-center.justify-content-center
              .col-lg-12
                p.mb-3 Existe una de las mejores plantillas de plan de pruebas de usabilidad para sistemas software. Esta plantilla es muy intuitiva de manejar y desglosa los apartados que ya se han visto anteriormente, y es el objetivo real de este componente. Por lo que se sugiere al aprendiz leer con detenimiento esta base conceptual para que pueda aplicar esos conocimientos en la plantilla.  
              
            .row.justify-content-center.align-items-center.mb-5
              .col-12.col-lg-8.mb-5.mb-lg-0
                .jumbotron-10.mb-3.p-3
                  .row.align-items-center.justify-content-center
                    .col-lg-6
                      p.mb-3 Si es de su interés conocer la aplicación de plantilla del plan de pruebas de usabilidad para sistemas de software, se le invita a consultar el material complementario que puede acceder en el siguiente enlace. 
                    .col-lg-6
                      a.anexo.mb-4.mb-lg-0(href="https://profs.info.uaic.ro/~stefan.negru/usability" target="_blank")
                        .anexo__icono
                          img(src="@/assets/template/icono-link.svg")
                        .anexo__texto
                          p Usability Test Plan Template
                p.mb-3 Finalmente, en relación con los fundamentos de la accesibilidad, esta es una disciplina que debe tenerse en cuenta para los procesos de desarrollo y evaluación y no debe ser olvidada. Usted podrá mejorar sus competencias y habilidades en el desarrollo y evaluación de proyectos software; de esta forma, se espera que los sistemas sean cada vez más prolijos. 
                .jumbotron-11.mb-3.p-3 
                  .row.align-items-center.justify-content-center
                    .col-lg-6
                      p.mb-3 Si es de su interés conocer más sobre los fundamentos de accesibilidad, se le invita a consultar el material complementario que puede acceder en el siguiente enlace. 
                    .col-lg-6
                      a.anexo.mb-4.mb-lg-0(href="https://mpiua.invid.udl.cat/curso-ipo/curso-ipo-accesibilidad/ " target="_blank")
                        .anexo__icono
                          img(src="@/assets/template/icono-link.svg")
                        .anexo__texto
                          p Curso de Interacción Persona-Ordenador
              .col-lg-4.mb-5.mb-lg-0
                img.my-3(src="@/assets/curso/Images/tema2/img_12.svg", alt="")




    





</template>

<script>
export default {
  name: 'Tema2',
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
