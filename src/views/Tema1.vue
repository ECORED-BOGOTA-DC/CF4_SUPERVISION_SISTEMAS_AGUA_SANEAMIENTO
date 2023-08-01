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
          img(src="@/assets/curso/tema1/1.png" data-aos="fade-left" style="max-width:450px;display:inline;" alt="Imagen decorativa")
    
    p.mt-5.fw-bold.text-center(data-aos="fade-up") Puede ampliar la información, lo invitamos a ver el siguiente video:

    .cont_gradiente1.mt-5
      .col-lg-10.m-auto
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/srnYgncoYEU" title="Río Magdalena: Contrastes" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    p.mt-5(data-aos="fade-up") A partir de lo anterior se le invita a reflexionar sobre la necesidad de abordar el contenido que se muestra en este componente, para lo cual puede utilizar como base los planteamientos que se muestran en la siguiente infografía:

    .cont_gradiente1
      figure
        img(src="@/assets/curso/tema1/3.svg" data-aos="zoom-in-up" alt="¿Considera que el agua que consume en su hogar debe o debería cumplir con alguna característica en particular? ¿Es posible que las características del agua cambien desde la captación hasta que llega a su hogar? ¿Qué se puede hacer para saber si el agua que se está suministrando cumple con las características para consumo humano? ¿Es posible que los hábitos y conductas de las personas puedan tener algún tipo de repercusión al momento de usar el agua? Si fuera necesario modificar los hábitos y conductas de un determinado grupo frente al uso del agua, ¿qué haría para lograr este cambio y cómo lo realizaría?")

        




      
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
