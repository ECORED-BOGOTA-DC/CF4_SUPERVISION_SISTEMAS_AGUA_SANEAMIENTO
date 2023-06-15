<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-right")
      .titulo-principal__numero
        span 1
      h1 Reflexión sobre nuestro papel en el planeta
    
    .row
      .col-lg-8.mb-4.mb-lg-0(style="place-self:center;")
        p(data-aos="fade-up") El desperdicio del agua y la contaminación de fuentes de captación son problemáticas bastante comunes en los países que se encuentran en vía de desarrollo. Generalmente, estos problemas de desperdicio pueden encontrarse asociados a diferentes causas como: taponamientos, pérdidas o fugas, fallas de estructuras frente a su ubicación o capacidad. En el caso de la contaminación, se pueden identificar causas asociadas al uso de fuentes al aire libre, expuestas generalmente a material orgánico de diferentes fuentes como animales, vegetación y personas. Así mismo, se debe tener presente causas como sobrecarga de la fuente y uso inadecuado.
        .cajon.color-acento-botones.p-4.mt-4(style="background-color:#98D8D7;")
          p.mb-0(data-aos="fade-up") Como resultado de las problemáticas mencionadas, es posible la materialización de riesgos como interrupciones en el suministro de agua y enfermedad de los usuarios causadas generalmente por la exposición a agentes contaminantes de carácter microbiológico.
      .col-lg-4(style="place-self:center;")
        figure.text-center
          img(src="@/assets/curso/tema1/1.png" data-aos="fade-left" style="max-width:450px;display:inline;")
    
    p.mt-5.fw-bold.text-center(data-aos="fade-up") Puede ampliar la información, lo invitamos a ver el siguiente video:

    .cont_gradiente1.mt-5
      .col-lg-10.m-auto
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    p.mt-5(data-aos="fade-up") A partir de lo anterior se le invita a reflexionar sobre la necesidad de abordar el contenido que se muestra en este componente, para lo cual puede utilizar como base los planteamientos que se muestran en la siguiente infografía:

    .cont_gradiente1
      figure
        img(src="@/assets/curso/tema1/3.png" data-aos="zoom-in-up")

        




      
</template>

<script>
export default {
  name: 'Tema1',
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

<style lang="sass"></style>
