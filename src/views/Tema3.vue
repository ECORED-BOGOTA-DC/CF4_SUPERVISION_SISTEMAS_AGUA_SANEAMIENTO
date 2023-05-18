<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Captación de agua

    .row
      .col-lg-4.mb-4.mb-lg-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema3/1.png" data-aos="fade-right")
      .col-lg-8(style="place-self:center;")
        p(data-aos="fade-up") Una de las primeras etapas en el proceso de potabilización de agua consiste en la captación de ésta a través de diferentes sistemas que son seleccionados y configurados, acorde a las características propias de la fuente de captación y requerimientos de suministro.
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
          figure
            img(src='@/assets/curso/tema3/2.png')
      .row.col-xl-11.m-auto(titulo="2. Sistema internacional de unidades")
        .col-lg-7.mb-4.mb-lg-0
          p Además del sistema internacional de unidades, es posible emplear otras unidades y sistemas de medidas, como el sistema tradicional de unidades de Estados Unidos, también conocido como Sistema gravitacional de unidades inglesas, en el que las unidades para las magnitudes de longitud, tiempo, fuerza y masa son respectivamente el pie, segundo, libra y slug (Mott, 2006, p. 5).
          p.mt-4 Para la operación matemática de diferentes magnitudes se usan factores de conversión, pasar de múltiplos a submúltiplos y viceversa.
        .col-lg-5
          figure
            img(src='@/assets/curso/tema3/3.png')
      .row.col-xl-11.m-auto(titulo="3. Conversión de unidades")
        .col-lg-7.mb-4.mb-lg-0
          p La conversión de unidades se logra mediante el uso de factores de conversión, que indican la relación entre una cantidad expresada en diferentes unidades, como por ejemplo:
          figure.mt-3
            img(src="@/assets/curso/tema3/4.png")
          p.mt-4 Generalmente se emplean tablas para conocer los factores de conversión, sin embargo, hoy es posible el uso de aplicaciones web o aplicaciones que se pueden descargar en los dispositivos móviles, y presentan datos aceptables.
        .col-lg-5
          figure
            img(src='@/assets/curso/tema3/5.png')
      .row.col-xl-11.m-auto(titulo="4. Ejemplo de conversión de unidades")
        .col-lg-7.mb-4.mb-lg-0
          p #[strong Ejemplo 1.] Al abrir una válvula ubicada en una tubería se permite el paso de 1,2 L/s. ¿Cuántos m3/día pasan por el sistema?
          figure.mt-3.col-8.m-auto
            img(src="@/assets/curso/tema3/6.png")
          p.mt-4 #[strong Ejemplo 2.] Un operario abre una válvula durante 8 horas al día, permitiendo el flujo de 1,2 L/s. ¿Cuántos m3/día pasan por el sistema?
          figure.mt-3.col-8.m-auto
            img(src="@/assets/curso/tema3/7.png")
          .p-3.bg-white.mt-4
            p.mb-0 Nótese que en el ejemplo dos fue necesario incluir un factor de conversión adicional, ya que en este caso, la válvula solo abre una fracción del tiempo (8 horas).
        .col-lg-5
          figure
            img(src='@/assets/curso/tema3/8.png')
      .row.col-xl-11.m-auto(titulo="5. Presión")
        .col-lg-12
          p.d-inline Se puede definir la presión como la cantidad de fuerza que se ejerce sobre un área determinada. Esto se representa mediante la ecuación #[img(src="@/assets/curso/tema3/9.png" style="max-width:60px;display:inline;")] sus unidades son N/m (Mott, 2006, p. 12).
          .row.mt-4
            .col-lg-6.mb-4.mb-lg-0(style="place-self:center;")
              p La presión actúa de modo uniforme en todas las direcciones de un volumen pequeño de fluido.
              figure.mt-3
                img(src='@/assets/curso/tema3/10.png')
            .col-lg-6(style="place-self:center;")
              p En un fluido confinado por fronteras sólidas, la presión actúa de manera.
              figure.mt-3
                img(src='@/assets/curso/tema3/11.png')
      .row.col-xl-11.m-auto(titulo="6. Tasa de flujo")
        .col-lg-7.mb-4.mb-lg-0
          p La tasa de flujo permite expresar la cantidad de fluido en función del tiempo. Mott (2006) indica que se pueden emplear tres términos diferentes:
          p.mt-4 El flujo volumétrico (Q) es el volumen de un fluido que circula en una sección por unidad de tiempo. Se calcula con la siguiente ecuación:
          p.mt-4 Donde #[strong A] es el área de la sección y #[strong v] es la velocidad promedio del fluido. En el SI sus unidades son m#[sup 3]/s.
        .col-lg-5
          figure
            img(src='@/assets/curso/tema3/12.png')
      .row.col-xl-11.m-auto(titulo="7. Flujo en peso")
        .col-lg-7.mb-4.mb-lg-0
          p El flujo en peso (W) es el peso de un fluido que circula en una sección por unidad de tiempo. Se calcula con la siguiente ecuación:
          figure.mt-3.col-10.m-auto
            img(src="@/assets/curso/tema3/13.png")
          p.mt-4 Donde #[em y] es el peso específico del fluido. Sus unidades son N/s.
          p.mt-4 El flujo másico (M) es la masa de un fluido que circula en una sección por unidad de tiempo.
          figure.mt-3.col-10.m-auto
            img(src="@/assets/curso/tema3/14.png")
          p.mt-4 donde #[strong #[em p]] es la densidad del fluido. Sus unidades son kg/s.
        .col-lg-5
          figure
            img(src='@/assets/curso/tema3/15.png')
    
    .row.mt-5
      .col-lg-4.mb-4.mb-lg-0(style="place-self:center;")
        figure
          img(src='@/assets/curso/tema3/16.png' data-aos="fade-right")
      .col-lg-8(style="place-self:center;")
        .row
          .col-lg-9.mb-md-0.mb-4.col-md-8(style="place-self:center;")
            p.mb-0(data-aos="fade-up") Por otra parte, están los conceptos de densidad, gravedad y peso específico. Estas tres propiedades se relacionan al volumen del fluido.  En el caso de la densidad, indica la relación entre la masa de una sustancia y su volumen. Generalmente la densidad se denota con la letra griega #[em p] (rho), y su ecuación es:
          .col-lg-3.col-md-4(style="place-self:center;")
            figure
              img(src='@/assets/curso/tema3/17.png' data-aos="fade-left")
        .row.mt-5
          .col-lg-9.mb-md-0.mb-4.col-md-8(style="place-self:center;")
            p.mb-0(data-aos="fade-up") Las unidades de la densidad en el SI son el kg/m3. La densidad del agua varía en función de la temperatura, y alcanza su mayor valor a los 4 °C.
            p.mt-4.mb-0(data-aos="fade-up") Recordemos que relacionado a la masa se encuentra el peso. Es así como el peso específico indica la cantidad de peso por unidad de volumen de la sustancia, así:
          .col-lg-3.col-md-4(style="place-self:center;")
            figure
              img(src='@/assets/curso/tema3/18.png' data-aos="fade-left")
        p.mt-4(data-aos="fade-up") El peso específico se representa por la letra griega #[em y] (gamma), y su unidad son newtons por metro cúbico (N/m3).
        p.mt-4(data-aos="fade-up") Para el caso de la gravedad específica, usaremos como fluido de referencia el agua a 4°C, y puede definirse de dos maneras:
        .row.col-lg-10.m-auto.mt-4
          .text-center.col-lg.mb-4.mb-lg-0(style="place-self:center;")
            p(data-aos="fade-up") Es la razón de la densidad de una sustancia a la densidad del agua a 4°C.
            figure.mt-3.col-10.m-auto
              img(src='@/assets/curso/tema3/19.png' data-aos="fade-up")
          .col-lg-auto.d-none.d-lg-block
            div.h-100(style="border-right:3px #A6A6A6 dotted;")
          .text-center.col-lg(style="place-self:center;")
            p(data-aos="fade-up") Es la razón del peso específico de una sustancia al peso específico del agua a 4°C.
            figure.mt-3.col-10.m-auto
              img(src='@/assets/curso/tema3/20.png' data-aos="fade-up")
    
    p.mt-5(data-aos="fade-up") Además de los conceptos básicos tratados anteriormente, es necesario revisar en qué consiste el principio de continuidad, el concepto de altura piezométrica y el principio de Conservación de la energía - Ecuación de Bernoulli. Revíselo a continuación:

    .p-3.mt-5(style="background-color:#3076B6;border-radius:0px 40px 0px 40px;max-width:400px;" data-aos="fade-up")
      h3.mb-0.text-white.text-center Principio de continuidad

    .row.mt-4
      .col-lg-8.mb-4.mb-lg-0(style="place-self:center;")
        .row.pb-3(style="border-bottom:3px #A6A6A6 dotted;")
          .col-lg-9.col-md-8.mb-md-0.mb-4(style="place-self:center;")
            p.mb-0(data-aos="fade-up") Considere un ducto como el de la imagen, en el que se cuenta con dos secciones de diferente diámetro, que son atravesadas por un fluido. El flujo es constante, es decir, que en cualquier sección la cantidad de fluido que circula en determinado tiempo es similar (no sale, ingresa o se almacena fluido). Es posible expresar lo descrito en términos de flujo másico así (Mott,2006, p. 156):
          .col-lg-3.col-md-4(style="place-self:center;")
            figure.mt-3.col-10.m-auto
              img(src='@/assets/curso/tema3/21.png' data-aos="fade-up")
        .row.pb-3.pt-3(style="border-bottom:3px #A6A6A6 dotted;")
          .col-lg-9.col-md-8.mb-md-0.mb-4(style="place-self:center;")
            p.mb-0(data-aos="fade-up") Retomando el tema de flujo másico, este puede expresarse como el producto de la densidad por el flujo volumétrico #[strong M=#[em p]Q], por lo tanto, 
          .col-lg-3.col-md-4(style="place-self:center;")
            figure.mt-3.col-10.m-auto
              img(src='@/assets/curso/tema3/22.png' data-aos="fade-up")
        .row.pb-3.pt-3(style="border-bottom:3px #A6A6A6 dotted;")
          .col-lg-9.col-md-8.mb-md-0.mb-4(style="place-self:center;")
            p.mb-0(data-aos="fade-up") Si la densidad del fluido se mantiene constante es posible reducir la ecuación a la expresión #[strong Q1 = Q2]. Como #[strong Q = Av], entonces finalmente la ecuación puede ser expresada como:
          .col-lg-3.col-md-4(style="place-self:center;")
            figure.mt-3.col-10.m-auto
              img(src='@/assets/curso/tema3/23.png' data-aos="fade-up")
      .col-lg-4(style="place-self:center;")
        figure.mt-3.col-10.m-auto
          img(src='@/assets/curso/tema3/24.svg' data-aos="fade-left")
    
    p.mt-4(data-aos="fade-up") Esta ecuación resume el principio de continuidad y permite calcular, por ejemplo, la velocidad del fluido en un sistema de conducción cerrado, como una tubería.

    .p-3.mt-5(style="background-color:#3076B6;border-radius:0px 40px 0px 40px;max-width:400px;" data-aos="fade-up")
      h3.mb-0.text-white.text-center Altura piezométrica
    
    p.mt-4(data-aos="fade-up") Corresponde a la altura o nivel que alcanzará el agua en un tubo piezométrico. Si se suman las alturas en cada punto, se obtiene la línea piezométrica, la cual coincide con la línea de energía del fluido. Lo anterior se observa en la siguiente imagen:

    .col-lg-6.m-auto.mt-5
      figure
        img(src="@/assets/curso/tema3/25.svg" data-aos="zoom-in-up")
    
    .p-3.mt-5(style="background-color:#3076B6;border-radius:0px 40px 0px 40px;max-width:550px;" data-aos="fade-up")
      h3.mb-0.text-white.text-center Conservación de la energía - Ecuación de Bernoulli

    .row.mt-4
      .col-lg-8.mb-4.mb-lg-0(style="place-self:center;")
        p.mb-0(data-aos="fade-up") El movimiento de un fluido a través de un sistema se encuentra asociado a la energía que este posee, dependiendo así de tres variables: velocidad, la presión del sistema y la elevación. A partir de estas variables, el matemático Daniel Bernoulli, en 1738, plantea un teorema que involucra estas tres formas de energía mediante la siguiente ecuación (Mott, 2006, p. 156):
      .col-lg-4(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema3/26.png" data-aos="fade-left")
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
            | v2/2g es la carga de velocidad.
        p.mt-3(data-aos="fade-up") A la suma de estos tres términos se les conoce como carga total.
      .col-lg-4(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema3/27.png" data-aos="fade-left")
    
    .p-3.mt-5(style="background-color:#3076B6;border-radius:0px 40px 0px 40px;max-width:450px;" data-aos="fade-up")
      h3.mb-0.text-white.text-center Aplicación de la ecuación de Bernoulli
    
    .row.mt-4
      .col-lg-4.mb-4.mb-lg-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema3/28.png" data-aos="fade-right")
      .col-lg-8(style="place-self:center;")
        p(data-aos="fade-up") La aplicación de esta ecuación permite determinar los valores de carga de presión, carga de elevación y variación en la carga de velocidad, a medida que este circula a través del sistema. Sin embargo, las siguientes son limitaciones que se deben tener en cuenta:
        .col-lg-11.m-auto.mt-3
          ul.lista-ul--separador.mb-0
            li(data-aos="fade-up")
              i.fas.fa-check-circle(style="color:#FFA031;")
              | Es válida solo para fluidos incompresibles, pues supone que el peso específico (#[em y]) no varía entre las dos secciones de interés.
            li(data-aos="fade-up")
              i.fas.fa-check-circle(style="color:#FFA031;")
              | No puede haber dispositivos entre las dos secciones que ingresen o retiren energía. La ecuación establece que la energía en el fluido es constante.
            li(data-aos="fade-up")
              i.fas.fa-check-circle(style="color:#FFA031;")
              | No puede haber transferencia de calor hacia el fluido o fuera de este.
            li(data-aos="fade-up")
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
        figure
          img(src="@/assets/curso/tema3/30.svg" data-aos="fade-right")
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
              figure
                img(src="@/assets/curso/tema3/31.png")
    
    Separador.mt-5

    .titulo-segundo
      h2#t_3_3 3.3 Aforo de caudal
    
    p(data-aos="fade-up") Cuando se abordó el tema de conceptos básicos de hidráulica, se mencionó que la cantidad de un fluido que  atraviesa una sección en un determinado tiempo es conocido como la tasa de flujo. En particular, el flujo volumétrico (Q) es el volumen de un fluido que circula en una sección por unidad de tiempo, y sus unidades son el m3/s.

    .row.mt-4
      .col-lg-6.mb-4.mb-lg-0(style="place-self:center;")
        p(data-aos="fade-up") Para la medición del caudal es posible aplicar diferentes métodos que pueden ser seleccionados en función de las características del flujo, tecnología disponible y exactitud de los datos requerida.
        p.mt-4(data-aos="fade-up") De acuerdo al protocolo de monitoreo del agua (Ideam, 2017, p.178), 
        p(data-aos="fade-up") para la medición del caudal en una corriente se han desarrollado diversos métodos de aforo que se aplican según el tamaño del cauce, la magnitud del caudal, las características hidráulicas del flujo, la necesidad de contar con datos inmediatos o a corto plazo y, en general, las dificultades para realizar el aforo, entre otros.
      .col-lg-3.mb-4.mb-lg-0(style="place-self:center;")
        .h-100.p-4(style="background-color:#A5D8F7;border-radius:25px;")
          p.fw-bold(data-aos="fade-up") Entre los métodos se encuentran:
          p.mb-0(data-aos="fade-up") #[strong A.] Método Área-Velocidad.
          p.mb-0(data-aos="fade-up") #[strong B.] Método volumétrico.
          p.mb-0(data-aos="fade-up") #[strong C.] Método con trazadores (dilución).
          p.mb-0(data-aos="fade-up") #[strong D.] Estructuras aforadas.
      .col-lg-3(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema3/32.png" data-aos="fade-left")

    






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
<style lang="sass">
.acordion__activo
  background-color: #EDF7FE
.lista-ol--separador li, .lista-ul--separador li
  border-bottom: dotted 2px #A6A6A6
.linea-tiempo-d__item--selected .linea-tiempo-d__item__content
  background-color: #EDF7FE
</style>
