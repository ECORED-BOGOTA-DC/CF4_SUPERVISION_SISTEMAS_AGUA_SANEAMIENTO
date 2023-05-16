<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Abastecimiento de agua
    
    .row
      .col-lg-8.mb-4.mb-lg-0(style="place-self:center;")
        .cajon.color-acento-botones.p-4(style="background-color:#98D8D7;")
          p.mb-0(data-aos="fade-up") Realizar una gestión adecuada de los recursos hídricos para una sociedad es de suma importancia, porque entre otras actividades, el consumo, el aseo, la producción de bienes y servicios, generan una demanda constante del recurso.
        p.mt-4(data-aos="fade-up") Es fundamental, reconocer el concepto de abastecimiento de agua; el cual, se interpreta en acuerdo con Cárdenas y Patiño (2010), como: el conjunto de obras necesarias para captar, conducir, tratar, almacenar y distribuir el agua desde fuentes naturales, ya sean subterráneas o superficiales, hasta las viviendas de los habitantes que serán favorecidos con dicho sistema; es decir, lo que se reconoce como sistema de acueducto.
      .col-lg-4(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema2/1.png" data-aos="fade-left")
    
    .col-lg-10.m-auto.mt-5
      p(data-aos="fade-up") De acuerdo con el Ministerio de Desarrollo Económico (2017), en el Reglamento Técnico del Sector de Agua potable y Saneamiento básico [RAS], título A, un sistema de acueducto se entiende como:
      .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/tema2/2.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 … el conjunto de instalaciones que conducen el agua desde su captación en la fuente de abastecimiento hasta la acometida domiciliaria en el punto de empate con la instalación interna del predio a servir y comprende los siguientes componentes: la(s) fuente(s) de abastecimiento, la(s) captación(es) de agua superficial y/o agua subterránea y sus anexidades, la(s) aducción(es) y conducción(es), las redes de distribución, las estaciones de bombeo y los tanques de compensación (p.43).
      .cajon.color-secundario.p-4.mt-4.cajon1(style="background-color:#F7F8FB;")
          p.mb-0(data-aos="fade-up") Con base en lo anterior, se puede inferir que el término abastecimiento de agua hace referencia a todo sistema que se construye para garantizar el suministro de agua potable para consumo humano.
    
    p.mt-5.text-center.fw-bold(data-aos="fade-up") A continuación, lo invitamos a revisar una infografía animada sobre las cuencas hidrográficas, en la cual se abordan temas relacionados con el abastecimiento de agua:

    .cont_2_1.mt-5.pt-5.pb-5
      .col-xl-10.m-auto
        ImagenInfografica.color-primario
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema2/4.svg' data-aos="zoom-in-up")
          .tarjeta.color-acento-botones.p-3(x="60%" y="30%" numero="1" style="background-color:#fff;border:2px #3076B6 solid;border-radius:20px;")
            .h5.mb-2(style="color:#3076B6;") 1. Abastecimiento de agua
            p.mb-0(style="color:#000;") El abastecimiento de agua es un pilar de desarrollo para los países, porque garantizar el acceso y la calidad de este recurso, se traduce en mejoramiento de la calidad de vida, salud y progreso de la población.
          .tarjeta.color-acento-botones.p-3(x="37%" y="63%" numero="2" style="background-color:#fff;border:2px #3076B6 solid;border-radius:20px;")
            .h5.mb-2(style="color:#3076B6;") 2. Cuencas
            p.mb-0(style="color:#000;") Se reconoce a la cuenca como “una unidad de territorio donde las aguas fluyen naturalmente, conformando un sistema interconectado, en el cual interactúan aspectos biofísicos, socioeconómicos y culturales (Instituto de Hidrología, Meteorología y Estudios Ambientales Ideam (2004).
          .tarjeta.color-acento-botones.p-3(x="54%" y="56%" numero="3" style="background-color:#fff;border:2px #3076B6 solid;border-radius:20px;")
            .h5.mb-2(style="color:#3076B6;") 3. Áreas hidrográficas o macrocuencas
            p.mb-0(style="color:#000;") Definir las áreas hidrográficas permite no solo procesos de gestión, sino, a su vez, de control más eficientes para el país.  En Colombia se encuentran cinco (5), las cuales son: Magdalena-Cauca, Orinoco, Amazonas, Caribe y Pacífico.
          .tarjeta.color-acento-botones.p-3(x="72%" y="47%" numero="4" style="background-color:#fff;border:2px #3076B6 solid;border-radius:20px;")
            .h5.mb-2(style="color:#3076B6;") 4. Zonas hidrográficas
            p.mb-0(style="color:#000;") Corresponden a las definidas en el mapa de zonificación hidrográfica de Colombia, las cuales son el espacio para monitorear el estado del recurso hídrico y el impacto que sobre este tienen las acciones desarrolladas en el marco de la política nacional para la gestión integral del recurso hídrico.
          .tarjeta.color-acento-botones.p-3(x="21%" y="58%" numero="5" style="background-color:#fff;border:2px #3076B6 solid;border-radius:20px;")
            .h5.mb-2(style="color:#3076B6;") 5. Microcuenca y acuíferos
            p.mb-0(style="color:#000;") Las microcuencas o unidades básicas serán el elemento integrador de la gestión y sobre las cuales se focalizarán las acciones. La ejecución de ellas responderá a una actuación local, orientada con una visión global y serán objeto de planes de manejo ambiental Ideam (2008).
    
    Separador.mt-5

    .titulo-segundo
      h2#t_2_1 2.1 Conceptos asociados al tema de cuenca







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
<style lang="sass">
.bloque-texto-g.color-acento-contenido
  background-color: #1673b6
.cajon1.cajon.color-secundario:before
  background-color: #12263F
.cont_2_1
  position: relative
.cont_2_1:before
  content: ''
  position: absolute
  width: 125%
  height: 100%
  left: -15%
  top: 0
  background: url(../assets/curso/tema2/3.png)
  background-repeat: no-repeat
  background-size: cover
  background-position: center
</style>
