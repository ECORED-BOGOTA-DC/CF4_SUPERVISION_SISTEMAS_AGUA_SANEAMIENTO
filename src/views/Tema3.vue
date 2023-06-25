<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-right")
      .titulo-principal__numero
        span 3
      h1 Captación de agua

    .row
      .col-lg-4.mb-4.mb-lg-0(style="place-self:center;")
        figure.text-center
          img(src="@/assets/curso/tema3/1.png" data-aos="fade-right" style="max-width:450px;display:inline;" alt="Imagen decorativa")
      .col-lg-8(style="place-self:center;")
        p(data-aos="fade-up") Una de las primeras etapas en el proceso de potabilización de agua consiste en la captación de esta a través de diferentes sistemas que son seleccionados y configurados, acorde a las características propias de la fuente de captación y requerimientos de suministro.
        .cajon.color-acento-botones.p-4.mt-4(style="background-color:#98D8D7;")
          p.mb-0(data-aos="fade-up") Esto involucra una serie de conocimientos necesarios para abordar de la manera más efectiva cada actividad, que van desde algunos principios básicos de hidráulica, hasta reconocer los sistemas de captación y su funcionamiento.
    
    Separador.mt-5

    .titulo-segundo
      h2#t_3_1 3.1 Conceptos básicos de hidráulica
    
    p(data-aos="fade-up") A continuación, se presentan los conceptos más relevantes relacionados con la hidráulica. Lo invitamos a revisar la siguiente presentación:

    AcordionA.mt-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
      .row.col-xl-11.m-auto(titulo="1. Sistemas de unidades y conversión")
        .col-lg-7.mb-4.mb-lg-0
          p Uno de los puntos de partida para trabajar cualquier problema que involucre magnitudes es definir el sistema de unidades; la referencia estándar para unidades de medida a nivel mundial es el Sistema Internacional de Unidades [SI], que parte del uso de las magnitudes fundamentales: longitud, tiempo, masa, fuerza, y sus unidades bases, que son respectivamente: metro, segundo, kilogramo y newton; a partir de las cuales se derivan las demás (Mott, 2006, p. 4).
        .col-lg-5
          figure.text-center
            img(src='@/assets/curso/tema3/2.png' style="max-width:450px;display:inline;" alt="Imagen decorativa")
      .row.col-xl-11.m-auto(titulo="2. Sistema internacional de unidades")
        .col-lg-7.mb-4.mb-lg-0
          p Además del sistema internacional de unidades, es posible emplear otras unidades y sistemas de medidas, como el sistema tradicional de unidades de Estados Unidos, también conocido como Sistema gravitacional de unidades inglesas, en el que las unidades para las magnitudes de longitud, tiempo, fuerza y masa son respectivamente el pie, segundo, libra y slug (Mott, 2006, p. 5).
          p.mt-4 Para la operación matemática de diferentes magnitudes se usan factores de conversión, pasar de múltiplos a submúltiplos y viceversa.
        .col-lg-5
          figure.text-center
            img(src='@/assets/curso/tema3/3.png' style="max-width:450px;display:inline;" alt="Imagen decorativa")
      .row.col-xl-11.m-auto(titulo="3. Conversión de unidades")
        .col-lg-7.mb-4.mb-lg-0
          p La conversión de unidades se logra mediante el uso de factores de conversión, que indican la relación entre una cantidad expresada en diferentes unidades, como por ejemplo:
          figure.mt-3.text-center
            img(src="@/assets/curso/tema3/4.svg" style="max-width:160px;display:inline;" alt="Imagen decorativa")
          p.mt-4 Generalmente se emplean tablas para conocer los factores de conversión, sin embargo, hoy es posible el uso de aplicaciones web o aplicaciones que se pueden descargar en los dispositivos móviles, y presentan datos aceptables.
        .col-lg-5
          figure.text-center
            img(src='@/assets/curso/tema3/5.png' style="max-width:450px;display:inline;" alt="Imagen decorativa")
      .row.col-xl-11.m-auto(titulo="4. Ejemplo de conversión de unidades")
        .col-lg-7.mb-4.mb-lg-0
          p #[strong Ejemplo 1.] Al abrir una válvula ubicada en una tubería se permite el paso de 1,2 L/s. ¿Cuántos m#[sup 3]/día pasan por el sistema?
          figure.mt-3.col-8.m-auto.text-center
            img(src="@/assets/curso/tema3/6.svg" style="max-width:450px;display:inline;" alt="Imagen decorativa")
          p.mt-4 #[strong Ejemplo 2.] Un operario abre una válvula durante 8 horas al día, permitiendo el flujo de 1,2 L/s. ¿Cuántos m#[sup 3]/día pasan por el sistema?
          figure.mt-3.col-8.m-auto.text-center
            img(src="@/assets/curso/tema3/7.svg" style="max-width:450px;display:inline;" alt="Imagen decorativa")
          .p-3.bg-white.mt-4
            p.mb-0 Nótese que en el ejemplo dos fue necesario incluir un factor de conversión adicional, ya que en este caso, la válvula solo abre una fracción del tiempo (8 horas).
        .col-lg-5
          figure.text-center
            img(src='@/assets/curso/tema3/8.png' style="max-width:450px;display:inline;" alt="Imagen decorativa")
      .row.col-xl-11.m-auto(titulo="5. Presión")
        .col-lg-12
          p.d-inline Se puede definir la presión como la cantidad de fuerza que se ejerce sobre un área determinada. Esto se representa mediante la ecuación #[img(src="@/assets/curso/tema3/9.svg" style="max-width:60px;display:inline;")] sus unidades son N/m (Mott, 2006, p. 12).
          p.mt-3 Existen dos principios conocidos como leyes de Pascal, que enuncian lo siguiente:
          .row.mt-4
            .col-lg-6.mb-4.mb-lg-0(style="place-self:center;")
              p La presión actúa de modo uniforme en todas las direcciones de un volumen pequeño de fluido.
              figure.mt-3.text-center
                img(src='@/assets/curso/tema3/10.png' style="max-width:450px;display:inline;" alt="Presión")
            .col-lg-6(style="place-self:center;")
              p En un fluido confinado por fronteras sólidas, la presión actúa de manera perpendicular a la pared.
              figure.mt-3.text-center
                img(src='@/assets/curso/tema3/11.png' style="max-width:450px;display:inline;" alt="Fronteras solidas")
      .row.col-xl-11.m-auto(titulo="6. Tasa de flujo")
        .col-lg-7.mb-4.mb-lg-0
          p La tasa de flujo permite expresar la cantidad de fluido en función del tiempo. Mott (2006) indica que se pueden emplear tres términos diferentes:
          p.mt-4 El flujo volumétrico (Q) es el volumen de un fluido que circula en una sección por unidad de tiempo. Se calcula con la siguiente ecuación:
          figure.mt-3.col-10.m-auto.text-center
            img(src="@/assets/curso/tema3/51.svg" style="max-width:75px;display:inline;" alt="Imagen decorativa")
          p.mt-4 Donde #[strong A] es el área de la sección y #[strong v] es la velocidad promedio del fluido. En el SI sus unidades son m#[sup 3]/s.
        .col-lg-5
          figure.text-center
            img(src='@/assets/curso/tema3/12.png' style="max-width:450px;display:inline;" alt="Imagen decorativa")
      .row.col-xl-11.m-auto(titulo="7. Flujo en peso")
        .col-lg-7.mb-4.mb-lg-0
          p El flujo en peso (W) es el peso de un fluido que circula en una sección por unidad de tiempo. Se calcula con la siguiente ecuación:
          figure.mt-3.col-10.m-auto.text-center
            img(src="@/assets/curso/tema3/13.svg" style="max-width:160px;display:inline;" alt="Imagen decorativa")
          p.mt-4 Donde #[em y] es el peso específico del fluido. Sus unidades son N/s.
          p.mt-4 El flujo másico (M) es la masa de un fluido que circula en una sección por unidad de tiempo.
          figure.mt-3.col-10.m-auto.text-center
            img(src="@/assets/curso/tema3/14.svg" style="max-width:160px;display:inline;" alt="Imagen decorativa")
          p.mt-4 Donde #[strong #[em p]] es la densidad del fluido. Sus unidades son kg/s.
        .col-lg-5
          figure.text-center
            img(src='@/assets/curso/tema3/15.png' style="max-width:450px;display:inline;" alt="Imagen decorativa")
    
    .row.mt-5
      .col-lg-4.mb-4.mb-lg-0(style="place-self:center;")
        figure.text-center
          img(src='@/assets/curso/tema3/16.png' data-aos="fade-right" style="max-width:450px;display:inline;" alt="Imagen decorativa")
      .col-lg-8(style="place-self:center;")
        .row
          .col-lg-9.mb-md-0.mb-4.col-md-8(style="place-self:center;")
            p.mb-0(data-aos="fade-up") Por otra parte, están los conceptos de densidad, gravedad y peso específico. Estas tres propiedades se relacionan al volumen del fluido.  En el caso de la densidad, indica la relación entre la masa de una sustancia y su volumen. Generalmente la densidad se denota con la letra griega #[em p] (rho), y su ecuación es:
          .col-lg-3.col-md-4(style="place-self:center;")
            figure.text-center
              img(src='@/assets/curso/tema3/17.svg' data-aos="fade-left" style="max-width:450px;display:inline;" alt="Imagen decorativa")
        .row.mt-5
          .col-lg-9.mb-md-0.mb-4.col-md-8(style="place-self:center;")
            p.mb-0(data-aos="fade-up") Las unidades de la densidad en el SI son el kg/m3. La densidad del agua varía en función de la temperatura, y alcanza su mayor valor a los 4 °C.
            p.mt-4.mb-0(data-aos="fade-up") Recordemos que relacionado a la masa se encuentra el peso. Es así como el peso específico indica la cantidad de peso por unidad de volumen de la sustancia, así:
          .col-lg-3.col-md-4(style="place-self:center;")
            figure.text-center
              img(src='@/assets/curso/tema3/18.svg' data-aos="fade-left" style="max-width:200px;display:inline;" alt="Imagen decorativa")
        p.mt-4(data-aos="fade-up") El peso específico se representa por la letra griega #[em y] (gamma), y su unidad son newtons por metro cúbico (N/m3).
        p.mt-4(data-aos="fade-up") Para el caso de la gravedad específica, usaremos como fluido de referencia el agua a 4°C, y puede definirse de dos maneras:
        .row.col-lg-10.m-auto.mt-4
          .text-center.col-lg.mb-4.mb-lg-0(style="place-self:center;")
            p(data-aos="fade-up") Es la razón de la densidad de una sustancia a la densidad del agua a 4°C.
            figure.mt-3.col-10.m-auto.text-center
              img(src='@/assets/curso/tema3/19.svg' data-aos="fade-up" style="max-width:200px;display:inline;" alt="Imagen decorativa")
          .col-lg-auto.d-none.d-lg-block
            div.h-100(style="border-right:3px #A6A6A6 dotted;")
          .text-center.col-lg(style="place-self:center;")
            p(data-aos="fade-up") Es la razón del peso específico de una sustancia al peso específico del agua a 4°C.
            figure.mt-3.col-10.m-auto.text-center
              img(src='@/assets/curso/tema3/20.svg' data-aos="fade-up" style="max-width:200px;display:inline;" alt="Imagen decorativa")
    
    p.mt-5(data-aos="fade-up") Además de los conceptos básicos tratados anteriormente, es necesario revisar en qué consiste el principio de continuidad, el concepto de altura piezométrica y el principio de Conservación de la energía - Ecuación de Bernoulli. Revíselo a continuación:

    .p-3.mt-5(style="background-color:#3076B6;border-radius:0px 40px 0px 40px;max-width:400px;" data-aos="fade-up")
      h3.mb-0.text-white.text-center Principio de continuidad

    .row.mt-4
      .col-lg-8.mb-4.mb-lg-0(style="place-self:center;")
        .row.pb-3(style="border-bottom:3px #A6A6A6 dotted;")
          .col-lg-9.col-md-8.mb-md-0.mb-4(style="place-self:center;")
            p.mb-0(data-aos="fade-up") Considere un ducto como el de la imagen, en el que se cuenta con dos secciones de diferente diámetro, que son atravesadas por un fluido. El flujo es constante, es decir, que en cualquier sección la cantidad de fluido que circula en determinado tiempo es similar (no sale, ingresa o se almacena fluido). Es posible expresar lo descrito en términos de flujo másico así (Mott,2006, p. 156):
          .col-lg-3.col-md-4(style="place-self:center;")
            figure.mt-3.col-10.m-auto.text-center
              img(src='@/assets/curso/tema3/21.svg' data-aos="fade-up" style="max-width:450px;display:inline;" alt="Imagen decorativa")
        .row.pb-3.pt-3(style="border-bottom:3px #A6A6A6 dotted;")
          .col-lg-9.col-md-8.mb-md-0.mb-4(style="place-self:center;")
            p.mb-0(data-aos="fade-up") Retomando el tema de flujo másico, este puede expresarse como el producto de la densidad por el flujo volumétrico #[strong M=#[em p]Q], por lo tanto, 
          .col-lg-3.col-md-4(style="place-self:center;")
            figure.mt-3.col-10.m-auto.text-center
              img(src='@/assets/curso/tema3/22.svg' data-aos="fade-up" style="max-width:450px;display:inline;" alt="Imagen decorativa")
        .row.pb-3.pt-3(style="border-bottom:3px #A6A6A6 dotted;")
          .col-lg-9.col-md-8.mb-md-0.mb-4(style="place-self:center;")
            p.mb-0(data-aos="fade-up") Si la densidad del fluido se mantiene constante es posible reducir la ecuación a la expresión #[strong Q1 = Q2]. Como #[strong Q = Av], entonces finalmente la ecuación puede ser expresada como:
          .col-lg-3.col-md-4(style="place-self:center;")
            figure.mt-3.col-10.m-auto.text-center
              img(src='@/assets/curso/tema3/23.svg' data-aos="fade-up" style="max-width:450px;display:inline;" alt="Imagen decorativa")
      .col-lg-4(style="place-self:center;")
        figure.mt-3.col-10.m-auto.text-center
          img(src='@/assets/curso/tema3/24.svg' data-aos="fade-left" style="max-width:450px;display:inline;" alt="Imagen decorativa")
    
    p.mt-4(data-aos="fade-up") Esta ecuación resume el principio de continuidad y permite calcular, por ejemplo, la velocidad del fluido en un sistema de conducción cerrado, como una tubería.

    .p-3.mt-5(style="background-color:#3076B6;border-radius:0px 40px 0px 40px;max-width:400px;" data-aos="fade-up")
      h3.mb-0.text-white.text-center Altura piezométrica
    
    p.mt-4(data-aos="fade-up") Corresponde a la altura o nivel que alcanzará el agua en un tubo piezométrico. Si se suman las alturas en cada punto, se obtiene la línea piezométrica, la cual coincide con la línea de energía del fluido. Lo anterior se observa en la siguiente imagen:

    .col-lg-6.m-auto.mt-5
      figure.text-center
        img(src="@/assets/curso/tema3/25.svg" data-aos="zoom-in-up" style="max-width:450px;display:inline;" alt="Línea piezométrica")
    
    .p-3.mt-5(style="background-color:#3076B6;border-radius:0px 40px 0px 40px;max-width:550px;" data-aos="fade-up")
      h3.mb-0.text-white.text-center Conservación de la energía - Ecuación de Bernoulli

    .row.mt-4
      .col-lg-8.mb-4.mb-lg-0(style="place-self:center;")
        p.mb-0(data-aos="fade-up") El movimiento de un fluido a través de un sistema se encuentra asociado a la energía que este posee, dependiendo así de tres variables: velocidad, la presión del sistema y la elevación. A partir de estas variables, el matemático Daniel Bernoulli, en 1738, plantea un teorema que involucra estas tres formas de energía mediante la siguiente ecuación (Mott, 2006, p. 156):
      .col-lg-4(style="place-self:center;")
        figure.text-center
          img(src="@/assets/curso/tema3/26.svg" data-aos="fade-left" style="max-width:450px;display:inline;" alt="Imagen decorativa")
    .row.mt-5
      .col-lg-8.mb-4.mb-lg-0(style="place-self:center;")
        p.mb-0(data-aos="fade-up") Esta ecuación es conocida como la ecuación de Bernoulli y cada término es una forma de energía, como ya se mencionó. Sin embargo, se debe tener en cuenta que debido a la unidad resultante (m), estos tres términos pueden ser interpretados como altura sobre un nivel de referencia. Mott (2006) indica que, en específico,
        ul.fa-ul.mt-3
          li(data-aos="fade-up")
            i.fas.fa-check-circle.fa-li(style="color:#FFA031;")
            | P/#[em y] es la carga de presión.
          li(data-aos="fade-up")
            i.fas.fa-check-circle.fa-li(style="color:#FFA031;")
            | #[em z] es la carga de elevación.
          li(data-aos="fade-up")
            i.fas.fa-check-circle.fa-li(style="color:#FFA031;")
            | v#[sup 2]/2g es la carga de velocidad.
        p.mt-3(data-aos="fade-up") A la suma de estos tres términos se les conoce como carga total.
      .col-lg-4(style="place-self:center;")
        figure.text-center
          img(src="@/assets/curso/tema3/27.png" data-aos="fade-left" style="max-width:450px;display:inline;" alt="Imagen decorativa")
    
    .p-3.mt-5(style="background-color:#3076B6;border-radius:0px 40px 0px 40px;max-width:450px;" data-aos="fade-up")
      h3.mb-0.text-white.text-center Aplicación de la ecuación de Bernoulli
    
    .row.mt-4
      .col-lg-4.mb-4.mb-lg-0(style="place-self:center;")
        figure.text-center
          img(src="@/assets/curso/tema3/28.png" data-aos="fade-right" style="max-width:450px;display:inline;" alt="Imagen decorativa")
      .col-lg-8(style="place-self:center;")
        p(data-aos="fade-up") La aplicación de esta ecuación permite determinar los valores de carga de presión, carga de elevación y variación en la carga de velocidad, a medida que este circula a través del sistema. Sin embargo, las siguientes son limitaciones que se deben tener en cuenta:
        .col-lg-11.m-auto.mt-3
          ul.lista-ul--separador.mb-0
            li.d-flex(data-aos="fade-up")
              i.fas.fa-check-circle(style="color:#FFA031;")
              p.mb-0 Es válida solo para fluidos incompresibles, pues supone que el peso específico (#[em y]) no varía entre las dos secciones de interés.
            li.d-flex(data-aos="fade-up")
              i.fas.fa-check-circle(style="color:#FFA031;")
              | No puede haber dispositivos entre las dos secciones que ingresen o retiren energía. La ecuación establece que la energía en el fluido es constante.
            li.d-flex(data-aos="fade-up")
              i.fas.fa-check-circle(style="color:#FFA031;")
              | No puede haber transferencia de calor hacia el fluido o fuera de este.
            li.d-flex(data-aos="fade-up")
              i.fas.fa-check-circle(style="color:#FFA031;")
              | No puede haber pérdida de energía por fricción.
    
    Separador.mt-5

    .titulo-segundo
      h2#t_3_2 3.2 Parámetros de calidad del agua
    
    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/29.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0(data-aos="fade-right") Existen diversos parámetros que son empleados para definir la calidad del agua, acorde al uso para el cual se destinará. Así mismo, se encuentran los estándares, que consisten en reglas o niveles de tolerancia fijados por las autoridades ambientales, y con base en los cuales se verifica el cumplimiento o no de los parámetros evaluados (García, 1998, p. 159).
    
    p.mt-5(data-aos="fade-up") Es así como la Resolución 2115 de 2007, establece los valores permisibles que deben ser tenidos en cuenta en el agua para consumo humano. A continuación, se presentan algunos aspectos relevantes de las características establecidas en la resolución anterior, a partir de lo expuesto por la OMS en su publicación Guías para la calidad del agua de consumo humano (OMS, 2011, pp. 257-268):

    .row.mt-5
      .col-lg-4.mb-4.mb-lg-0(style="place-self:center;")
        figure.text-center
          img(src="@/assets/curso/tema3/30.svg" data-aos="fade-right" style="max-width:450px;display:inline;" alt="Imagen decorativa")
      .col-lg-8(style="place-self:center;")
        LineaTiempoD.color-acento-contenido
          div(numero="1" titulo="Color y olor") 
            p El sabor y el olor pueden tener su origen en contaminantes químicos naturales, orgánicos e inorgánicos, y de fuentes o procesos biológicos (ej., microorganismos acuáticos), o en la contaminación debida a sustancias químicas sintéticas, o pueden ser el resultado de la corrosión o del tratamiento del agua (ej., la cloración). El sabor y el olor también pueden desarrollarse durante el almacenamiento y la distribución, como resultado de la actividad microbiana.
            p.mt-4  Algunas sustancias que constituyen un peligro para la salud tienen efectos sobre el sabor, olor o aspecto del agua de uso y consumo humano, que normalmente conllevarían al rechazo del agua en concentraciones considerablemente menores que aquellas que representan un problema para la salud.
          div(numero="2" titulo="Microorganismos") 
            p La mayoría de las bacterias patógenas que pueden ser transmitidas por el agua infectan el tracto gastrointestinal y son excretadas en las heces de las personas o animales infectados. No obstante, hay también algunas bacterias patógenas transmitidas por el agua, como Legionella, Burkholderia pseudomallei y micobacterias atípicas, que pueden crecer en el agua y en el suelo. 
            p Las  vías de transmisión de estas bacterias incluyen la inhalación y el contacto (al bañarse) y pueden producir infecciones en el tracto respiratorio, lesiones en la piel o en el cerebro.
          .row(numero="3" titulo="Sustancias químicas") 
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              p.mb-0 La mayoría de las sustancias químicas presentes en el agua de consumo humano son potencialmente peligrosas para la salud solo después de una exposición prolongada (durante años, más que meses).
            .col-lg-5(style="place-self:center;")
              figure.text-center
                img(src="@/assets/curso/tema3/31.png" style="max-width:450px;display:inline;" alt="Imagen decorativa")
    
    Separador.mt-5

    .titulo-segundo
      h2#t_3_3 3.3 Aforo de caudal
    
    p(data-aos="fade-up") Cuando se abordó el tema de conceptos básicos de hidráulica, se mencionó que la cantidad de un fluido que  atraviesa una sección en un determinado tiempo es conocido como la tasa de flujo. En particular, el flujo volumétrico (Q) es el volumen de un fluido que circula en una sección por unidad de tiempo, y sus unidades son el m3/s.

    .row.mt-4
      .col-lg-6.mb-4.mb-lg-0(style="place-self:center;")
        p(data-aos="fade-up") Para la medición del caudal es posible aplicar diferentes métodos que pueden ser seleccionados en función de las características del flujo, tecnología disponible y exactitud de los datos requerida.
        p.mt-4(data-aos="fade-up") De acuerdo al protocolo de monitoreo del agua (Ideam, 2017, p.178), 
        p(data-aos="fade-up") "Para la medición del caudal en una corriente se han desarrollado diversos métodos de aforo que se aplican según el tamaño del cauce, la magnitud del caudal, las características hidráulicas del flujo, la necesidad de contar con datos inmediatos o a corto plazo y, en general, las dificultades para realizar el aforo, entre otros".
      .col-lg-3.mb-4.mb-lg-0(style="place-self:center;")
        .h-100.p-4(style="background-color:#A5D8F7;border-radius:25px;")
          p.fw-bold(data-aos="fade-up") Entre los métodos se encuentran:
          p.mb-0.d-flex(data-aos="fade-up") #[strong A.] &nbsp; Método área-velocidad.
          p.mb-0.d-flex(data-aos="fade-up") #[strong B.] &nbsp; Método volumétrico.
          p.mb-0.d-flex(data-aos="fade-up") #[strong C.] &nbsp; Método con trazadores (dilución).
          p.mb-0.d-flex(data-aos="fade-up") #[strong D.] &nbsp; Estructuras aforadas.
      .col-lg-3(style="place-self:center;")
        figure.text-center
          img(src="@/assets/curso/tema3/32.png" data-aos="fade-left" style="max-width:450px;display:inline;" alt="Imagen decorativa")

    .p-3.mt-5(style="background-color:#3076B6;border-radius:0px 40px 0px 40px;max-width:400px;" data-aos="fade-up")
      h3.mb-0.text-white.text-center A. Método área velocidad
    
    .row.mt-4
      .col-lg-8.mb-4.mb-lg-0(style="place-self:center;")
        p(data-aos="fade-up") Dado que el caudal es función del área de la sección ocupada por el agua y la velocidad media del flujo, este procedimiento se basa en la determinación de estas variables. Este sistema de aforo es el de mayor uso y requiere que el flujo tenga un comportamiento laminar y que las líneas de flujo sean normales a la sección transversal de aforo.
        p.mt-4(data-aos="fade-up") El caudal en una corriente de agua es función del área de la sección de aforos y de la velocidad media del flujo y se obtiene mediante el producto de estas dos variables:
        figure.text-center.mt-4.text-center
          img(src="@/assets/curso/tema3/34.svg" data-aos="fade-up" style="max-width:200px;display:inline;" alt="Imagen decorativa")
      .col-lg-4(style="place-self:center;")
        figure.text-center
          img(src="@/assets/curso/tema3/33.png" data-aos="fade-left" style="max-width:450px;display:inline;" alt="Imagen decorativa")
    
    .row.mt-5
      .col-lg-6.mb-4.mb-lg-0(style="place-self:center;")
        .cajon.color-secundario.p-4.cajon1(style="background-color:#F6F6F6;")
          p.mb-0(data-aos="fade-up") Si la geometría del perfil de la sección de aforos no se modifica, la velocidad mantiene su comportamiento horizontal y en profundidad; por el contrario, si la geometría cambia, se altera la relación nivel - área, en consecuencia, la velocidad cambia su comportamiento.
      .col-lg-6(style="place-self:center;")
        p.fw-bold(data-aos="fade-up") El método de área-velocidad se realiza con diferentes métodos de aforo:
        ul.fa-ul.mt-3
          li(data-aos="fade-up")
            i.fas.fa-check-circle.fa-li(style="color:#FFA031;")
            | Molinete Hidrométrico (vadeo, suspensión, angular, bote cautivo, lancha en movimiento).
          li(data-aos="fade-up")
            i.fas.fa-check-circle.fa-li(style="color:#FFA031;")
            | Aforo con flotadores.
          li(data-aos="fade-up")
            i.fas.fa-check-circle.fa-li(style="color:#FFA031;")
            | Aforo ADCP (#[em Acoustic Doppler Current Profiler]).
    
    p.mt-5(data-aos="fade-up") La medición de caudales a través del método área-velocidad, se determina a través de la selección de número de vértices, determinación del ancho, determinación de la profundidad, cálculo del área, medición de la velocidad, cálculo del área y caudal. Lo anterior se puede representar mediante la siguiente imagen:
        
    .col-lg-8.m-auto.mt-5
      .titulo-sexto.color-acento-botones
        h5.d-block Figura 4
        span Área de la sección transversal
      figure
        img(src="@/assets/curso/tema3/35.png" data-aos="zoom-in-up" alt="Área de la sección transversal")
        figcaption.p-3.text-center.fw-normal.mt-4(style="background-color:#E8E8E8;") Fuente: Organización Meteorológica Mundial, OMM. (2011). Vista del área de una cuenca por sección transversal. [Ilustración]. p. 1.5-5.
    
    p.mt-5(data-aos="fade-up") La profundidad del flujo en la sección transversal se mide en las verticales mediante una varilla o hilo de sondeo. Al tiempo que se mide la profundidad, se efectúan observaciones de la velocidad mediante un molinete en uno o más puntos de la vertical. Las anchuras, profundidades y velocidades medidas permiten calcular el caudal para cada segmento de la sección transversal. La suma de estos caudales parciales será el caudal total (OMM, 2011).

    LineaTiempoD.color-acento-contenido.mt-5
      div(numero="1" titulo="Molinete hidrométrico") 
        p Teniendo en cuenta las diferentes alternativas de medir el caudal, se determina el tipo de aforo con molinete hidrométrico (vadeo, suspensión, angular, bote cautivo, lancha en movimiento) que mejor se ajuste a las condiciones existentes, en el momento de la campaña de monitoreo, específicamente la magnitud de la profundidad, el ancho, la velocidad, la disposición de estructuras de apoyo como puentes o tarabitas y el tipo de régimen de caudales predominante.
      div(numero="2" titulo="Aforo por vadeo") 
        p  Se utiliza cuando la profundidad es menor de un metro (< 1 m) y la velocidad de la corriente menor de un metro por segundo (< 1 m/s). Estas condiciones permiten que los operarios y los equipos se metan al cauce con seguridad, garantizando de esta manera que la medición se realice con comodidad y sin riesgo.
      div(numero="3" titulo="Aforo por suspensión ") 
        p  Cuando las condiciones del flujo (profundidad y/o velocidad) presentan amenaza para los operarios y equipos, es necesario realizar las mediciones desde un puente o una tarabita. Aquí los equipos van suspendidos desde un malacate o torno, a través de un cable coaxial, que adicionalmente sirve para medir la profundidad en las diferentes abscisas de medición.
      div(numero="4" titulo="Aforo en bote cautivo") 
        p Aplicable en ríos o canales medianos, donde es posible tender una manila o cable de orilla a orilla, que sirve de apoyo a la embarcación para contrarrestar el empuje de la corriente.
      div(numero="5" titulo="Aforo con flotadores") 
        p  Se utiliza cuando se requiere medir en forma rápida el caudal en una corriente que presenta una lámina de pocos centímetros de profundidad, cuando se esté en presencia de grandes cantidades de material en suspensión, o cuando deba efectuarse una medición del caudal en un período muy breve. Para lo cual se mide la velocidad superficial a lo ancho del cauce, utilizando flotadores especialmente diseñados y suministrados para este efecto.
        .col-lg-8.m-auto.mt-5
          .titulo-sexto.color-acento-botones
            h5.d-block Figura 5
            span Medición de la velocidad de flujo
          figure
            img(src="@/assets/curso/tema3/36.png" data-aos="zoom-in-up" alt="Medición de la velocidad de flujo")
            figcaption.p-3.text-center.fw-normal.mt-4(style="background-color:#fff;") Fuente: Protocolo de monitoreo y seguimiento del agua 2021
      div(numero="6" titulo="Aforo ADCP (<em>Acoustic Doppler Current Profiler</em>)") 
        p  Se utiliza para medir el caudal en ríos grandes o pequeños, sin rocas grandes que permitan el desplazamiento horizontal del equipo para medir el caudal.
        p.mt-4 Los instrumentos ADCP, basados en el efecto Doppler, pueden instalarse en una embarcación en movimiento. El instrumento mide simultáneamente la velocidad y profundidad del agua y la trayectoria de la embarcación para calcular el caudal. Este método permite calcular el caudal parcial a medida que la embarcación atraviesa el río. El resultado de una medición no es suficiente para proporcionar un valor exacto del flujo/caudal; únicamente proporciona una imagen instantánea del flujo. 
        p.mt-4 Para conseguir un valor más exacto del caudal del río es importante calcular el promedio de varias travesías. Para calcular el caudal en un emplazamiento se recomienda efectuar, como mínimo, cuatro travesías (OMM, 2011)
        p.mt-4 El ADCP utiliza el efecto Doppler, transmitiendo sonido a una frecuencia fija y escuchando los ecos retornados por los reflectores presentes en el agua, como pequeñas partículas o plancton, que reflejan el sonido hacia el ADCP, los cuales se mueven a la misma velocidad horizontal del agua. La siguiente imagen representa una medición mediante el método ADCP:
        .col-lg-8.m-auto.mt-5
          .titulo-sexto.color-acento-botones
            h5.d-block Figura 6
            span Configuración típica de una medición con un instrumento de efecto Doppler
          figure
            img(src="@/assets/curso/tema3/37.png" data-aos="zoom-in-up" alt="Configuración típica de una medición con un instrumento de efecto Doppler")
            figcaption.p-3.text-center.fw-normal.mt-4(style="background-color:#fff;") Fuente: OMM. (2011). pp.1.5-21. Medición con instrumento doppler. [Ilustración].
        p.mt-4 Cuando el sonido enviado por el ADCP llega a los reflectores, este se desplaza a una mayor frecuencia debido al efecto Doppler; este desplazamiento frecuencial es proporcional a la velocidad relativa entre el ADCP y los reflectores. Parte de este sonido desplazado es reflejado hacia el ADCP, donde se recibe desplazado una segunda vez. Los archivos generados por el equipo pueden llevarse las gráficas a impresión a Excel mediante el software del equipo, así como la tabla de trayectos para plotear el aforo.
    
    .p-3.mt-5(style="background-color:#3076B6;border-radius:0px 40px 0px 40px;max-width:400px;" data-aos="fade-up")
      h3.mb-0.text-white.text-center B. Método volumétrico
    
    p.mt-4(data-aos="fade-up") Cuando se trate de medir caudales pequeños en condiciones que no permitan el uso del molinete, o no se cuente con este equipo, se utiliza el aforo volumétrico, que consiste sencillamente en recolectar en un recipiente previamente calibrado, un volumen de agua conocido y tomar con precisión el tiempo de recolección, preferiblemente con cronómetro.
    
    .cont_gradiente1.mt-5
      .col-lg-10.m-auto
        .titulo-sexto.color-acento-botones
          h5.d-block Figura 7
          span Aforo volumétrico
        figure
          img(src="@/assets/curso/tema3/38.svg" data-aos="zoom-in-up" alt="Aforo volumétrico")
          figcaption.p-3.text-center.fw-normal.mt-4(style="background-color:#E8E8E8;") Fuente: Ideam. (2006). #[em Citado en Protocolo de monitoreo del agua]. (2017). Método aforo volumétrico. p. 184. [Ilustración].
    
    .cajon.color-acento-contenido.p-4.mt-5(style="background-color:#E0F4FE;")
      p.mb-0(data-aos="fade-up") Para tal efecto, se recurre a recipientes de uso común como un balde o caneca que tenga registros de volumen; en otros casos, el aforo se realiza en tanques de mayor tamaño que tengan dimensiones precisas, de tal manera que mediante la medición de un diferencial de nivel se determina un incremento de volumen y tomando el tiempo de incremento de volumen se puede calcular directamente el caudal que lleva la corriente o el canal (Ideam, 2007, p. 43).
    
    .p-3.mt-5(style="background-color:#3076B6;border-radius:0px 40px 0px 40px;max-width:400px;" data-aos="fade-up")
      h3.mb-0.text-white.text-center C. Método con trazadores (dilución)

    .row.mt-4
      .col-lg-8.mb-4.mb-lg-0(style="place-self:center;")
        p(data-aos="fade-up") La medición del caudal mediante este método está basada en la determinación del grado de dilución en el agua, de la corriente de una solución del trazador vertida en ella. Este método se recomienda utilizar para secciones de aforo donde se encuentren grandes turbulencias y remolinos, régimen torrencial, altas pendientes, poca profundidad, lechos inestables y líneas de flujo desordenadas. Los aforos con trazadores, también llamados aforos químicos, permiten conocer el caudal a partir de la variación de concentración de una sustancia inyectada en el cauce que permite estudiar su comportamiento y evolución (Ideam, 2017, p. 184).
        .cajon.color-secundario.p-4.cajon1.mt-4(style="background-color:#F6F6F6;")
          p.mb-0(data-aos="fade-up") El procedimiento consiste en inyectar un trazador en una sección de la corriente y realizar aguas abajo, a una distancia lo suficientemente lejos para que haya dilución total, mediciones de conductividad eléctrica para detectar el paso de la nube y así calcular el caudal (Ideam, 2007, p. 51).
      .col-lg-4(style="place-self:center;")
        figure.text-center
          img(src="@/assets/curso/tema3/39.png" data-aos="fade-left" style="max-width:450px;display:inline;" alt="Imagen decorativa")
    
    p.mt-4(data-aos="fade-up") Los trazadores deben cumplir con una serie de características como lo son la solubilidad, posibilidad de medición in situ, costo reducido, no contaminante, entre otros. El trazador empleado para la aplicación del método no debe estar presente en el cuerpo de agua en cantidades apreciables. Algunos de los más empleados en la práctica son el cloruro de sodio y el dicromato de sodio.

    .p-3.mt-5(style="background-color:#3076B6;border-radius:0px 40px 0px 40px;max-width:400px;" data-aos="fade-up")
      h3.mb-0.text-white.text-center D. Estructuras aforadas
    
    p.mt-4(data-aos="fade-up") Son estructuras que han sido estudiadas y calibradas en diferentes condiciones experimentales. Para cada una de ellas es posible obtener una ecuación de descarga (relación Nivel-Caudal) que permite determinar el caudal instantáneo en función de la altura de la lámina de agua con respecto a un punto de la estructura, que se mide con ayuda de una mira o un instrumento registrador. A continuación, se presentan las estructuras más utilizadas (Ideam, 2017, pp. 188-190):

    .row.mt-5(style="max-width:fit-content;" data-aos="fade-up")
      .col.p-0(style="place-self:end;")
        figure
          img(src="@/assets/curso/tema3/40.svg" alt="Imagen decorativa")
      .col-auto.p-0(style="place-self:center;border-bottom:3px #3076B6 dotted;")
        h4.mb-0.pb-1.ps-2 Vertederos &nbsp;&nbsp;&nbsp;
    
    p.mt-4(data-aos="fade-up") Son dispositivos hidráulicos, fijos o removibles, que consisten en una escotadura a través de la cual se hace circular el flujo que se quiere medir en el canal o corriente natural. La precisión del aforo depende de la velocidad de llegada a la estructura, por lo tanto, es importante remansar el agua, ampliando la sección del canal arriba del sitio para obtener velocidades mínimas (< 0,15 m/s). Existen diferentes tipos de vertederos:

    .col-xl-10.m-auto.mt-4.row
      .col-lg.mb-3.mb-lg-0.p-1
        .h-100.p-4.d-flex.flex-wrap(style="background-color:#E9F0F7;align-content: space-between;")
          h5(data-aos="fade-up") Vertedero rectangular
          p(data-aos="fade-up") Puede ocupar total o parcialmente el ancho del canal, presentando contracciones laterales que reducen la longitud efectiva de la cresta, y en consecuencia el caudal medido por pérdidas por rozamiento.
          figure.col-10.m-auto.mt-4
            img(src="@/assets/curso/tema3/41.svg" data-aos="zoom-in-up" alt="Imagen decorativa")
      .col-lg.mb-3.mb-lg-0.p-1
        .h-100.p-4.d-flex.flex-wrap(style="background-color:#FFF4E9;align-content: space-between;")
          h5(data-aos="fade-up") Vertedero trapezoidal #[br] (Cipolletti)
          p(data-aos="fade-up") Se construye con paredes laterales inclinadas en una relación 1 horizontal a 4 vertical.
          figure.col-10.m-auto.mt-4
            img(src="@/assets/curso/tema3/42.png" data-aos="zoom-in-up" alt="Imagen decorativa")
      .col-lg.mb-3.mb-lg-0.p-1
        .h-100.p-4.d-flex.flex-wrap(style="background-color:#ECF6FD;align-content: space-between;")
          h5(data-aos="fade-up") Vertedero triangular 
          p(data-aos="fade-up") Se recomienda para medición de caudales pequeños, siendo en particular conveniente para medición de caudales muy fluctuantes. Los más utilizados son los de escotadura, con ángulo de 90° y 60°.
          figure.col-10.m-auto.mt-4
            img(src="@/assets/curso/tema3/43.png" data-aos="zoom-in-up" alt="Imagen decorativa")
      figcaption.text-center.p-3.mt-4.fw-normal(style="background-color:#E8E8E8;") Nota: la instalación de vertederos para la medición del caudal presenta, entre otras ventajas, la medición instantánea, estructuras de fácil construcción, no se obstruyen fácilmente y larga vida útil.

    .row.mt-5(style="max-width:fit-content;" data-aos="fade-up")
      .col.p-0(style="place-self:end;")
        figure
          img(src="@/assets/curso/tema3/40.svg" alt="Imagen decorativa")
      .col-auto.p-0(style="place-self:center;border-bottom:3px #3076B6 dotted;")
        h4.mb-0.pb-1.ps-2 Canaletas &nbsp;&nbsp;&nbsp;
    
    p.mt-4(data-aos="fade-up") Son estructuras de gran aplicación en terrenos planos, ya que funcionan a flujo libre con pérdidas de carga pequeñas. Las canaletas más utilizadas son:

    .row.mt-4
      .col-lg-8.mb-4.mb-lg-0(style="place-self:center;")
        ul.fa-ul.mb-0
          li.mb-3.pb-2(data-aos="fade-up" style="border-bottom:2px #A6A6A6 dotted;")
            i.fas.fa-check-circle.fa-li(style="color:#FFA031;")
            | #[strong Tipo Balloffet:] se caracteriza por tener paredes paralelas y fondo plano, por lo cual se hace extremadamente fácil su construcción, posee características de solidez y resistencia a las condiciones de campo.
          li.mb-3.pb-2(data-aos="fade-up" style="border-bottom:2px #A6A6A6 dotted;")
            i.fas.fa-check-circle.fa-li(style="color:#FFA031;")
            | #[strong Medidor sin cuello (cutthroat):] consiste principalmente en una sección de entrada, una sección de salida, una garganta y un fondo aforador. El caudal (Q) del aforador se obtiene midiendo las profundidades de flujo aguas arriba Ha y aguas abajo Hb de la garganta.
          li(data-aos="fade-up")
            i.fas.fa-check-circle.fa-li(style="color:#FFA031;")
            | #[strong Canaleta Parshall:] está conformada por tres secciones principales: una sección convergente de contracción, que se localiza en su extremo aguas arriba, una garganta y una sección divergente o expansión aguas abajo. Para determinar el caudal se dispone de dos medidores de profundidad (Ha y Hb), los cuales se calibran colocando la cota "cero" coincidiendo con la cota de la cresta del canal (sección convergente). Opera como un dispositivo de cabeza sencilla con mínima pérdida de energía, por lo cual se utiliza en canales poco profundos y con escasa pendiente.
      .col-lg-4(style="place-self:center;")
        figure.text-center
          img(src="@/assets/curso/tema3/44.svg" data-aos="fade-left" style="max-width:450px;display:inline;" alt="Imagen decorativa")
    
    p.mt-5.fw-bold.text-center(data-aos="fade-up") En la siguiente tabla se presentan los equipos empleados para los métodos descritos:

    .col-lg-10.m-auto.mt-5
      .titulo-sexto.color-acento-botones
        h5.d-block Tabla 1
        span Equipos empleados según método de aforo

      .tabla-a.color-secundario.mt-4 
        table(alt="Equipos empleados según método de aforo")
          caption.text-center.p-3.mt-4.fw-normal(style="background-color:#E8E8E8;") Fuente: Ideam. (2017). Equipos para medición de caudal. p. 191. [Tabla]. #[br] #[a(href="http://documentacion.ideam.gov.co/openbiblio/bvirtual/021172/Protocoloparaelmonitoreoyseguimientodelagua.pdf" target="_blank" style="color:#3076B6;word-break:break-all;") http://documentacion.ideam.gov.co/openbiblio/bvirtual/021172/Protocoloparaelmonitoreoyseguimientodelagua.pdf]
          thead
            tr(style="background-color:#DBEFFC;")
              th.p-4(colspan="2") Métodos
              th.p-4 Equipo
              th.p-4 Tipo de equipo
          tbody
            tr
              td.p-4.text-center(rowspan="4") Métodos área velocidad
              td.p-4
                ul.lista-ul.mb-0
                  li.d-flex(data-aos="fade-up")
                    i.fas.fa-check-circle(style="color:#FFA031;")
                    | Aforo por vadeo
                  li.d-flex(data-aos="fade-up")
                    i.fas.fa-check-circle(style="color:#FFA031;")
                    | Aforo por suspensión
                  li.d-flex(data-aos="fade-up")
                    i.fas.fa-check-circle(style="color:#FFA031;")
                    | Aforo angular
                  li.d-flex(data-aos="fade-up")
                    i.fas.fa-check-circle(style="color:#FFA031;")
                    | Aforo en bote cautivo
                  li.d-flex(data-aos="fade-up")
                    i.fas.fa-check-circle(style="color:#FFA031;")
                    | Aforo en lancha en movimiento
              td.p-4 Estos métodos utilizan molinetes o mini molinetes de copo o de hélice.
              td.p-4 Electromecánico
            tr
              td.p-4 Aforo con flotadores
              td.p-4 Flotadores que miden la velocidad superficial.
              td.p-4 Mecánico
            tr
              td.p-4 Perfilador de corrientes acústico Doppler (ADCP)
              td.p-4 ACDP que calcula las componentes de la velocidad del agua en las 3 direcciones.
              td.p-4 Electrónico
            tr
              td.p-4 Método área - pendiente
              td.p-4 Se determinan la pendiente y rigurosidad, la velocidad se calcula con Manning o Chezy,
              td.p-4 Mecánico
            tr
              td.p-4 Método volumétrico
              td.p-4 Aforo volumétrico
              td.p-4 Recipiente con volumen conocido y cronómetro.
              td.p-4 Mecánico
            tr
              td.p-4 Método de dilución
              td.p-4 Inyección de la sustancia a un caudal constante inyección instantánea
              td.p-4 Aforo con sustancias químicas (trazadores).
              td.p-4 Químico
            tr
              td.p-4 Estructuras aforadoras
              td.p-4 Vertederos: rectangular, trapezoidal, triangular. #[br] Canaletas: Parshall, medidor sin cuello, tipo Balloffet.
              td.p-4 Tienen ecuaciones que permiten determinar el caudal instantáneo en función de su geometría.
              td.p-4 Mecánico o electromecánico
    
    .mt-5.col-10.m-auto
      .row(style="background-color:#F6F6F6;border-radius:20px;box-shadow:rgba(0, 0, 0, 0.1) 0px 5px 9px 0px;")
        .col-auto.pe-0.d-flex.align-items-center
          figure
            img(src="@/assets/curso/tema2/15.png" data-aos="fade-right" style="margin-left: -47px;width: 100px;max-width: 100px;" alt="Imagen decorativa")
        .col.p-0.pe-3
          .p-4.ps-2
            h4(data-aos="fade-up") Importante
            p(data-aos="fade-up") La base normativa sobre los métodos de medición de caudal es: NTC 3933. Método estándar para medición de flujo de agua en canal abierto con canaleta Parshall. 
            p.mt-4(data-aos="fade-up") #[strong NTC 3705.] Medición de flujo de agua en canal abierto con vertederos de placa fina.
            p.mt-4.mb-0(data-aos="fade-up") Para consultarla debe ingresar a biblioteca SENA, (#[a(style="color:#3076B6;word-break:break-word;" href="http://biblioteca.sena.edu.co/paginas/bases.html" target="_blank") http://biblioteca.sena.edu.co/paginas/bases.html]) Ir a ICONTEC y buscar norma NTC 3833 y allí seleccionar NTC 3933:2007 / NTC 3705:2007
    
    p.mt-5(data-aos="fade-up") De acuerdo con el Reglamento técnico del sector de Agua potable y Saneamiento básico [RAS], la captación se realiza a través de un conjunto de estructuras, equipos, materiales, procesos, operaciones y recurso humano, para tomar agua de una fuente de suministro, tratarla y distribuirla en condiciones potables.
    p.mt-4(data-aos="fade-up") Las fuentes de suministro deben permitir dotar a la población de la cantidad de agua necesaria, teniendo en cuenta criterios técnicos, económicos y ambientales. Tomando como base la información suministrada en el tema de abastecimiento de agua, es posible hacer referencia a las siguientes fuentes en función de su origen:

    .row.mt-5.justify-content-center(@mouseover="mostrarIndicador = false")
      .col-xl.mb-4.mb-xl-0.col-10
        .h-100
          figure.cont_image1
            img(src="@/assets/curso/tema3/45.png" alt="Imagen decorativa")
            .cont_image1__description.p-3
              h5.mb-5 Superficiales
              p.mb-0 Ríos, quebradas, lagos, lagunas y embalses de almacenamiento y excepcionalmente aguas lluvias y agua de mar.
      .col-xl.mb-4.mb-xl-0.col-10
        .h-100
          figure.cont_image1
            .indicador--click(v-if="mostrarIndicador")
            img(src="@/assets/curso/tema3/46.png" alt="Imagen decorativa")
            .cont_image1__description.p-3.cont_image2__description
              h5.mb-5 Subterráneas
              p.mb-0 Pueden ser subsuperficiales o subálveas y acuíferos. La explotación de las aguas subterráneas puede realizarse mediante pozos profundos, pozos excavados, manantiales o galerías de filtración.
      .col-xl.mb-4.mb-xl-0.col-10
        .h-100
          figure.cont_image1
            img(src="@/assets/curso/tema3/47.png" alt="Imagen decorativa")
            .cont_image1__description.p-3
              h5.mb-5 Atmosféricas
              p.mb-0 Constituidas principalmente por precipitaciones o lluvias.
    
    Separador.mt-5

    .titulo-segundo
      h2#t_3_4 3.4 Sistemas de captación
    
    p(data-aos="fade-up") La captación puede involucrar el uso de una sola fuente o su combinación, para lo cual es necesario tener en cuenta la calidad y continuidad de suministro. A continuación, se presenta, de manera general, algunas de las ventajas y desventajas relacionadas con el uso de las fuentes superficiales y subterráneas:

    .col-lg-10.m-auto.mt-5
      .titulo-sexto.color-acento-botones
        h5.d-block Tabla 2
        span  Ventajas y desventajas según la fuente

      .tabla-a.color-secundario.mt-4 
        table(alt="Ventajas y desventajas según la fuente")
          caption.text-center.p-3.mt-4.fw-normal(style="background-color:#E8E8E8;") Fuente: Jiménez. (s.f.). Manual para el diseño de Sistemas de agua potable y Alcantarillado sanitario.  p. 19. [Tabla]. #[br] #[a(href="https://www.uv.mx/ingenieriacivil/files/2013/09/Manual-de-Diseno-para-Proyectos-de-Hidraulica.pdf" target="_blank" style="color:#3076B6;word-break:break-all;") https://www.uv.mx/ingenieriacivil/files/2013/09/Manual-de-Diseno-para-Proyectos-de-Hidraulica.pdf]
          thead
            tr(style="background-color:#DBEFFC;")
              th.p-4 Fuente
              th.p-4 Ventajas
              th.p-4 Desventajas
          tbody
            tr
              td.p-4.fw-bold.text-center Superficiales
              td.p-4 Disponibilidad, visibles, baja dureza, limpiables.
              td.p-4 Se contaminan con facilidad, su calidad es muy variada, presentan alto color, turbiedad y contenido de materia orgánica.
            tr
              td.p-4.fw-bold.text-center Subterráneas
              td.p-4 Bajo color y turbiedad, calidad constante, baja corrosividad y contenido de materia orgánica.
              td.p-4 Alta dureza, difícil accesibilidad, no limpiables.
    
    p.mt-5.fw-bold.text-center(data-aos="fade-up") Las estructuras de captación pueden hacer uso de dos principios para su funcionamiento, así:

    .row.col-lg-10.m-auto.mt-5
      .col-lg.mb-4.mb-lg-0.pe-0(style="place-self:center;")
        .h-100.d-flex(style="background: linear-gradient(180deg, rgba(77,177,240,1) 0%, rgba(166,214,244,1) 100%);border-radius:25px 0px 0px 25px;")
          .d-flex.align-items-center(style="min-width: 20%;max-width: 20%;position: relative;margin-left:-10%;")
            img(src="@/assets/curso/tema3/48.svg" data-aos="fade-right" alt="Imagen decorativa")
          .d-flex.w-100(style="margin-left: -10%;padding-left: 10%;")
            .p-4.pt-5.pb-5
              h5(data-aos="fade-up") Bombeo
              p.mb-0(data-aos="fade-up") Empleada cuando la estructura de captación y conducción se ubican por encima de la cota de la fuente de abastecimiento.
      .col-lg.ps-0(style="place-self:center;")
        .h-100.d-flex(style="background: linear-gradient(180deg, rgba(255,160,49,1) 0%, rgba(255,192,119,1) 100%);border-radius:0px 25px 25px 0px;")
          .d-flex.w-100(style="margin-right: -10%;padding-right: 10%;")
            .p-4.pt-5.pb-5
              h5(data-aos="fade-up") Gravedad
              p.mb-0(data-aos="fade-up") Empleada cuando la estructura de captación y conducción se ubican por debajo de la cota de la fuente de abastecimiento.
          .d-flex.align-items-center(style="min-width: 20%;max-width: 20%;position: relative;margin-right:-10%;")
            img(src="@/assets/curso/tema3/49.svg" data-aos="fade-left" alt="Imagen decorativa")
    
    p.mt-5.fw-bold.text-center(data-aos="fade-up") En el título B del RAS se establecen las condiciones generales para los diferentes tipos de captación (pp. 62-65):

    .row.mt-5.pt-4.pb-4(style="border-top:2px #AFAFAF dotted;")
      .col-auto(style="place-self:center;")
        div(style="max-width: fit-content;font-size:30px;background-color:#4DB1F0;padding:.5rem 1.3rem;border-radius:50%;font-weight:bold;" data-aos="fade-right") 1
      .col(style="place-self:center;")
        h5(data-aos="fade-up") Toma lateral
        p.mb-0(data-aos="fade-up") Aconsejable en el caso de ríos caudalosos de gran pendiente y con reducidas variaciones de nivel a lo largo del período hidrológico. En este tipo de captación la estructura se debe ubicar en la orilla y a una altura conveniente sobre el fondo, teniendo en cuenta que el nivel de aguas mínimo en épocas de estiaje debe permitir captar el caudal de diseño.
    .row.pt-4.pb-4(style="border-top:2px #AFAFAF dotted;")
      .col-auto(style="place-self:center;")
        div(style="max-width: fit-content;font-size:30px;background-color:#FFA031;padding:.5rem 1.3rem;border-radius:50%;font-weight:bold;" data-aos="fade-right") 2
      .col(style="place-self:center;")
        h5(data-aos="fade-up") Toma sumergida
        p.mb-0(data-aos="fade-up") Aconsejable en el caso de cursos de agua con márgenes muy extendidos, y navegables. La toma debe instalarse de modo que no se dificulte la navegación presente en el curso de agua.
    .row.pt-4.pb-4(style="border-top:2px #AFAFAF dotted;")
      .col-auto(style="place-self:center;")
        div(style="max-width: fit-content;font-size:30px;background-color:#4DB1F0;padding:.5rem 1.3rem;border-radius:50%;font-weight:bold;" data-aos="fade-right") 3
      .col(style="place-self:center;")
        h5(data-aos="fade-up") Captación flotante con elevación mecánica
        p.mb-0(data-aos="fade-up") Si la fuente de agua superficial tiene variaciones considerables de nivel, pero conserva en aguas mínimas un caudal o volumen importante, por economía debe proyectarse la captación sobre una estructura flotante anclada al fondo o a una de las orillas.
    .row.pt-4.pb-4(style="border-top:2px #AFAFAF dotted;")
      .col-auto(style="place-self:center;")
        div(style="max-width: fit-content;font-size:30px;background-color:#FFA031;padding:.5rem 1.3rem;border-radius:50%;font-weight:bold;" data-aos="fade-right") 4
      .col(style="place-self:center;")
        h5(data-aos="fade-up") Captación móvil con elevación mecánica
        p.mb-0(data-aos="fade-up")  En ríos de gran caudal, que tengan variaciones estacionales de niveles importantes durante el período hidrológico, por economía debe proyectarse la captación sobre una plataforma móvil que se apoye en rieles inclinados en la orilla del río y que sea accionada por poleas diferenciales fijas.
    .row.pt-4.pb-4(style="border-top:2px #AFAFAF dotted;")
      .col-auto(style="place-self:center;")
        div(style="max-width: fit-content;font-size:30px;background-color:#4DB1F0;padding:.5rem 1.3rem;border-radius:50%;font-weight:bold;" data-aos="fade-right") 5
      .col(style="place-self:center;")
        h5(data-aos="fade-up") Captación mixta
        p.mb-0(data-aos="fade-up") Si la fuente tiene variaciones considerables de caudal y además el cauce presenta cambios frecuentes de curso o es inestable, debe estudiarse y analizarse la conveniencia de una captación mixta, que opere a la vez como captación sumergida y captación lateral.
    .row.pt-4.pb-4(style="border-top:2px #AFAFAF dotted;")
      .col-auto(style="place-self:center;")
        div(style="max-width: fit-content;font-size:30px;background-color:#FFA031;padding:.5rem 1.3rem;border-radius:50%;font-weight:bold;" data-aos="fade-right") 6
      .col(style="place-self:center;")
        h5(data-aos="fade-up") Toma de rejilla
        p.mb-0(data-aos="fade-up") Este tipo de toma debe utilizarse en el caso de ríos de zonas montañosas, cuando se cuente con una buena cimentación o terrenos rocosos y en el caso de variaciones sustanciales del caudal en pequeños cursos de agua. Este tipo de captación consiste en una estructura estable de variadas formas; la más común es la rectangular. La estructura, ya sea en canal o con tubos perforados localizados en el fondo del cauce, debe estar localizada perpendicularmente a la dirección de la corriente y debe estar provista con una rejilla metálica para retener materiales de acarreo de cierto tamaño.
    .row.pt-4.pb-4(style="border-top:2px #AFAFAF dotted;")
      .col-auto(style="place-self:center;")
        div(style="max-width: fit-content;font-size:30px;background-color:#4DB1F0;padding:.5rem 1.3rem;border-radius:50%;font-weight:bold;" data-aos="fade-right") 7
      .col(style="place-self:center;")
        h5(data-aos="fade-up") Presa de derivación
        p.mb-0(data-aos="fade-up") Este tipo de captación de aguas superficiales es aconsejable, por razones económicas, en aquellos cursos de agua superficial preferiblemente angostos y cuando se presentan épocas muy prolongadas de niveles de caudal bajo en el río. La presa tiene como objeto elevar el nivel de agua de modo que este garantice una altura adecuada y constante sobre la bocatoma.
    .row.pt-4.pb-4(style="border-top:2px #AFAFAF dotted;")
      .col-auto(style="place-self:center;")
        div(style="max-width: fit-content;font-size:30px;background-color:#FFA031;padding:.5rem 1.3rem;border-radius:50%;font-weight:bold;" data-aos="fade-right") 8
      .col(style="place-self:center;")
        h5(data-aos="fade-up")  Cámara de toma directa
        p.mb-0(data-aos="fade-up") Este tipo de captación se recomienda para el caso de pequeños ríos de llanura, cuando el nivel de aguas en estos es estable durante todo el período hidrológico.
    .row.pt-4.pb-4(style="border-top:2px #AFAFAF dotted;border-bottom:2px #AFAFAF dotted;")
      .col-auto(style="place-self:center;")
        div(style="max-width: fit-content;font-size:30px;background-color:#4DB1F0;padding:.5rem 1.3rem;border-radius:50%;font-weight:bold;" data-aos="fade-right") 9
      .col(style="place-self:center;")
        h5(data-aos="fade-up") Muelle de toma
        p.mb-0(data-aos="fade-up") Esta captación se recomienda en el caso de ríos con variaciones sustanciales del nivel del agua y cuando se pueden aprovechar obras costaneras ya existentes, como muelles, puentes, etc.

    .col-lg-10.m-auto.mt-5
      .cajon.color-acento-contenido.p-4(style="background-color:#E0F4FE;")
        p.mb-0(data-aos="fade-up") Como regla general se establece que las estructuras de captación funcionen con el mínimo de mantenimiento. De igual manera, este debe ser riguroso e incluye generalmente limpieza, verificación y mantenimiento de válvulas y compuertas empleadas en la regulación del caudal.

    .row.mt-5
      .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
        p(data-aos="fade-up") En el caso del sistema por bombeo se contempla la verificación y mantenimiento preventivo de instalaciones y equipos como:
        ul.fa-ul.mb-0.mt-3
          li.mb-2(data-aos="fade-up")
            i.fas.fa-check-circle.fa-li(style="color:#4DB1F0;")
            | Bombas
          li.mb-2(data-aos="fade-up")
            i.fas.fa-check-circle.fa-li(style="color:#4DB1F0;")
            | Motores
          li.mb-2(data-aos="fade-up")
            i.fas.fa-check-circle.fa-li(style="color:#4DB1F0;")
            | Arrancadores
          li.mb-2(data-aos="fade-up")
            i.fas.fa-check-circle.fa-li(style="color:#4DB1F0;")
            | Tableros de control
          li.mb-2(data-aos="fade-up")
            i.fas.fa-check-circle.fa-li(style="color:#4DB1F0;")
            | Transformadores
          li.mb-2(data-aos="fade-up")
            i.fas.fa-check-circle.fa-li(style="color:#4DB1F0;")
            | Válvulas
          li.mb-2(data-aos="fade-up")
            i.fas.fa-check-circle.fa-li(style="color:#4DB1F0;")
            | Tuberías de succión e impulsión
      .col-lg-5(style="place-self:center;")
        figure.text-center
          img(src="@/assets/curso/tema3/50.png" data-aos="fade-left" style="max-width:450px;display:inline;" alt="Imagen decorativa")
    
    p.mt-5(data-aos="fade-up") En ambos casos los sistemas de captación deben estar dotados de rejillas o cribas que impidan el arrastre de material grueso que pueda estar presente en la fuente de abastecimiento, requiriendo su remoción en las actividades de limpieza programadas.
    p.mt-4(data-aos="fade-up") La frecuencia de mantenimiento debe ser establecida acorde a las características de la fuente de captación y en todos los casos es necesario llevar el registro de las actividades de verificación y mantenimientos realizados, al igual que el oportuno reporte de novedades presentadas.

    .mt-5.col-10.m-auto
      .row(style="background-color:#F6F6F6;border-radius:20px;box-shadow:rgba(0, 0, 0, 0.1) 0px 5px 9px 0px;")
        .col-auto.p-0.d-flex.align-items-center
          figure
            img(src="@/assets/curso/tema2/15.png" data-aos="fade-right" style="margin-left: -47px;width: 100px;max-width: 100px;" alt="Imagen decorativa")
        .col.p-0.pe-3
          .p-4.ps-2
            h4(data-aos="fade-up") Importante
            p.mb-0(data-aos="fade-up") Para más detalle sobre sistemas de captación se recomienda revisar el siguiente material complementario:
            p.mb-0(data-aos="fade-up") - Reglamento técnico del sector de Agua potable y Saneamiento básico [RAS], Título B.
            a(href="https://www.uv.mx/ingenieriacivil/files/2013/09/Manual-de-Diseno-para-Proyectos-de-Hidraulica.pdf" target="_blank" style="color:#3076B6;word-break:break-all;" data-aos="fade-up") https://www.uv.mx/ingenieriacivil/files/2013/09/Manual-de-Diseno-para-Proyectos-de-Hidraulica.pdf







</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    mostrarIndicador: true,
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
.acordion__activo
  background-color: #EDF7FE
.lista-ol--separador li, .lista-ul--separador li
  border-bottom: dotted 2px #A6A6A6
.linea-tiempo-d__item--selected .linea-tiempo-d__item__content
  background-color: #EDF7FE
.cajon1.cajon.color-secundario:before
  background-color: #12263F
.cont_image1
  position: relative
  overflow: hidden
  cursor: pointer
  border-radius: 15px
.cont_image1__description
  background-color: #4DB1F0
  position: absolute
  bottom: 0
  width: 100%
  height: auto
  transition: all 0.5s ease-in
  top: 80%
.cont_image2__description
  background-color: #FFA031 !important
.cont_image1:hover .cont_image1__description
  top: auto
.cont_image1:hover .cont_image1__description h5
  margin-bottom: .5rem !important
@media screen and (max-width: 1200px)
  .cont_image1__description
    top: 90%
@media screen and (max-width: 992px)
  .cont_image1__description
    top: 87%
@media screen and (max-width: 770px)
  .cont_image1__description
    top: 83%
@media screen and (max-width: 480px)
  .cont_image1__description
    top: 75%
</style>
