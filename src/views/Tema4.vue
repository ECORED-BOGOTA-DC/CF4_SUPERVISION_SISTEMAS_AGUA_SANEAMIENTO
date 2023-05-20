<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Muestreo y medición
    
    p(data-aos="fade-up") Usualmente las actividades de muestreo y medición para el agua que será objeto de consumo humano se establecen previamente en un instrumento denominado programa de muestreo; este es un documento que se diseña para garantizar que las muestras tomadas sean representativas del sistema de distribución de agua para consumo humano. Al respecto, revise el siguiente video:

    .cont_gradiente1.mt-5
      .col-lg-10.m-auto
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    Separador.mt-5

    .titulo-segundo
      h2#t_4_1 4.1 Procedimientos de muestreo 
    
    p(data-aos="fade-up") En este apartado se presentan las indicaciones para realizar la localización del muestreo, cómo se definen los métodos y cantidad de muestras, así como la frecuencia y la vigilancia de la calidad de las muestras, finalmente, se muestran los pasos antes, durante y después de la toma de las muestras.

    .p-3.mt-5(style="background-color:#3076B6;border-radius:0px 40px 0px 40px;max-width:400px;" data-aos="fade-up")
      h3.mb-0.text-white.text-center Localización del muestreo
    
    .row.mt-4
      .col-lg-8.mb-4.mb-lg-0(style="place-self:center;")
        p(data-aos="fade-up") Para definir la localización de los muestreos se debe verificar siempre la normatividad legal vigente, en este caso la Resolución 0811 de 2008 de los ministerios de la Protección Social y de Ambiente, Vivienda y Desarrollo Territorial.
        .p-4.mt-4(style="background-color:#EDF7FE;")
          .row
            .col-auto
              i.fas.fa-quote-left(style="color:#3076B6;font-size:25px;" data-aos="fade-right")
            .col
              p.mb-0.mt-2(data-aos="fade-up") Por medio de la cual se definen los lineamientos a partir de los cuales la Autoridad Sanitaria y las Personas Prestadoras, concertadamente definirán en su área de influencia los lugares y puntos de muestreo para el control y la vigilancia de la calidad del agua para consumo humano en la red de distribución.
            .col-auto(style="place-self:end;")
              i.fas.fa-quote-right(style="color:#3076B6;font-size:25px;" data-aos="fade-left")
        p.mt-4(data-aos="fade-up") En la cual se define que para establecer el punto de muestreo se deben tener en cuenta los siguientes criterios:
        ul.fa-ul.mb-0.mt-3
          li.mb-2(data-aos="fade-up")
            i.fas.fa-check-circle.fa-li(style="color:#FFA031;")
            | Puntos fijos.
          li.mb-2(data-aos="fade-up")
            i.fas.fa-check-circle.fa-li(style="color:#FFA031;")
            | De interés general.
          li(data-aos="fade-up")
            i.fas.fa-check-circle.fa-li(style="color:#FFA031;")
            | Provisionales.
      .col-lg-4(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema4/1.png" data-aos="fade-left")
    
    .cajon.color-secundario.p-4.cajon1.mt-5(style="background-color:#F6F6F6;")
      p.mb-0(data-aos="fade-up") De acuerdo con el INS (2011), en esta resolución se establece el número mínimo de puntos de muestreo, de acuerdo con la población atendida (habitantes) por persona prestadora por municipio, para efectos del control y vigilancia de la calidad del agua para consumo humano y cómo se deben identificar esos puntos de muestreo de manera concertada, a través de un acta suscrita entre la Persona Prestadora y la Autoridad Sanitaria competente (p.27).

    p.mt-5.fw-bold(data-aos="fade-up") Lo invitamos a consultar la Resolución 0811 de 2008 de los ministerios de la Protección Social y de Ambiente, Vivienda y Desarrollo Territorial para ampliar la información.

    .mt-4.col-10.m-auto
      .row(style="background-color:#F6F6F6;border-radius:20px;box-shadow:rgba(0, 0, 0, 0.1) 0px 5px 9px 0px;")
        .col-auto.p-0.d-flex.align-items-center
          figure
            img(src="@/assets/curso/tema2/15.png" data-aos="fade-right" style="margin-left: -47px;width: 100px;max-width: 100px;")
        .col.p-0.pe-3
          .p-4.ps-2
            h4(data-aos="fade-up") Importante
            p.mb-0(data-aos="fade-up") Ministerios de la Protección Social y de Ambiente, Vivienda y Desarrollo Territorial. Resolución 0811 de 2008.
            a(href="https://www.ins.gov.co/sivicap/Documentacin%20SIVICAP/2008%20Resoluci%C3%B3n%200811%20Puntos%20de%20muestreo.pdf" target="_blank" style="color:#3076B6;word-break:break-all;") https://www.ins.gov.co/sivicap/Documentacin%20SIVICAP/2008%20Resoluci%C3%B3n%200811%20Puntos%20de%20muestreo.pdf

    .p-3.mt-5(style="background-color:#3076B6;border-radius:0px 40px 0px 40px;max-width:450px;" data-aos="fade-up")
      h3.mb-0.text-white.text-center Definir métodos y cantidad de muestras
    
    p.mt-4(data-aos="fade-up") En esta fase se define la forma como serán tomadas las muestras, para ello se requiere que revise temas de presupuesto, personal, disponibilidad, capacitación, transporte, costos, equipo con el que se cuenta, entre otros.
    p.mt-4(data-aos="fade-up") Una vez definidos estos parámetros se puede establecer el método de muestreo a aplicar, como se muestra a continuación:

    br
    .row.mt-5
      .col-lg.mb-5.mb-lg-0
        .h-100.p-4.pt-0(style="background-color:#FFA031;border-radius:10px;")
          figure.text-center
            img(src="@/assets/curso/tema4/2.svg" data-aos="zoom-in-up" style="max-width:100px;display:inline;position:relative;margin-top:-50px;")
          h4.text-center.mt-4(data-aos="fade-up") Muestreo Manual
          p.mt-3(data-aos="fade-up") Se realizan cuando se tienen sitios de fácil acceso. Permite al encargado tomar la muestra, observar los cambios en las características del agua en cuanto a sustancias flotanes, color, olor, aumento o disminución de caudad, entre otros.
      .col-lg.mb-5.mb-lg-0.mt-4.mt-lg-0
        .h-100.p-4.pt-0(style="background-color:#4DB1F0;border-radius:10px;")
          figure.text-center
            img(src="@/assets/curso/tema4/3.svg" data-aos="zoom-in-up" style="max-width:100px;display:inline;position:relative;margin-top:-50px;")
          h4.text-center.mt-4(data-aos="fade-up") Muestreo automático
          p.mt-3(data-aos="fade-up") Para sitios con difícil acceso, tiene como ventaja más precisión en la toma de muestras. Pero, a su vez, es más complejo el montaje y precisión.
      .col-lg.mb-5.mb-lg-0.mt-4.mt-lg-0
        .h-100.p-4.pt-0(style="background-color:#FFA031;border-radius:10px;")
          figure.text-center
            img(src="@/assets/curso/tema4/4.svg" data-aos="zoom-in-up" style="max-width:100px;display:inline;position:relative;margin-top:-50px;")
          h4.text-center.mt-4(data-aos="fade-up") Muestreo mixto
          p.mt-3(data-aos="fade-up") Involucra a los dos tipos de muestreo anteriores y permite la verificación manual de los resultados obtenidos  de forma automática.
    
    .p-3.mt-5(style="background-color:#3076B6;border-radius:0px 40px 0px 40px;max-width:400px;" data-aos="fade-up")
      h3.mb-0.text-white.text-center Frecuencia del muestreo
    
    .row.mt-5
      .col-lg-4.mb-4.mb-lg-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema4/5.png" data-aos="fade-right")
      .col-lg-1
      .col-lg-7(style="place-self:center;")
        .p-4.cont_arrow2.pt-5.pb-5(style="background-color:#EDEDED;border-radius:7px;position:relative")
          p.mb-0(data-aos="fade-up") La recolección de muestras en la red de distribución de agua para consumo humano se realizará siempre teniendo en cuenta la Resolución 2115 de 2007, de los Ministerios de la Protección Social y de Ambiente, Vivienda y Desarrollo territorial, dentro de los artículos del 24 al 30, en los cuales se encuentran características, instrumentos y frecuencias del sistema de control y vigencia para la calidad del agua para consumo humano. Se les invita a consultar la norma para ampliar la información.
    
    .p-3.mt-5(style="background-color:#3076B6;border-radius:0px 40px 0px 40px;max-width:450px;" data-aos="fade-up")
      h3.mb-0.text-white.text-center Vigilancia de la calidad del muestreo
    
    p.mt-4(data-aos="fade-up") Esta fase se basa en la toma y análisis de la muestra en un momento determinado y que esta garantice la calidad del agua en dicho momento.
    p.mt-4(data-aos="fade-up") Teniendo claro que las muestras pueden ser susceptibles de reacciones que generen cambios, es elemental tener todo el rigor científico y procedimental para tratar de controlar dichas reacciones, dentro de las cuales, según el INS (2011), se pueden encontrar:

    .col-lg-10.mt-5.m-auto
      .row
        .col-lg.p-0
          .h-100.p-4(style="background-color:#B6CFE5;border-radius:10px 0px 0px 10px;")
            figure.text-center
              img(src="@/assets/curso/tema4/6.svg" data-aos="zoom-in-up" style="max-width:100px;display:inline;")
            h4.mt-4.text-center(data-aos="fade-up") Reacciones químicas o biológicas
            p.mt-4.mb-0(data-aos="fade-up") Temperatura, su exposición a la luz, la naturaleza del recipiente en el cual se coloca, el tiempo entre el muestreo y el análisis, las condiciones a las cuales se somete (agitación o reposo durante el transporte), etc., (p.31).
        .col-lg.p-0
          .h-100.p-4(style="background-color:#C1E4FA;border-radius:0px 10px 10px 0px;")
            figure.text-center
              img(src="@/assets/curso/tema4/7.svg" data-aos="zoom-in-up" style="max-width:100px;display:inline;")
            h4.mt-4.text-center(data-aos="fade-up") Reacciones físicas
            p.mt-4.mb-0(data-aos="fade-up") El tipo de agua, la velocidad de la toma, el transporte, el almacenamiento o preservación de la muestra.
    
    p.mt-5(data-aos="fade-up") Es por esto que se sugiere siempre realizar algunos controles de las condiciones de las muestras durante los procesos de preservación, transporte y almacenamiento. En los sitios de muestreo el INS sugiere que sean controles:

    .row.mt-5
      .col-lg-4.mb-4.mb-lg-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema4/8.png" data-aos="fade-right")
      .col-lg-8(style="place-self:center;")
        LineaTiempoD.color-acento-contenido
          p(numero="1" titulo="Testigo") Solución de concentración conocida de la especie química a analizar, preparada en el laboratorio con agua grado reactivo; su función es soportar y hacer seguimiento de las condiciones de transporte, preservación y almacenamiento de las muestras.
          p(numero="2" titulo="Blanco") Muestra de agua grado reactivo que no contiene el analito de interés, pero que debe contener todos los reactivos que se utilizan en el método de muestreo y análisis, y debe ser sometido a las mismas condiciones y al mismo procedimiento que las muestras. La función de los blancos es demostrar que las muestras no sufrieron procesos de contaminación cruzada, ni alteraciones en el transcurso del muestreo, preservación y almacenamiento, y verifican el estado de limpieza de los envases.
          p(numero="3" titulo="Adicionado") Muestra a la cual se le ha agregado una cantidad conocida del analito de interés. Esta adición debe hacerse en la forma prevista en el diseño de las condiciones de estandarización para que sea reproducible. La función de los adicionados es demostrar que no existen interferencias de matriz o que si existen son cuantificables y que el analito no se degrada o altera significativamente durante el muestreo y transporte, entre otras características.
          p(numero="4" titulo="Muestra duplicada") Muestra de la cual dos porciones se depositan en botellas diferentes, con el fin de garantizar la repetitividad y representatividad del proceso de muestreo (2011, pp. 24 - 25).
    
    .p-3.mt-5(style="background-color:#3076B6;border-radius:0px 40px 0px 40px;max-width:400px;" data-aos="fade-up")
      h3.mb-0.text-white.text-center Pasos del muestreo
    
    .row.mt-5
      .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
        p(data-aos="fade-up") Aunque la recolección de la muestra parece sencilla, siempre pueden existir errores procedimentales, por eso se aconseja, de acuerdo al INS, el siguiente orden procedimental para la toma del muestreo:
        p.mt-4.fw-bold(data-aos="fade-up") Indicaciones previas:
        ul.lista-ul--separador.mb-0.mt-3
          li(data-aos="fade-up")
            i.fas.fa-check-circle(style="color:#FFA031;")
            |  Recolectar en el recipiente una muestra representativa del sistema de suministro de agua (cantidad sea suficiente para los análisis), escoger el recipiente adecuado dependiendo del análisis (vidrio o plástico) y realizar previa limpieza.
          li(data-aos="fade-up")
            i.fas.fa-check-circle(style="color:#FFA031;")
            | La concentración de las sustancias que se van a determinar no debe modificarse entre la toma y el análisis.
      .col-lg-5(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema4/9.png" data-aos="fade-left")
    
    p.mt-5.text-center.fw-bold(data-aos="fade-up") A continuación, se presentan los pasos a abordar para realizar la toma de muestras:

    TabsC.color-primario.mt-4
      .py-3.py-md-4(titulo="Antes de la muestra")
        .row.p-4
          .col-lg-8.mb-4.mb-lg-0(style="place-self:center;")
            ul.fa-ul.mb-0
              li.mb-2(data-aos="fade-up")
                i.fas.fa-check-circle.fa-li(style="color:#FFA031;")
                | Cumplir con las recomendaciones de seguridad.
              li.mb-2(data-aos="fade-up")
                i.fas.fa-check-circle.fa-li(style="color:#FFA031;")
                | Definir el cronograma de la toma de muestra.
              li.mb-2(data-aos="fade-up")
                i.fas.fa-check-circle.fa-li(style="color:#FFA031;")
                | Informar a las partes que intervienen.
              li.mb-2(data-aos="fade-up")
                i.fas.fa-check-circle.fa-li(style="color:#FFA031;")
                | Establecer una ruta de toma de muestras.
              li.mb-2(data-aos="fade-up")
                i.fas.fa-check-circle.fa-li(style="color:#FFA031;")
                | Alistar reactivos y preservantes.
              li.mb-2(data-aos="fade-up")
                i.fas.fa-check-circle.fa-li(style="color:#FFA031;")
                | Alistar los reactivos y preservantes. 
              li.mb-2(data-aos="fade-up")
                i.fas.fa-check-circle.fa-li(style="color:#FFA031;")
                | Rotular y garantizar que se mantengan en condiciones aptas.
              li.mb-2(data-aos="fade-up")
                i.fas.fa-check-circle.fa-li(style="color:#FFA031;")
                | Desinfectar equipos de muestreo y recipientes.
              li.mb-2(data-aos="fade-up")
                i.fas.fa-check-circle.fa-li(style="color:#FFA031;")
                | Llegar al lugar o sitio de muestreo.
              li(data-aos="fade-up")
                i.fas.fa-check-circle.fa-li(style="color:#FFA031;")
                | Desinfectar los puntos de toma, con un paño limpio, empapado de solución hipoclorito de sodio o calcio, según recomendaciones de la norma, o se puede usar temperatura si el dispensador de agua es metálico y drenar el agua por lo menos 1 a 2 minutos.
          .col-lg-4(style="place-self:center;")
            figure
              img(src='@/assets/curso/tema4/10.png')
      .py-3.py-md-4(titulo="Al arribar al punto de la muestra")
        .row.p-4
          p Arribar al punto de toma según ruta, previo a la hora programada y revisar el tipo, protección, mantenimiento y cuidado del sitio y dispositivo de toma de muestra que realice la persona prestadora. Tener presente si hay mantenimiento (contra la intemperie, vándalos o deterioro normal), dependiendo de si el dispositivo de toma está a ras, sobre o a media altura del piso (INSE, 2011, p.49).
          p.mt-4 Alistar todo el material de recolección de muestras, que incluye el formato de acta de toma de muestra, los elementos de limpieza y desinfección del punto, los envases para recolección de las muestras, los equipos obligatorios para realizar los análisis en sitio, los materiales para preservación y transporte (INSE, 2011, p.49).
          p.mt-4 Las neveras portátiles deben mantenerse a la sombra para permitir una mayor conservación de la temperatura.
      .py-3.py-md-4(titulo="Durante la toma de la muestra")
        .row.p-4
          p Asear el sitio y revisar dispositivo de toma (grifo, válvula de globo, llave, corte rápido), que no haya fugas entre el tambor y el cuello. Limpiar el orificio de salida con una gasa o torunda de algodón con solución de hipoclorito o desinfectante, y en los casos en que el material no sea plástico sino metálico, podrá flambear con llama y limpiarse posteriormente con alcohol (INSE, 2011, p.49).
          p.mt-4 Abrir para purgar sistema, dejando fluir el agua mínimo 1 o más, para quitar la estanqueidad del tubo.
          p.mt-4 Tomar la muestra y la contramuestra, contando incluso el tiempo de purga, en un lapso no superior a 10 minutos sin que el agua deje de fluir, siempre y cuando se tome muestra y contramuestra para todas las características (INSE, 2011, p.49).
      .py-3.py-md-4(titulo="Toma de la muestra")
        .row.p-4
          p Tomar la muestra para determinación de características que se pueden analizar en sitio: pH, cloro residual, en dado caso que se requiera también turbiedad, color aparente y conductividad eléctrica, si se cuentan con los equipos.
          p.mt-4 Tomar las muestras para análisis físico químicas y microbiológicas, que se enviarán al laboratorio correspondiente, teniendo en cuenta siempre el índice de riesgo de calidad del agua para consumo humano [IRCA], de que trata el artículo 13 de la Resolución 2115 de 2007.
          p.mt-4 Tomar la muestra para análisis especiales que se enviarán al laboratorio, dependiendo de cada muestreo (p.25).
      .py-3.py-md-4(titulo="Después de la muestra")
        .row.p-4
          .col-lg-8.mb-4.mb-lg-0(style="place-self:center;")
            ul.fa-ul.mb-0
              li.mb-2(data-aos="fade-up")
                i.fas.fa-check-circle.fa-li(style="color:#FFA031;")
                | Diligenciar el formato del acta.
              li.mb-2(data-aos="fade-up")
                i.fas.fa-check-circle.fa-li(style="color:#FFA031;")
                | Dejar el sitio de muestreo igual o mejor de lo que estaba.
              li.mb-2(data-aos="fade-up")
                i.fas.fa-check-circle.fa-li(style="color:#FFA031;")
                | Enviar o transportar, por el mejor medio disponible y en el menor tiempo posible, las muestras al laboratorio.
              li(data-aos="fade-up")
                i.fas.fa-check-circle.fa-li(style="color:#FFA031;")
                | Entregar al laboratorio, como parte de la cadena de custodia, el acta de toma de muestra, las muestras tomadas y terminar el proceso con firma de recibido por parte del laboratorio.
          .col-lg-4(style="place-self:center;")
            figure
              img(src='@/assets/curso/tema4/11.png')
    
    Separador.mt-5

    .titulo-segundo
      h2#t_4_2 4.2 Reporte de eventos

    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.bloque__1.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema4/12.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0(data-aos="fade-right") Cuando en un muestreo se evidencie mala calidad del agua, alteraciones en sus características como alta turbiedad, color, olor, sabor desagradable, o presencia de sustancias aceitosas, flotantes, entre otros, se deben realizar los reportes a la entidad prestadora del servicio de agua potable, instalar un punto de muestreo provisional de seguimiento para vigilar la calidad de esta mientras se corrige la alteración.
    
    Separador.mt-5

    .titulo-segundo
      h2#t_4_3 4.3 Registro de información
    
    .cajon.color-secundario.p-4.cajon1(style="background-color:#F6F6F6;")
      p.mb-0(data-aos="fade-up") Mantener registros de información durante el muestreo es evidencia de la organización de los programas diseñados para este fin y permiten tomar decisiones para el manejo del recurso, el tratamiento a realizar y responder las necesidades que se vean relacionadas.
    
    p.mt-4(data-aos="fade-up") Luego, el primer registro de información es el mismo programa de muestreo, el cual se diseña conforme a un protocolo o procedimiento operativo estándar [POE], documento que de acuerdo con el INS (2011), debe contener:

    .row.mt-4
      .col-lg-8.mb-4.mb-lg-0(style="place-self:center;")
        ul.lista-ul--separador.mb-0
          li(data-aos="fade-up")
            i.fas.fa-check-circle(style="color:#FFA031;")
            | #[strong Localización:] sitio del muestreo que responde a las preguntas ¿cuándo? ¿dónde? ¿cómo?, tomar la muestra.
          li(data-aos="fade-up")
            i.fas.fa-check-circle(style="color:#FFA031;")
            | #[strong Procedimientos:] método de muestreo, frecuencia, cantidad y calidad.
          li(data-aos="fade-up")
            i.fas.fa-check-circle(style="color:#FFA031;")
            | #[strong Equipo de muestreo:] condiciones experimentales, mantenimiento y calibración según análisis a realizar.
          li(data-aos="fade-up")
            i.fas.fa-check-circle(style="color:#FFA031;")
            | #[strong Recipientes de muestreo:] clase, capacidad, identificación y almacenamiento.
          li(data-aos="fade-up")
            i.fas.fa-check-circle(style="color:#FFA031;")
            | #[strong Preservación de la muestra:] manejo antes de la medición.
          li(data-aos="fade-up")
            i.fas.fa-check-circle(style="color:#FFA031;")
            | #[strong Cadena de custodia:] requisitos de identificación, etiquetado, rotulado e información de la muestra (p.34).
      .col-lg-4(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema4/13.svg" data-aos="fade-left")
    
    p.mt-5(Data-aos="fade-up") En cuanto a otros registros durante el proceso de muestreo, se refiere a aquellas observaciones que pueden ser útiles para interpretar los resultados dentro de los cuales se encuentra:

    .row.mt-4
      .col-lg-4.mb-4.mb-lg-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema4/13.svg" data-aos="fade-right")
      .col-lg-8(style="place-self:center;")
        ul.lista-ul--separador.mb-0
          li(data-aos="fade-up")
            i.fas.fa-check-circle(style="color:#FFA031;")
            | Nombre y ubicación del sitio.
          li(data-aos="fade-up")
            i.fas.fa-check-circle(style="color:#FFA031;")
            | Latitud, longitud y altitud del sitio.
          li(data-aos="fade-up")
            i.fas.fa-check-circle(style="color:#FFA031;")
            | Fecha y hora de toma de muestra.
          li(data-aos="fade-up")
            i.fas.fa-check-circle(style="color:#FFA031;")
            | Condiciones del tiempo en el momento de tomar la muestra y recientes como si lloviera en el sector antes de la muestra.
          li(data-aos="fade-up")
            i.fas.fa-check-circle(style="color:#FFA031;")
            | Condiciones del sitio: si se ve contaminado, hay peces o plantas, algas entre otros.
          li(data-aos="fade-up")
            i.fas.fa-check-circle(style="color:#FFA031;")
            | Color y olor del agua.
          li(data-aos="fade-up")
            i.fas.fa-check-circle(style="color:#FFA031;")
            | Claridad del agua (turbia o lodosa).
          li(data-aos="fade-up")
            i.fas.fa-check-circle(style="color:#FFA031;")
            | Cualquier otra que sea significativa (INS, 2011, p. 34-35).
    
    p.mt-5.text-center.fw-bold(data-aos="fade-up") Con esta información, ya se puede iniciar el proceso de programación de la toma de la muestra de agua potable.





      
</template>

<script>
export default {
  name: 'Tema4',
  components: {},
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
<style lang="sass">
.cajon1.cajon.color-secundario:before
  background-color: #12263F
.cont_arrow2:before
  content: ''
  position: absolute
  width: 0
  height: 0
  top: 9%
  left: -99px
  border-top: 100px solid transparent
  border-bottom: 100px solid transparent
  border-right: 100px solid #EDEDED
.linea-tiempo-d__item--selected .linea-tiempo-d__item__content
  background-color: #EDF7FE
.lista-ol--separador li, .lista-ul--separador li
  border-bottom: dotted 2px #A6A6A6
.tabs-c__content-item
  background-color: #F6F6F6
.tabs-c__header
  margin-bottom: 0px
.tabs-c.color-primario .tabs-c__tab--active
  font-weight: bold
.bloque__1.bloque-texto-g.color-acento-contenido
  background-color: #4DB1F0
</style>
