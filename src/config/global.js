export default {
  global: {
    componenteFormativo: 'Inspección de sistemas de captación',
    descripcionCurso:
      'La importancia de los sistemas de captación y potabilización de agua en torno a garantizar el acceso continuo al suministro de agua potable, aportando a la calidad de vida de las personas, implica no solo el suministro del recurso, sino garantizar el cumplimiento de los parámetros establecidos para su uso en las diferentes actividades de consumo. ',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Reflexión sobre nuestro papel en el planeta',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Abastecimiento de agua',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Conceptos asociados al tema de cuenca',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Planes de ordenamiento y manejo de cuencas',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo:
              'Normatividad y reglamentación del sector de agua potable y saneamiento básico',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Captación de agua',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Conceptos básicos de hidráulica',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Parámetros de calidad del agua',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Aforo de caudal',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Sistemas de captación',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Muestreo y medición',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Procedimientos de muestreo',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Reporte de eventos',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Registro de información',
            hash: 't_4_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/921200_CF04_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '2.1 Conceptos asociados al tema de cuenca.',
      referencia:
        'Decreto 1640. Presidencia de la República de Colombia. Bogotá: Colombia. 2 de agosto 2012.',
      tipo: 'Norma',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=49987',
    },
    {
      tema: '2.2 Planes de ordenamiento y manejo de cuencas.',
      referencia:
        'Ministerio de Ambiente, Vivienda y Desarrollo Territorial. (2010). <em>Política Nacional para la Gestión Integral del Recurso Hídrico. Bogotá, D.C.: Colombia, Ministerio de Ambiente, Vivienda y Desarrollo Territorial</em>. p.124',
      tipo: 'Libro',
      link:
        'https://www.minambiente.gov.co/index.php/gestion-integral-del-recurso-hidrico/direccion-integral-de-recurso-hidrico/politica-nacional-para-la-gestion-integral-del-recurso-hidrico',
    },
    {
      tema: '2.2 Planes de ordenamiento y manejo de cuencas.',
      referencia:
        'Instituto de hidrología, meteorología y estudios ambientales. (2004). <em>Guía técnico científica para la Ordenación de las cuencas Hidrográficas en Colombia</em>.',
      tipo: 'Guía',
      link:
        'http://corponarino.gov.co/expedientes/documentacion/ayudaa/guiadecuenca2008.pdf',
    },
    {
      tema:
        '2.3 Normatividad y reglamentación del sector de agua potable y saneamiento básico.',
      referencia:
        'Resolución 0330. Ministerio de Vivienda, Ciudad y Territorio. Bogotá: Colombia. 8 junio 2017.',
      tipo: 'Normatividad',
      link:
        'https://drive.google.com/file/d/1IjwFAv29GCS91oDODPHGZmLpNSwKVCDq/view?usp=sharing',
    },
    {
      tema:
        '2.3 Normatividad y reglamentación del sector de agua potable y saneamiento básico.',
      referencia:
        'Instituto Colombiano de Normas Técnicas y Certificación [ICONTEC]. (2007). NTC 3705, <em>Medición de flujo de agua en canal abierto con vertederos de placa fina</em>.',
      tipo: 'Norma',
      link:
        'https://e-collection-icontec-org.bdigital.sena.edu.co/normavw.aspx?ID=2777',
    },
    {
      tema:
        '2.3 Normatividad y reglamentación del sector de agua potable y saneamiento básico.',
      referencia:
        'Instituto Colombiano de Normas Técnicas y Certificación [ICONTEC]. (2007). NTC 3933. <em>Método estándar para medición del flujo de agua en canal abierto, con canaletas Parshall</em>.',
      tipo: 'Norma',
      link:
        'https://e-collection-icontec-org.bdigital.sena.edu.co/normavw.aspx?ID=2976',
    },
    {
      tema: '3.2 Parámetros de calidad del agua.',
      referencia:
        'Instituto de Hidrología, Meteorología y Estudios Ambientales [IDEAM]. (2007). <em>Protocolo para el monitoreo y seguimiento del agua</em>.',
      tipo: 'Guía',
      link:
        'http://documentacion.ideam.gov.co/openbiblio/bvirtual/021172/Protocoloparaelmonitoreoyseguimientodelagua.pdf',
    },
    {
      tema: '3.2 Parámetros de calidad del agua.',
      referencia:
        'Instituto Nacional de Salud [INS]. (2011). <em>Documentación SIVICAP</em>.',
      tipo: 'Manual',
      link: 'https://www.ins.gov.co/sivicap/Documentacin%20SIVICAP',
    },
    {
      tema: '3.3 Aforo de caudal.',
      referencia:
        'Ministerio de Vivienda, Ciudad y Territorio. (2010). <em>Reglamento Técnico del Sector de Agua Potable y Saneamiento Básico - RAS</em>. Título B. ISBN: 978-958-8491-51-6',
      tipo: 'Norma',
      link:
        'https://www.minvivienda.gov.co/viceministerio-de-agua-y-saneamiento-basico/reglamento-tecnico-sector/reglamento-tecnico-del-sector-de-agua-potable-y-saneamiento-basico-ras',
    },
  ],
  glosario: [
    {
      termino: 'Aguas combinadas',
      significado:
        'aguas compuestas por aguas residuales y aguas pluviales. Resolución 0330 (2017).',
    },
    {
      termino: 'Aguas lluvias',
      significado:
        'aguas provenientes de la precipitación pluvial. Resolución 0330 (2017).',
    },
    {
      termino: 'Almacenamiento',
      significado:
        'acción destinada a almacenar un determinado volumen de agua para cubrir los picos horarios y la demanda contra incendios. Resolución 0330 (2017).',
    },
    {
      termino: 'Autoridad ambiental',
      significado:
        'se consideran como autoridades ambientales competentes, el Ministerio de Ambiente, Vivienda y Desarrollo Territorial, las Corporaciones Autónomas Regionales, Corporaciones de Desarrollo Sostenible, los municipios, distritos o áreas metropolitanas, cuya población urbana fuere igual o superior a un millón de habitantes (1.000.000) y las autoridades ambientales distritales a que refiere la última norma. Resolución 0330 (2017).',
    },
    {
      termino: 'Caja de inspección domiciliar',
      significado:
        'caja ubicada en el límite de la red pública y privada, que recoge las aguas residuales, lluvias o combinadas provenientes de un inmueble. Resolución 0330 (2017).',
    },
    {
      termino: 'Cámara o pozo de inspección',
      significado:
        'estructura, de forma usualmente cilíndrica, localizada al inicio o dentro de un tramo de alcantarillado, que permite acceso desde la superficie del terreno para inspección o mantenimiento de los conductos. Resolución 0330 (2017).',
    },
    {
      termino: 'Captación',
      significado:
        'conjunto de estructuras necesarias para tomar el agua de una fuente de abastecimiento. Resolución 0330 (2017).',
    },
    {
      termino: 'Caudal',
      significado:
        'cantidad de fluido que pasa por determinado elemento en la unidad de tiempo. Resolución 0330 (2017).',
    },
    {
      termino: 'Consumo',
      significado:
        'cantidad de agua utilizada por un usuario en un período determinado. Resolución 0330 (2017).',
    },
    {
      termino: 'Cuenca hidrográfica',
      significado:
        'superficie geográfica que drena hacia un punto determinado. Resolución 0330 (2017).',
    },
    {
      termino: 'Parámetro',
      significado:
        'es la línea que determina el límite de construcción permitida en una obra. Resolución 0330 (2017).',
    },
    {
      termino: 'Planta de tratamiento de agua potable (PTAP)',
      significado:
        'conjunto de obras, equipos y materiales necesarios para efectuar los procesos que permitan cumplir con las normas de calidad del agua potable. Resolución 0330 (2017).',
    },
    {
      termino: 'Red de distribución',
      significado:
        'conjunto de tuberías, accesorios y estructuras que conducen el agua desde el tanque de almacenamiento o planta de tratamiento hasta los puntos de consumo. Resolución 0330 (2017).',
    },
  ],
  referencias: [
    {
      referencia:
        'Cárdenas, D. y Patiño, F. (2010). <em>Estudios y diseños definitivos del sistema de agua potable de la comunidad de Tutucán, cantón paute, provincia del Azuay</em>. Facultad de ingeniería civil. México.',
      link: 'http://dspace.ucuenca.edu.ec/bitstream/123456789/725/1/ti853.pdf',
    },
    {
      referencia:
        'Dourojeanni, Axel. (1993). <em>Evolución de la gestión integral de cuencas en América Latina y el Caribe</em>. Chile.',
      link: '',
    },
    {
      referencia:
        'García, W. (2019). <em>El sistema complejo de la cuenca hidrográfica</em>. Universidad Nacional de Medellín.',
      link:
        'https://vdocuments.pub/sistema-complejo-de-la-cuenca-hidrografica-.html?page=1',
    },
    {
      referencia:
        'Instituto Colombiano de normas técnicas y certificación [ICONTEC]. (2007). NTC 3705, <em>Medición de flujo de agua en canal abierto con vertederos de placa fina</em>.',
      link: '',
    },
    {
      referencia:
        'Instituto Nacional de Salud [INS]. (2011). <em>Documentación SIVICAP</em>.',
      link: 'https://www.ins.gov.co/sivicap/Documentacin%20SIVICAP',
    },
    {
      referencia:
        'Jiménez, J. M. (s.f.). <em>Manual para el diseño de Sistemas de agua potable y Alcantarillado sanitario</em>.',
      link:
        'https://www.uv.mx/ingenieriacivil/files/2013/09/Manual-de-Diseno-para-Proyectos-de-Hidraulica.pdf',
    },
    {
      referencia:
        'Ministerio de Desarrollo Económico. (2017). <em>Reglamento Técnico del Sector de Agua Potable y Saneamiento Básico</em>. [RAS].',
      link:
        'https://www.minvivienda.gov.co/viceministerio-de-agua-y-saneamiento-basico/reglamento-tecnico-sector/reglamento-tecnico-del-sector-de-agua-potable-y-saneamiento-basico-ras',
    },
    {
      referencia:
        'Ministerio de Ambiente, Vivienda y Desarrollo Territorial. (2010). <em>Política Nacional para la Gestión Integral del Recurso Hídrico</em>. Bogotá, D.C. Colombia: Ministerio de Ambiente, Vivienda y Desarrollo Territorial.p.124.',
      link:
        'https://www.minambiente.gov.co/documento-entidad/politica-nacional-para-la-gestion-integral-del-recurso-hidrico/',
    },
    {
      referencia:
        'Mott, R. (2006). <em>Mecánica de fluidos</em>. Sexta edición. Pearson Education.',
      link: '',
    },
    {
      referencia:
        'Nadal R., Eugenio. (1993). <em>Introducción al análisis de la planificación hidrológica</em>. Madrid: MOPT.',
      link: '',
    },
    {
      referencia:
        'Territoriocartv. (2011). <em>Video institucional Car Cuencas hidrográficas</em>. [Video]. YouTube',
      link: 'https://www.youtube.com/watch?v=6vTI_HD36IY&t=1s',
    },
    {
      referencia:
        'Organización Mundial de la Salud [OMS]. (2011). <em>Guías para la calidad del agua de consumo humano</em>. Cuarta edición.',
      link:
        'https://apps.who.int/iris/bitstream/handle/10665/272403/9789243549958-spa.pdf?ua=1',
    },
    {
      referencia:
        'Sonsón Televisión Oficial. (2018). <em>Planes de ordenación y manejo de cuencas hidrográficas</em>. [Video]. YouTube.',
      link: 'https://www.youtube.com/watch?v=ZJMiCiXJKQQ',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizábal Gutiérrez',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de línea de producción',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Alix Cecilia Chinchilla Rueda',
          cargo: 'Adecuación instruccional - 2023',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Metodología para la formación virtual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable Línea de producción Distrito Capital -2023',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Xiomara Becerra Aldana',
          cargo: 'Instructora Ambiental',
          centro: 'Regional Distrito Capital - Centro de gestión industrial',
        },
        {
          nombre: 'Jesús Ricardo Munevar Arias',
          cargo: 'Instructor',
          centro: 'Regional Distrito Capital - Centro de gestión industria',
        },
        {
          nombre: 'Lubin Andrés Hernández Sanabria',
          cargo: 'Instructor',
          centro: 'Regional Distrito Capital - Centro de gestión industrial',
        },
        {
          nombre: 'Javier Ricardo Luna Pineda',
          cargo: 'Diseñador Instruccional',
          centro:
            'Regional Distrito Capital - Centro para la Industria de la Comunicación Gráfica',
        },
        {
          nombre: 'Silvia Milena Sequeda Cárdenas',
          cargo: 'Evaluador Instruccional',
          centro: 'Regional Distrito Capital - Centro de diseño y metrología',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor Pedagógico',
          centro:
            'Regional Distrito Capital - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Adriana lozano Zapata',
          cargo: 'Revisora de Estilo',
          centro:
            'Regional Distrito Capital - Centro para la Industria de la Comunicación Gráfica',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Eulises Orduz Amézquita',
          cargo: 'Diseño web-2023',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Luis Jesús Pérez Madariaga',
          cargo: 'Desarrollador Fullstack-2023',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Lady Adriana Ariza Luque',
          cargo: 'Animación y producción audiovisual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Laura Gisselle Murcia Pardo',
          cargo: 'Animación y producción audiovisual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animación y producción audiovisual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Evaluación de contenidos inclusivos y accesibles',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Lina Marcela Pérez Manchego',
          cargo: 'Validación de recursos educativos digitales',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Leyson Fabian Castaño Pérez',
          cargo: 'Validación de recursos educativos digitales',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
