<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-right")
      .titulo-principal__numero
        span 2
      h1 Abastecimiento de agua
    
    .row
      .col-lg-8.mb-4.mb-lg-0(style="place-self:center;")
        .cajon.color-secundario.p-4.cajon1(style="background-color:#E0F4FE;")
          p.mb-0(data-aos="fade-up") Realizar una gestión adecuada de los recursos hídricos para una sociedad es de suma importancia, porque entre otras actividades, el consumo, el aseo, la producción de bienes y servicios, generan una demanda constante del recurso.
        p.mt-4(data-aos="fade-up") Es fundamental, reconocer el concepto de abastecimiento de agua; el cual, se interpreta en acuerdo con Cárdenas y Patiño (2010), como: el conjunto de obras necesarias para captar, conducir, tratar, almacenar y distribuir el agua desde fuentes naturales, ya sean subterráneas o superficiales, hasta las viviendas de los habitantes que serán favorecidos con dicho sistema; es decir, lo que se reconoce como sistema de acueducto.
      .col-lg-4(style="place-self:center;")
        figure.text-center
          img(src="@/assets/curso/tema2/1.png" data-aos="fade-left" style="max-width:450px;display:inline;" alt="Imagen decorativa")
    
    .col-lg-10.m-auto.mt-5
      p(data-aos="fade-up") De acuerdo con el Ministerio de Desarrollo Económico (2017), en el Reglamento Técnico del Sector de Agua potable y Saneamiento básico [RAS], título A, un sistema de acueducto se entiende como:
      .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/tema2/2.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 "El conjunto de instalaciones que conducen el agua desde su captación en la fuente de abastecimiento hasta la acometida domiciliaria en el punto de empate con la instalación interna del predio a servir y comprende los siguientes componentes: la(s) fuente(s) de abastecimiento, la(s) captación(es) de agua superficial y/o agua subterránea y sus anexidades, la(s) aducción(es) y conducción(es), las redes de distribución, las estaciones de bombeo y los tanques de compensación" (p.43).
      .cajon.color-secundario.p-4.mt-4.cajon1(style="background-color:#F7F8FB;")
        p.mb-0(data-aos="fade-up") Con base en lo anterior, se puede inferir que el término abastecimiento de agua hace referencia a todo sistema que se construye para garantizar el suministro de agua potable para consumo humano.
    
    p.mt-5.text-center.fw-bold(data-aos="fade-up") A continuación, lo invitamos a revisar una infografía animada sobre las cuencas hidrográficas, en la cual se abordan temas relacionados con el abastecimiento de agua:

    .cont_2_1.mt-5.pt-5.pb-5
      .col-xl-10.m-auto
        ImagenInfografica.color-primario
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema2/4.png' data-aos="zoom-in-up" alt="Muestra las cuencas hidrográficas., sistema fluvial, afluente, cabecera del rio, valle, llanura de inundación, colina, rápidos, meandro, meandro abandonado, río, confluencia y fuente.")
          .tarjeta.color-acento-botones.p-3(x="60%" y="30%" numero="1" style="background-color:#fff;border:2px #3076B6 solid;border-radius:20px;")
            .h5.mb-2(style="color:#3076B6;") 1. Abastecimiento de agua
            p.mb-0(style="color:#000;") El abastecimiento de agua es un pilar de desarrollo para los países, porque garantizar el acceso y la calidad de este recurso, se traduce en mejoramiento de la calidad de vida, salud y progreso de la población.
          .tarjeta.color-acento-botones.p-3(x="37%" y="63%" numero="2" style="background-color:#fff;border:2px #3076B6 solid;border-radius:20px;")
            .h5.mb-2(style="color:#3076B6;") 2. Cuencas
            p.mb-0(style="color:#000;") Se reconoce a la cuenca como “una unidad de territorio donde las aguas fluyen naturalmente, conformando un sistema interconectado, en el cual interactúan aspectos biofísicos, socioeconómicos y culturales" (Instituto de Hidrología, Meteorología y Estudios Ambientales Ideam, 2004).
          .tarjeta.color-acento-botones.p-3(x="54%" y="56%" numero="3" style="background-color:#fff;border:2px #3076B6 solid;border-radius:20px;")
            .h5.mb-2(style="color:#3076B6;") 3. Áreas hidrográficas o macrocuencas
            p.mb-0(style="color:#000;") Definir las áreas hidrográficas permite no solo procesos de gestión, sino, a su vez, de control más eficientes para el país.  En Colombia se encuentran cinco (5), las cuales son: Magdalena-Cauca, Orinoco, Amazonas, Caribe y Pacífico.
          .tarjeta.color-acento-botones.p-3(x="72%" y="47%" numero="4" style="background-color:#fff;border:2px #3076B6 solid;border-radius:20px;")
            .h5.mb-2(style="color:#3076B6;") 4. Zonas hidrográficas
            p.mb-0(style="color:#000;") Corresponden a las definidas en el mapa de zonificación hidrográfica de Colombia, las cuales son el espacio para monitorear el estado del recurso hídrico y el impacto que sobre este tienen las acciones desarrolladas en el marco de la política nacional para la gestión integral del recurso hídrico.
          .tarjeta.color-acento-botones.p-3(x="21%" y="58%" numero="5" style="background-color:#fff;border:2px #3076B6 solid;border-radius:20px;")
            .h5.mb-2(style="color:#3076B6;") 5. Microcuenca y acuíferos
            p.mb-0(style="color:#000;") Las microcuencas o unidades básicas serán el elemento integrador de la gestión y sobre las cuales se focalizarán las acciones. La ejecución de ellas responderá a una actuación local, orientada con una visión global y serán objeto de planes de manejo ambiental (Ideam, 2008).
    
    Separador.mt-5

    .titulo-segundo
      h2#t_2_1 2.1 Conceptos asociados al tema de cuenca

    figure.mb-md-0.mb-4
      img(src="@/assets/curso/tema2/5.png" data-aos="zoom-in-up" alt="Imagen decorativa")
    .col-lg-10.m-auto
      .p-4.cont_gradiente_gris
        p.mb-0(data-aos="fade-up") El suministro de agua potable involucra una serie de elementos en los que la selección de la fuente de abastecimiento y su uso se encuentran enmarcados en un contexto de gestión del recurso hídrico, suelo, flora y fauna, agrupados en un área denominada cuenca. A continuación, se presentan, algunos conceptos asociados:
    
    .p-3.mt-5(style="background-color:#3076B6;border-radius:0px 40px 0px 40px;max-width:400px;" data-aos="fade-up")
      h3.mb-0.text-white.text-center ¿Qué es una cuenca hidrográfica?
    
    .row.mt-4
      .col-lg-4.mb-4.mb-lg-0(style="place-self:center;")
        figure.text-center
          img(src="@/assets/curso/tema2/6.png" data-aos="fade-right" style="max-width:450px;display:inline;" alt="Imagen decorativa")
      .col-lg-8(style="place-self:center;")
        .cajon.color-secundario.p-4.mt-4.cajon1(style="background-color:#F7F8FB;")
          p.mb-0(data-aos="fade-up") De acuerdo con el Decreto 1640 de 2012, en su artículo 3°, entiéndase por cuenca u hoya hidrográfica, el área de aguas superficiales o subterráneas que vierten a una red hidrográfica natural con uno o varios cauces naturales, de caudal continuo o intermitente, que confluyen en un curso mayor, que a su vez puede desembocar en un río principal, en un depósito natural de aguas, en un pantano o directamente en el mar.
    
    .p-3.mt-5(style="background-color:#3076B6;border-radius:0px 40px 0px 40px;max-width:400px;" data-aos="fade-up")
      h3.mb-0.text-white.text-center Interacciones asociadas a las cuencas
    
    p.mt-4(data-aos="fade-up") Alrededor de las cuencas hidrográficas se dan infinidad de interacciones humanas que generan una intervención directa con los territorios circundantes a estas zonas; es por ello que, el manejo territorial de las cuencas se convierte en una herramienta de gestión territorial fundamental para las regiones.

    p.mt-5.text-center.fw-bold(data-aos="fade-up") Dentro de esas interacciones que se pueden dar, la cuenca hidrográfica es determinada como:

    figure.mt-5
      img(src="@/assets/curso/tema2/7.svg" data-aos="zoom-in-up" alt="a) Un área que es fuente de recursos hidráulicos: en la cual existe un manejo planificado de los recursos naturales y de la preservación del ecosistema como un complemento de la acción de administración del agua (Nadal, 1993, Citado en García, W. s.f. p.3).  b) Un espacio ocupado por un grupo humano: que genera una demanda sobre la oferta de los recursos naturales renovables y realiza transformaciones del medio (Dourojeanni, 1994, Citado en García, W. s.f. p.3).  c) Un sistema organizado de relaciones complejas, tanto internas como externas: es un sistema contenido dentro de otro sistema (ambiente), constituido por las interacciones de otros subsistemas (biofísico, social, económico, etc.), cuyo fin principal es producir bienestar a la sociedad que la gobierna (cantidad y calidad de agua, energía, insumos, alimentos, recreación, etc.) (García, W. s.f. p.3).")

    p.mt-5.fw-bold(data-aos="fade-up") Teniendo en cuenta lo anteriormente descrito, según García (s.f.), las cuencas hidrográficas se interrelacionan con sus componentes elementales de la siguiente forma:

    .col-lg-10.m-auto.mt-5
      .titulo-sexto.color-acento-botones
        h5.d-block Figura 1
        span Componentes de un sistema de cuenca hidrográfica
      figure
        img(src="@/assets/curso/tema2/8.svg" data-aos="zoom-in-up" alt="Componentes de un sistema de cuenca hidrográfica, en un diagrama de flujo.")
        figcaption.p-3.text-center.fw-normal.mt-4(style="background-color:#E8E8E8;") Fuente: García, W. (s.f.) El sistema complejo de la cuenca hidrográfica. p.5. [Diagrama].
    
    .p-3.mt-5(style="background-color:#3076B6;border-radius:0px 40px 0px 40px;max-width:400px;" data-aos="fade-up")
      h3.mb-0.text-white.text-center Estructura hidrológica de la cuenca
    
    .row.mt-5
      .col-lg-8.mb-4.mb-lg-0(style="place-self:center;")
        .cajon.color-secundario.p-4.cajon1(style="background-color:#F7F8FB;")
          p.mb-0(data-aos="fade-up") De acuerdo con el Ideam (2008) y Olaya, E. y Tosse, L. (2014), para asegurar una gestión sistémica, se precisa definir ciertas unidades que orgánicamente conforman el sistema de la cuenca, como son: el área o macrocuenca hidrológica, las zonas hidrográficas, la cuenca propiamente dicha y la microcuenca o unidad mínima básica; a continuación, se muestran algunos aspectos importantes de esta estructura: 
      .col-lg-4(style="place-self:center;")
        figure.text-center
          img(src="@/assets/curso/tema2/6.png" data-aos="fade-left" style="max-width:450px;display:inline;" alt="Imagen decorativa")
    
    .row.mt-5.justify-content-center(@mouseover="mostrarIndicador = false")
      .col-xl.mb-4.mb-xl-0.col-10
        .h-100
          figure.cont_image1
            img(src="@/assets/curso/tema2/10.png" alt="Imagen decorativa")
            .cont_image1__description.p-3
              h5.mb-5 Áreas hidrográficas o macrocuencas
              p.mb-0(style="font-size:13px;") De estas zonas se debe mantener información documentada de recursos naturales renovables, y en especial, de los cauces principales de los ríos, haciendo énfasis en la calidad, cantidad y regularidad de las fuentes hídricas. Los planes estratégicos se formularán a escala 1: 500.000.
      .col-xl.mb-4.mb-xl-0.col-10
        .h-100
          figure.cont_image1
            .indicador--click(v-if="mostrarIndicador")
            img(src="@/assets/curso/tema2/11.png" alt="Imagen decorativa")
            .cont_image1__description.p-3.cont_image2__description
              h5.mb-5 Zonas hidrográficas
              p.mb-0(style="font-size:13px;") Es importante aclarar que el instrumento de planificación de las zonas hidrográficas en el país es el denominado Programa nacional de monitoreo del recurso hídrico, en el cual se encuentran todas las acciones planeadas, a realizar en las cuencas hidrográficas (Olaya, E. y Tosse, L., 2014. p.16).
      .col-xl.mb-4.mb-xl-0.col-10
        .h-100
          figure.cont_image1
            img(src="@/assets/curso/tema2/12.png" alt="Imagen decorativa")
            .cont_image1__description.p-3
              h5.mb-5 Cuencas
              p.mb-0(style="font-size:13px;") Las cuencas tributarias de zonas o regiones hidrológicas serán el objeto de la formulación, implementación y ejecución de los Planes de Ordenación y Manejo de cuencas (POMCA). 
      .col-xl.mb-4.mb-xl-0.col-10
        .h-100
          figure.cont_image1
            img(src="@/assets/curso/tema2/13.png" alt="Imagen decorativa")
            .cont_image1__description.p-3.cont_image2__description
              h5.mb-5 Microcuenca y acuíferos
              p.mb-0(style="font-size:13px;") Las microcuencas son de vital importancia para el desarrollo de comunidades, pueblos y por ende del país. Su deterioro por su mal manejo, es cada día mayor.
    
    .p-3.mt-5(style="background-color:#3076B6;border-radius:0px 40px 0px 40px;max-width:400px;" data-aos="fade-up")
      h3.mb-0.text-white.text-center Caracterización de las cuencas
    
    .row.mt-4
      .col-lg-8.mb-4.mb-lg-0(style="place-self:center;")
        p(data-aos="fade-up") El proceso de caracterización básico de una cuenca es el que hace referencia a la descripción espacial de la misma sobre cartografía oficial, a escalas definidas, de acuerdo con la norma vigente, incluyendo descripción político-administrativa (departamental, municipal, veredal), jerarquización de centros poblados, ubicación de comunidades étnicas, territorios colectivos y resguardos indígenas (si aplican).
        .cajon.color-secundario.p-4.mt-4.cajon1(style="background-color:#E0F4FE;")
          p.mb-0(data-aos="fade-up") La importancia de esta caracterización en cartografía radica en que a partir de ella se generarán todos los productos que se requieren para el Plan de Ordenamiento y Manejo de Cuencas Hidrográficas (POMCA).
      .col-lg-4(style="place-self:center;")
        figure.text-center
          img(src="@/assets/curso/tema2/14.png" data-aos="fade-left" style="max-width:450px;display:inline;" alt="Imagen decorativa")
    
    p.mt-5(data-aos="fade-up") La cartografía base es la información digital contenida en una base de datos geográfica o geodatabases, escala 1:25.000 para el caso de las macrocuencas de la Orinoquia, Amazonas y Pacífico (también se puede usar escala 1:100.000); esta debe contener varias capas como: edificaciones, obras civiles, vías de transporte, centros poblados, hidrografía compuesta de drenajes sencillos, dobles y cuerpos de agua, el relieve compuesto por curvas de nivel, entre otros (Olaya, E. y Tosse, L., 2014).
    p.mt-4(data-aos="fade-up") Estos elementos cartográficos deben cumplir con las Normas Técnicas Colombianas [NTC] 5043 de la calidad de la información geográfica y NTC 4611 sobre medidas de la información geográfica. Lo invitamos a consultarla en la base de datos del SENA.

    .col-lg-10.m-auto.mt-5.col-10
      .row(style="background-color:#F6F6F6;border-radius:20px;box-shadow:rgba(0, 0, 0, 0.1) 0px 5px 9px 0px;")
        .col-auto.p-md-0.d-flex.align-items-center
          figure
            img(src="@/assets/curso/tema2/15.png" data-aos="fade-right" style="margin-left: -47px;width: 100px;max-width: 100px;" alt="Imagen decorativa")
        .col.p-md-0
          .p-4.ps-2
            h4(data-aos="fade-up") Importante
            p(data-aos="fade-up") Para ampliar la información consulte Norma Técnicas Colombianas [NTC] 5043, de la calidad de la información geográfica y NTC 4611 sobre medidas de la información geográfica.
            p(data-aos="fade-up") Debe ingresar a biblioteca SENA, (#[a(style="color:#3076B6;word-break:break-word;" href="http://biblioteca.sena.edu.co/paginas/bases.html" target="_blank") http://biblioteca.sena.edu.co/paginas/bases.html]) ir a ICONTEC y buscar norma #[strong NTC 5043] y #[strong NTC 4611], seleccionar las siguientes respectivamente: #[a(style="color:#3076B6;" href="https://e-collection-icontec-org.bdigital.sena.edu.co/normavw.aspx?ID=4238" target="_blank") NTC 5043:2010] /  #[a(style="color:#3076B6;word-break:break-word;" href="https://e-collection-icontec-org.bdigital.sena.edu.co/normavw.aspx?ID=3729" target="_blank") NTC 4611:2011]
    
    p.mt-5.text-center.fw-bold(data-aos="fade-up") En el siguiente mapa conceptual, puede observar los tipos de caracterización de una cuenca:

    figure.mt-5
      img(src="@/assets/curso/tema2/16.svg" data-aos="zoom-in-up" alt="Muestra la caracterización de una cuenca que puede ser biofísica, socioeconómica y cultural, político administrativa y funcional")

    Separador.mt-5

    .titulo-segundo
      h2#t_2_2 2.2 Planes de ordenamiento y manejo de cuencas
    
    .row
      .col-lg-3.mb-4.mb-lg-0(style="place-self:center;")
        figure.text-center
          img(src="@/assets/curso/tema2/17.png" data-aos="fade-right" style="z-index:2;position:relative;max-width:450px;display:inline;" alt="Imagen decorativa")
      .col-lg-9.cont_2_2.pt-5.pb-5.p-4(style="place-self:center;")
        p.mb-0(data-aos="fade-up") Para Olaya, E. y Tosse, L. (2014), los POMCA, son: #[br] Instrumentos propicios para que tanto en su formulación e implementación, se construyan escenarios que permitan el desarrollo de la gobernanza del agua, donde se reflejen los acuerdos y compromisos entre el poder público, la sociedad civil, las comunidades étnicas y los sectores económicos (p.12).
    
    .col-lg-10.mt-5.m-auto
      .row
        .col-lg-8.mb-4.mb-lg-0(style="place-self:center;")
          p.mb-0(data-aos="fade-up") Los POMCA, deben estar articulados a los diferentes instrumentos de planeación nacional, regional y local, nunca deberán ser desarrollados como instrumentos independientes, ya que debe garantizarse el manejo integrado de la cuenca hidrográfica. De hecho, de acuerdo a la Ley 388 de 1997, se determina a los POMCA como una norma de superior jerarquía que otros planes, como se detalla en el Decreto 1640 de 2012: “El Plan de Ordenación y Manejo de la Cuenca Hidrográfica se constituye en norma de superior jerarquía y determinante ambiental para la elaboración y adopción de los planes de ordenamiento territorial, de conformidad con lo dispuesto en el Artículo 10 de la Ley 388 de 1997”.
        .col-lg-4(style="place-self:center;")
          figure.text-center
            img(src="@/assets/curso/tema2/18.png" data-aos="fade-left" style="max-width:450px;display:inline;" alt="Imagen decorativa")
    
    p.mt-5.fw-bold.text-center(data-aos="fade-up") ¡Aprenda más!  Lo invitamos a visualizar el siguiente video:

    .cont_gradiente1.mt-5
      .col-lg-10.m-auto
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/ZJMiCiXJKQQ" title="PLANES DE ORDENACIÓN Y MANEJO DE CUENCAS HIDROGRÁFICAS" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    .p-3.mt-5(style="background-color:#3076B6;border-radius:0px 40px 0px 40px;max-width:400px;" data-aos="fade-up")
      h3.mb-0.text-white.text-center Antecedentes normativos
    
    p.mt-4(data-aos="fade-up") Para comprender la importancia de los instrumentos, denominados planes de ordenamiento de cuencas, se hace necesario primero realizar un pequeño análisis de los diferentes enfoques que se han abordado en Colombia desde su base normativa.

    p.text-center.mt-5.fw-bold(data-aos="fade-up") A continuación, a manera de línea de tiempo, se presentan por periodo los antecedentes normativos:
    
    .cont_gradiente1.mt-5.pt-5.pb-5
      LineaTiempoE.color-acento-contenido
        .row(titulo="Antes de" subtitulo="los años 70")
          .col-lg-3.mb-4.mb-lg-0(style="place-self:center;")
            figure.text-center
              img(src='@/assets/curso/tema2/19.png' data-aos="fade-right" style="max-width:450px;display:inline;" alt="Imagen decorativa")
          .col-lg-9(style="place-self:center;")
            p(data-aos="fade-up") No se reconocían las fuentes de desequilibrios hídricos y erosión, de acuerdo al Instituto de Hidrología, Meteorología y Estudios Ambientales [IDEAM, 2008], en su guía técnico científica para la ordenación y manejo de cuencas hidrográficas en Colombia. La práctica de reforestación (para introducir coníferas y eucaliptos) venía a constituir la “panacea” o única acción para regular caudales, controlar la calidad del agua y degradación de suelos por erosión, lo cual, evidentemente no fue la solución, sino otro factor de degradación (p.7).
            p.mt-4(data-aos="fade-up") En el Decreto 1381 de 1940, se determinan los primeros lineamientos explícitos de política para el manejo del agua.
        .row(titulo="Entre 1970" subtitulo="y 1990")
          .col-lg-9.mb-4.mb-lg-0(style="place-self:center;")
            p(data-aos="fade-up") Nace el Instituto Nacional de los Recursos Naturales Renovables y del Ambiente [INDERENA], para adelantar labores de ordenación de cuencas hidrográficas y promoción de su desarrollo integral (IDEAM, 2008, p.8).
            p.mt-4(data-aos="fade-up") Se expide el Código Nacional de Recursos Naturales Renovables y de Protección al Medio Ambiente (Decreto - Ley 2811 de 1974), que  planifica ambientalmente el territorio, para regular  y manejar los recursos suelo, aire, fauna, flora y el agua, entre otros, en el territorio colombiano. 
            p.mt-4(data-aos="fade-up") Este instrumento marca el inicio de las directrices, que orientan la administración del recurso hídrico en el país. Define la cuenca hidrográfica como un “área de manejo especial".
          .col-lg-3(style="place-self:center;")
            figure.text-center
              img(src='@/assets/curso/tema2/20.png' data-aos="fade-left" style="max-width:450px;display:inline;" alt="Imagen decorativa")
        .row(titulo="De 1990" subtitulo="a 1994")
          .col-lg-3.mb-4.mb-lg-0(style="place-self:center;")
            figure.text-center
              img(src='@/assets/curso/tema2/21.png' data-aos="fade-right" style="max-width:450px;display:inline;" alt="Imagen decorativa")
          .col-lg-9(style="place-self:center;")
            p(data-aos="fade-up") Con la expedición de la Ley 99 de 1993, se crea el Ministerio de Medio Ambiente como organismo rector de la gestión del medio ambiente y de los recursos naturales renovables. Se establecen lineamientos para fortalecer el Sistema Nacional Ambiental. Se fijan pautas para ordenamiento y manejo de cuencas hidrográficas y demás áreas de manejo especial. Se  establece la competencia a las Corporaciones Autónomas Regionales y de Desarrollo Sostenible en la ordenación y manejo de las cuencas hidrográficas ubicadas en el área de su jurisdicción (Olaya, E. y Tosse, L, 2014, p.13).
        .row(titulo="Entre 1994" subtitulo="a 2002")
          .col-lg-9.mb-4.mb-lg-0(style="place-self:center;")
            p(data-aos="fade-up") Se expide la ley 165 de 1994, aprobando el convenio sobre la diversidad biológica; promueve la formulación de planes y programas de conservación y utilización sostenible de la diversidad biológica.
            p.mt-4(data-aos="fade-up") En el 2002 se expide el Decreto 1729, sobre ordenación de cuencas, modificando el Decreto 2857 de 1981, fijando pautas generales comprometidas en el numeral 12 del artículo 5 de la Ley 99 de 1993 (IDEAM, 2008, p.14).
          .col-lg-3(style="place-self:center;")
            figure.text-center
              img(src='@/assets/curso/tema2/22.png' data-aos="fade-left" style="max-width:450px;display:inline;" alt="Imagen decorativa")
        .row(titulo="Del 2002" subtitulo="al 2010")
          .col-lg-3.mb-4.mb-lg-0(style="place-self:center;")
            figure.text-center
              img(src='@/assets/curso/tema2/23.png' data-aos="fade-right" style="max-width:450px;display:inline;" alt="Imagen decorativa")
          .col-lg-9(style="place-self:center;")
            p(data-aos="fade-up") En 2010, el Ministerio de Ambiente, Vivienda y Desarrollo Territorial (hoy Ministerio de Ambiente y Desarrollo Sostenible), expidió la política nacional para la gestión integral del recurso hídrico.
            p.mt-4(data-aos="fade-up") Siendo la cuenca una unidad de análisis y gestión integral del recurso hídrico, se deberán considerar en su ordenación y manejo, medidas de acción necesarias para planificar el uso sostenible de la misma y de recursos naturales renovables, ecosistemas y elementos ambientales presentes (medidas de ordenamiento del recurso hídrico, manejo de páramos, de humedales y otros ecosistemas de importancia estratégica, de ordenación forestal, de manejo de reservas forestales, entre otras) (Olaya, E. y Tosse, L, 2014, p.13).
        .row(titulo="Del 2010" subtitulo="al 2012")
          .col-lg-9.mb-4.mb-lg-0(style="place-self:center;")
            p(data-aos="fade-up") La Ley 1523 de 2012; adopta la política nacional para establecer el sistema de gestión del riesgo de desastres, interviniendo los  planes de ordenamiento de cuencas.
            p.mt-4(data-aos="fade-up") El Decreto 1640 de 2012, reglamenta  los instrumentos para planificación, ordenación y manejo de las cuencas hidrográficas y acuíferos. Esta reglamentación establece la nueva estructura de planificación, ordenación y manejo de las cuencas hidrográficas del país, permitiendo claridad en el nivel de gestión, por parte de autoridades ambientales competentes y diferentes entidades y actores responsables de su formulación e implementación (Olaya, E. y Tosse, L., 2014, p.13).
          .col-lg-3(style="place-self:center;")
            figure.text-center
              img(src='@/assets/curso/tema2/24.png' data-aos="fade-left" style="max-width:450px;display:inline;" alt="Imagen decorativa")
        .row(titulo="Del 2012" subtitulo="al 2020")
          .col-lg-3.mb-4.mb-lg-0(style="place-self:center;")
            figure.text-center
              img(src='@/assets/curso/tema2/25.png' data-aos="fade-right" style="max-width:450px;display:inline;" alt="Imagen decorativa")
          .col-lg-9(style="place-self:center;")
            p(data-aos="fade-up") Se debe resaltar durante estos años la expedición del Decreto Único Reglamentario 1076 de 2015, que compila las disposiciones reglamentarias del Sector Ambiente. Se determinan las instancias para la coordinación de la planificación, ordenación y manejo de las cuencas hidrográficas y acuíferos, entre ellas el Consejo Ambiental Regional de la Macrocuenca para cada una de las áreas Hidrográficas o Macrocuencas del País y la Comisión Conjunta en las Subzonas Hidrográficas (Artículo 2.2.3.1.1.6 y 2.2.3.1.3.1).
            p.mt-4(data-aos="fade-up") Y posteriormente, el Decreto 050 de 2018, el cual modifica parcialmente el Decreto 1076 de 2015, en relación con la conformación de los Consejos Ambientales Regionales de las Macrocuencas (CARMAC).
    
    .p-3.mt-5(style="background-color:#3076B6;border-radius:0px 40px 0px 40px;max-width:400px;" data-aos="fade-up")
      h3.mb-0.text-white.text-center Fases y procesos de un POMCA
    
    p.mt-4(data-aos="fade-up") A continuación, se presenta un breve resumen de las fases que compone un POMCA, el cual, de acuerdo con Olaya, E. y Tosse, L (2014), se encuentra compuesto por seis (6) fases (aprestamiento, diagnóstico, prospectiva y zonificación ambiental, formulación, ejecución, seguimiento y evaluación), las cuales se evidencian en el siguiente recurso de aprendizaje:

    .row.mt-5
      .col-lg-4.mb-4.mb-lg-0(style="place-self:center;")
        figure.text-center
          img(src="@/assets/curso/tema2/26.png" data-aos="fade-right" style="max-width:450px;display:inline;" alt="Imagen decorativa")
      .col-lg-8(style="place-self:center;")
        LineaTiempoD.color-acento-contenido
          p(numero="1" titulo="Aprestamiento") En esta fase se definirá el plan de trabajo; la identificación, caracterización y priorización de actores; la estrategia de participación; se hará la revisión y consolidación de información existente, el análisis situacional inicial; y el plan operativo detallado para la formulación del plan (2014, p.26).
          p(numero="2" titulo="Diagnóstico") En esta fase se consolidará el Consejo de cuenca y se determinará el estado actual de la cuenca en sus componentes: físico-biótico, socioeconómico y cultural, político administrativo, funcional y de gestión del riesgo, que servirán de base para el análisis situacional y la síntesis ambiental de la cuenca objeto de ordenación y manejo (2014, p.34).
          p(numero="3" titulo="Prospectiva y zonificación ambiental") Fase en la cual se diseñarán escenarios futuros del uso coordinado y sostenible del suelo, de las aguas, de la flora y de la fauna presente, y se definirá en un horizonte no menor a diez años el modelo de ordenación de la cuenca, con base en el cual se formulará el plan de ordenación y manejo correspondiente (2014, p.49).
          p(numero="4" titulo="Formulación") Comprende la definición del componente programático, las medidas para la administración de los recursos naturales renovables y el componente de gestión del riesgo. También, como parte del componente programático, se formulará la estructura administrativa y la estrategia financiera del POMCA, el diseño del programa de seguimiento y evaluación y, actividades conducentes a la publicidad y aprobación del POMCA (2014, p.62).
          p(numero="5" titulo="Ejecución") Corresponde a las acciones de coordinación que adelantan las Corporaciones Autónomas Regionales y de Desarrollo Sostenible, para la ejecución del plan de ordenación y manejo de la cuenca hidrográfica, sin perjuicio de las competencias establecidas en el ordenamiento jurídico para la inversión y realización de las obras y acciones establecidas en la fase de formulación del plan (2014, p.69).
          p(numero="6" titulo="Seguimiento y evaluación") Aplicación de mecanismos definidos en el plan de seguimiento y evaluación, anualmente, por parte de las respectivas Corporaciones Autónomas Regionales y de Desarrollo Sostenible. Cuenta con procedimientos sistemáticos de observación para comprobar la eficiencia y efectividad de los programas, proyectos y acciones formuladas. Determina los logros y debilidades del proceso y derivado de ello, identifica medidas correctivas (2014, p.70).

    .cont_2_3.mt-5.pb-5
      .col-lg-10.m-auto
        .row.m-auto(style="background-color:#F6F6F6;border-radius:20px;box-shadow:rgba(0, 0, 0, 0.1) 0px 5px 9px 0px;position:relative;")
          .col-auto.p-md-0.d-flex.align-items-center
            figure
              img(src="@/assets/curso/tema2/15.png" data-aos="fade-right" style="margin-left: -47px;width: 100px;max-width: 100px;position:relative;" alt="Imagen decorativa")
          .col.p-md-0
            .p-4.ps-2
              h4(data-aos="fade-up") Para ampliar la información se sugiere que se dirija al material de apoyo y analice los documentos:
              ul.fa-ul.mt-3
                li.mb-3(data-aos="fade-up")
                  i.fas.fa-check-circle.fa-li(style="color:#FFA031;")
                  | Guía técnico científica para la ordenación y manejo de cuencas hidrográficas en Colombia del Ideam (2004).
                li(data-aos="fade-up")
                  i.fas.fa-check-circle.fa-li(style="color:#FFA031;")
                  | Guía técnica para la formulación de los planes de ordenación y manejo de cuencas hidrográficas de Olaya, E. y Tosse, L., Ministerio de Ambiente y Desarrollo Sostenible (2014).
      .row.mt-5.col-lg-11.m-auto(@mouseover="mostrarIndicador2 = false")
        .col-lg-6.mb-4.mb-lg-0
          a.anexo.bg-white.h-100(href="http://corponarino.gov.co/expedientes/documentacion/ayudaa/guiadecuenca2008.pdf" target="_blank" style="background-color:#F6F6F6;border-radius:20px;box-shadow:rgba(0, 0, 0, 0.1) 0px 5px 9px 0px;position:relative;" data-aos="fade-up")
            .indicador--click(v-if="mostrarIndicador2")
            .anexo__icono
              img(src="@/assets/template/icono-pdf.svg" alt="Imagen decorativa")
            .anexo__texto
              p.mb-0(style="color:#12263F;") #[strong(style="color:#12263F;") Anexo.] Instituto de Hidrología, Meteorología y Estudios Ambientales (2004). #[em(style="color:#12263F;") Guía técnico científica para la ordenación y manejo de cuencas hidrográficas en Colombia].
        .col-lg-6
          a.anexo.bg-white.h-100(href="https://www.minambiente.gov.co/index.php/gestion-integral-del-recurso-hidrico/direccion-integral-de-recurso-hidrico/politica-nacional-para-la-gestion-integral-del-recurso-hidrico" target="_blank" style="background-color:#F6F6F6;border-radius:20px;box-shadow:rgba(0, 0, 0, 0.1) 0px 5px 9px 0px;position:relative;" data-aos="fade-up")
            .anexo__icono
              img(src="@/assets/template/icono-pdf.svg" alt="Imagen decorativa")
            .anexo__texto
              p.mb-0(style="color:#12263F;") #[strong(style="color:#12263F;") Anexo.] Ministerio de Ambiente, Vivienda y Desarrollo Territorial (2010). #[em(style="color:#12263F;") Política Nacional para la Gestión Integral del Recurso Hídrico.] Bogotá, D.C.: Colombia, Ministerio de Ambiente, Vivienda y Desarrollo Territorial. 124 p.
    
    .p-3.mt-5(style="background-color:#3076B6;border-radius:0px 40px 0px 40px;max-width:500px;" data-aos="fade-up")
      h3.mb-0.text-white.text-center Normas Técnicas Colombianas para el POMCA
    
    p.mt-5.text-center.fw-bold(data-aos="fade-up") Para la organización de la información geográfica del plan, se sugiere la aplicación de las siguientes normas técnicas:

    .cont_2_4.mt-5
      .row
        .col-lg.mb-4.mb-lg-0
          .tarjeta-numerada.color-secundario.p-5.h-100.bg-white
            .tarjeta-numerada__numero
              .h2 1
            div
              p.fw-bold(data-aos="fade-up") Norma Técnica Colombiana NTC 5043
              p.mt-3(data-aos="fade-up") Establece los elementos, sub-elementos y descriptores de la calidad, utilizados por los productores para determinar si un conjunto de datos cumple la función de representar un universo abstracto, de conformidad con las especificaciones del producto. Igualmente, los usuarios pueden usar los requisitos de esta norma para establecer si un conjunto de datos cumple o no con la calidad para una aplicación específica.
        .col-lg.mb-4.mb-lg-0
          .tarjeta-numerada.color-primario.p-5.h-100.bg-white
            .tarjeta-numerada__numero
              .h2 2
            div
              p.fw-bold(data-aos="fade-up") Norma Técnica Colombia NTC 4611
              p.mt-3(data-aos="fade-up") Establece los requisitos para describir la información geográfica, bien sea análoga o digital, así como servicios geográficos. Proporciona los elementos que permiten documentar la información, por medio de secciones como: identificación, calidad, representación espacial, sistema de referencia, contenido de los datos, catálogo de símbolos y distribución, para un conjunto cualquiera de datos geográficos, soportadas por secciones de información adicional como: contacto, citación y fecha.
        .col-lg.mb-4.mb-lg-0
          .tarjeta-numerada.color-secundario.p-5.h-100.bg-white
            .tarjeta-numerada__numero
              .h2 3
            div
              p.fw-bold(data-aos="fade-up") Norma Técnica Colombiana NTC 5661
              p.mt-3(data-aos="fade-up") Especifica la metodología para determinar la estructura (catálogo) con la cual se organizan los tipos de objetos geográficos, sus definiciones y características (atributos, relaciones y operaciones); de igual forma, unifica las características de los catálogos de objetos, de tal manera que sean integrables, homologables y fácilmente comprensibles y permitir la creación, revisión y actualización.
    
    p.mt-5(data-aos="fade-right") Puede consultarlas en la base de datos que se encuentra en la página del sistema de bibliotecas SENA, en el icono del Icontec.
    
    .col-lg-6.m-auto.mt-5
      .row(style="background-color:#F6F6F6;border-radius:20px;box-shadow:rgba(0, 0, 0, 0.1) 0px 5px 9px 0px;position:relative;")
        .col-auto.p-md-0.d-flex.align-items-center
          figure
            img(src="@/assets/curso/tema2/15.png" data-aos="fade-right" style="margin-left: -47px;width: 100px;max-width: 100px;position:relative;" alt="Imagen decorativa")
        .col.p-md-0
          .p-4.ps-2
            h4(data-aos="fade-up") Para ampliar la información consulte:
            ul.fa-ul.mt-3.mb-0
              li.mb-2(data-aos="fade-up")
                i.fas.fa-check-circle.fa-li(style="color:#FFA031;")
                | #[a(style="color:#3076B6;text-decoration:underline;word-break:break-word;" href="https://docplayer.es/73239143-Norma-tecnica-colombiana-5043.html" target="_blank") NTC 5043 - Conceptos básicos de calidad de los datos geográficos]
              li.mb-2(data-aos="fade-up")
                i.fas.fa-check-circle.fa-li(style="color:#FFA031;")
                | #[a(style="color:#3076B6;text-decoration:underline;word-break:break-word;" href="https://www.cvc.gov.co/sites/default/files/Sistema_Gestion_de_Calidad/Procesos%20y%20procedimientos%20Vigente/Normatividad_Gnl/NTC%204611%20de%202000-Nov-01.pdf" target="_blank") NTC 4611 – Información geográfica – Metadatos]
              li(data-aos="fade-up")
                i.fas.fa-check-circle.fa-li(style="color:#FFA031;")
                | #[a(style="color:#3076B6;text-decoration:underline;word-break:break-word;" href="https://docplayer.es/148459267-Norma-tecnica-colombiana-5661.html" target="_blank") NTC 5661 - Método para catalogación de objetos geográficos]
    
    Separador.mt-5

    .titulo-segundo
      h2#t_2_3 2.3 Normatividad y reglamentación del sector de agua potable y saneamiento básico
    
    .row
      .col-lg-5.mb-4.mb-lg-0(style="place-self:center;")
        figure.text-center
          img(src="@/assets/curso/tema2/28.png" data-aos="fade-right" style="max-width:450px;display:inline;" alt="Imagen decorativa")
      .col-lg-7(style="place-self:center;")
        p(data-aos="fade-up") Es importante aclarar que, dentro de la normativa del sector de agua potable y saneamiento básico, en algunos casos se encontrarán disposiciones particulares, dependiendo de la región donde se desarrollará el proyecto. Aunque todas parten de la normatividad nacional vigente, se recomienda, antes de iniciar un proyecto de potabilización de agua, revisar y documentarse de la legislación que reglamente la zona objeto del proyecto.
        .cajon.color-secundario.p-4.mt-4.cajon1(style="background-color:#F7F8FB;")
          p.mb-0(data-aos="fade-up") Para realizar las actividades de inspección de sistemas de captación de agua y posterior potabilización, es primordial tener claro la normatividad más relevante en el sector, ya que esta es la guía técnica que debe ser usada en todo momento. A continuación, podrán observar lo relacionado con este proceso:
    
    .cont_gradiente1.mt-5
      .col-lg-10.m-auto
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/YgXhpZOkYo4" title="Normatividad y reglamentación del sector de agua potable y saneamiento básico" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    .p-3.mt-5(style="background-color:#3076B6;border-radius:0px 40px 0px 40px;max-width:750px;" data-aos="fade-up")
      h3.mb-0.text-white.text-center Reglamentación del sector de Agua potable y Saneamiento básico [RAS]

    .row.mt-4
      .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
        p(data-aos="fade-up") Como se mencionó anteriormente, la base normativa de este reglamento es la Resolución 0330 de 2017. La Resolución aplica a los prestadores de los servicios públicos de acueducto, alcantarillado y aseo, a las entidades formuladoras de proyectos de inversión en el sector, a los entes de vigilancia y control, a las entidades territoriales y las demás con funciones en el sector de agua potable y saneamiento básico, en el marco de la Ley 142 de 1994. Así como a los diseñadores, constructores, interventores, operadores, entidades o personas contratantes que elaboren o adelanten diseños, ejecución de obras, operen y mantengan obras, instalaciones o sistemas propios del sector de agua y saneamiento básico.
      .col-lg-5(style="place-self:center;")
        figure.text-center
          img(src="@/assets/curso/tema2/29.png" data-aos="fade-right" style="max-width:450px;display:inline;" alt="Imagen decorativa")
    
    .p-3.mt-5(style="background-color:#3076B6;border-radius:0px 40px 0px 40px;max-width:400px;" data-aos="fade-up")
      h3.mb-0.text-white.text-center Principios orientadores del RAS
    
    .row.mt-4
      .col-lg-5.mb-4.mb-lg-0(style="place-self:center;")
        figure.text-center
          img(src="@/assets/curso/tema2/30.png" data-aos="fade-right" style="max-width:450px;display:inline;" alt="Imagen decorativa")
      .col-lg-7(style="place-self:center;")
        p(data-aos="fade-up") De acuerdo con la Resolución 0330 de 2017, en su Artículo 3°, los principios orientadores para las actividades de operación y mantenimiento son los siguientes:
        ul.lista-ul--separador.mt-3
          li.d-flex(data-aos="fade-up")
            i.fas.fa-check-circle(style="color:#4DB1F0;")
            | Garantizar la calidad de la presentación de los servicios.
          li.d-flex(data-aos="fade-up")
            i.fas.fa-check-circle(style="color:#4DB1F0;")
            | Lograr la atención prioritaria de las necesidades básicas insatisfechas en materia de agua potable y saneamiento básico.
          li.d-flex(data-aos="fade-up")
            i.fas.fa-check-circle(style="color:#4DB1F0;")
            | Buscar la ampliación permanente de las coberturas de los servicios.
          li.d-flex(data-aos="fade-up")
            i.fas.fa-check-circle(style="color:#4DB1F0;")
            | La planeación, economía, celeridad, transparencia, eficacia, imparcialidad, oportunidad, publicidad y responsabilidad en la contratación de las obras y de las actividades de operación y mantenimiento.
          li.d-flex(data-aos="fade-up")
            i.fas.fa-check-circle(style="color:#4DB1F0;")
            | Garantizar la seguridad, durabilidad, funcionamiento adecuado, calidad, eficiencia y sostenibilidad de la infraestructura requerida para la prestación de los servicios públicos de agua y saneamiento.
          li.d-flex(data-aos="fade-up")
            i.fas.fa-check-circle(style="color:#4DB1F0;")
            | Durante las etapas del proyecto, la interacción con la comunidad debe ser proactiva y preventiva.
    
    .cajon.color-secundario.p-4.mt-5.cajon1(style="background-color:#F7F8FB;")
      .row
        .col-lg-10.col-md-8.mb-md-0.mb-4(style="place-self:center;")
          p.mb-0(data-aos="fade-up") Por lo anterior, esta normativa se convierte en un instrumento fundamental en el desarrollo de cualquier proyecto asociado a la temática; junto a esta resolución se crean diversas herramientas que permiten su aplicación, dentro de ellas se encuentran:
          p.mt-4(data-aos="fade-up") #[strong Los manuales o títulos:] se crean junto a la resolución, 13 manuales o títulos nombrados por el abecedario, con el fin de brindar soporte técnico, dependiendo de la necesidad, de la siguiente forma:
        .col-lg-2.col-md-4(style="place-self:center;")
          figure.text-center
            img(src="@/assets/curso/tema2/31.svg" data-aos="fade-left" style="max-width:450px;display:inline;" alt="Imagen decorativa")
    
    .cont_gradiente1.mt-5
      .titulo-sexto.color-acento-botones
        h5.d-block Figura 2
        span Títulos del RAS 2017
      figure.mt-4
        img(src="@/assets/curso/tema2/32.svg" data-aos="zoom-in-up" alt="Muestra los títulos del RAS 2017 , desde el A hasta el L Título A  Aspectos generales de los sistemas de agua potable y saneamiento básico.  Título B  Sistemas de acueducto.  Título C  Sistemas de potabilización.  Título D  Sistemas de recolección y evacuación de aguas residuales domésticas y aguas lluvias.  Título E  Tratamiento de aguas residuales.  Título F  Sistemas de aseo urbano.  Título G  Aspectos complementarios.  Título H  Compendio de la normatividad técnica y jurídica del sector de agua potable y saneamiento básico y sus actividades complementarias.  Título I  Componente ambiental para los sistemas de acueducto, alcantarillado y aseo.  Título J  Alternativas tecnológicas en agua y saneamiento para el sector rural.  Título K  Gestión del riesgo en sistemas de acueducto, alcantarillado y aseo, conforme al reglamento técnico de agua y saneamiento RAS.  Título L  Instalaciones hidráulicas y sanitarias al interior de la vivienda.")
    
    .col-lg-10.m-auto.mt-5
      .row.p-4(style="background: rgb(70,164,224);background: linear-gradient(180deg, rgba(70,164,224,1) 0%, rgba(34,98,156,1) 100%);border-radius:25px;")
        .col-lg-1.col-md-3.mb-4.mb-md-0.text-center(style="place-self:center;")
          figure.text-center
            img(src="@/assets/curso/tema2/33.svg" data-aos="fade-right" style="display:inline;max-width:100px;" alt="Imagen decorativa")
        .col-lg-9.col-md-6.mb-4.mb-md-0(style="place-self:center;")
          h4.text-white(data-aos="fade-up") Títulos del RAS
          p.text-white.mb-0(data-aos="fade-up") Para consultar cada uno de los títulos se puede dirigir al Ministerio de Vivienda, en la siguiente ruta: #[br] Ministerio de Vivienda. Reglamento técnico del sector Agua potable y Saneamiento, y seleccione el título que desea consultar. 
        .col-lg-2.col-md-3.text-center(style="place-self:center;")
          a.boton.color-primario(href="https://www.minvivienda.gov.co/viceministerio-de-agua-y-saneamiento-basico/reglamento-tecnico-sector/reglamento-tecnico-del-sector-de-agua-potable-y-saneamiento-basico-ras" target="_blank" type="application/pdf")
            span Ir a página
            i.fas.fa-link
    
    p.mt-5(data-aos="fade-up") Además, el Ministerio de Vivienda también ofrece las guías técnicas de libre acceso, que permiten ampliar la información de la resolución y hacen más fácil su aplicabilidad. La figura que presentamos a continuación menciona los temas que aborda cada guía:
    
    .col-lg-10.m-auto.mt-5
      .titulo-sexto.color-acento-botones
        h5.d-block Tabla 1
        span Guías para implementación del RAS

      .tabla-a.color-secundario.mt-4 
        table(alt="Guías para implementación del RAS")
          thead
            tr(style="background-color:#DBEFFC;")
              th.p-4(colspan="2") Guías
          tbody
            tr
              td.p-4.fw-bold.text-center RAS -001
              td.p-4 Definición del nivel de complejidad y evaluación de la población, la dotación y la demanda de agua.
            tr
              td.p-4.fw-bold.text-center RAS -002
              td.p-4 Identificación, justificación y priorización de proyectos.
            tr
              td.p-4.fw-bold.text-center RAS -003
              td.p-4 Planeamiento y diseño hidráulico de redes de distribución de agua potable.
            tr
              td.p-4.fw-bold.text-center RAS -004
              td.p-4 Evaluación socioeconómica de proyecto de acueducto y alcantarillado.
            tr
              td.p-4.fw-bold.text-center RAS -005
              td.p-4 Alcantarillados sanitarios.
            tr
              td.p-4.fw-bold.text-center RAS -006
              td.p-4 Alcantarillados pluviales.
            tr
              td.p-4.fw-bold.text-center RAS -007
              td.p-4 Perforación manual de pozos profundos de pequeño diámetro.
            tr
              td.p-4.fw-bold.text-center RAS -008
              td.p-4 Guía metodológica para la formulación y diseño de sistemas de acueducto rurales.
    

      
      





</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    mostrarIndicador: true,
    mostrarIndicador2: true,
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
  top: 75%
.cont_image2__description
  background-color: #FFA031 !important
.cont_image1:hover .cont_image1__description
  top: auto
.cont_image1:hover .cont_image1__description h5
  margin-bottom: .5rem !important
@media screen and (max-width: 1200px)
  .cont_image1__description
    top: 90%
  .cont_image1__description p
    font-size: 16px !important
@media screen and (max-width: 992px)
  .cont_image1__description
    top: 87%
  .cont_image1__description p
    font-size: 16px !important
@media screen and (max-width: 770px)
  .cont_image1__description
    top: 83%
  .cont_image1__description p
    font-size: 16px !important
@media screen and (max-width: 480px)
  .cont_image1__description
    top: 75%
  .cont_image1__description p
    font-size: 16px !important
.cont_2_2, .cont_2_2 *
  position: relative
.cont_2_2:before
  content: ''
  position: absolute
  width: 120%
  left: -20%
  top: 0
  height: 100%
  background-color: #F6F6F6
  border-radius: 0px 0px 40px 0px
.linea-tiempo-e__item__header p
  font-size: 1.25rem
  font-weight: bold
.linea-tiempo-e__item__header h3
  margin-bottom: 0 !important
.linea-tiempo-e:before
  background: #3076B6
.linea-tiempo-e.color-acento-contenido .linea-tiempo-e__item__header:before
  border-color: #FFA031
.linea-tiempo-d__item--selected .linea-tiempo-d__item__content
  background-color: #EDF7FE
.cont_2_3
  position: relative
.cont_2_3:before
  content: ''
  position: absolute
  width: 125%
  left: -15%
  bottom: 0
  height: 80%
  background-color: #EDF7FE
.cont_2_4
  position: relative
.cont_2_4:before
  content: ''
  position: absolute
  width: 125%
  height: 100%
  left: -15%
  top: 0
  background: url(../assets/curso/tema2/27.png)
  background-repeat: no-repeat
  background-size: cover
  background-position: center
.lista-ol--separador li, .lista-ul--separador li
  border-bottom: dotted 2px #A6A6A6
</style>
