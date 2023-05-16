<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row
      .col-lg-4.mb-4.mb-lg-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/intro1.png" data-aos="fade-right")
      .col-lg-1
      .col-lg-7(style="place-self:center;")
        .p-4.cont_arrow1(style="background-color:#EAF4FB;border-radius:7px;position:relative")
          p(data-aos="fade-up") Le damos la bienvenida al componente formativo denominado “#[strong Inspección de sistemas de captación]”.
          p.mt-4(data-aos="fade-up") La inspección sanitaria es un elemento esencial de un programa efectivo de agua potable. En los sistemas de agua, la inspección contribuye a la protección de la salud pública. El propósito de este componente formativo es desarrollar en los participantes la habilidad para realizar la inspección sanitaria de un pequeño sistema público de agua de manera efectiva e integral.
          p.mt-4.mb-0(data-aos="fade-up") Los sistemas de captación y potabilización de agua buscan garantizar el acceso continuo al suministro de agua potable, aportando significativamente a la calidad de vida de las personas.
    
    p.mt-5(data-aos="fade-up") Sin embargo, esto implica no solo el suministro del recurso, ya que se debe garantizar el cumplimiento de los parámetros establecidos para su uso, acorde a las actividades en las que se consumirá.  
    p.mt-4(data-aos="fade-up") Lo invitamos a aprovechar el contenido y a explorar las actividades y recursos que se disponen para su aprendizaje. 
    p.mt-5.fw-bold(data-aos="fade-up") Éxitos




    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>
<style lang="sass">
.cont_arrow1:before
  content: ''
  position: absolute
  width: 0
  height: 0
  top: 20%
  left: -99px
  border-top: 100px solid transparent
  border-bottom: 100px solid transparent
  border-right: 100px solid #EAF4FB
</style>
