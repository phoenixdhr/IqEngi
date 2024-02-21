import type { Cursos } from '../utils/CursoType';

export const dataCursos: Cursos = [{
  id: 101,
  title: 'Introducción a la Electrónica',
  descripcionCorta: 'Aprende los fundamentos de la electrónica, desde teoría básica hasta aplicaciones prácticas.',
  nivel: 'Principiante',
  duracionHoras: 60,
  imagenURL:'https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg',
  instructor: {
    nombre: 'Laura',
    apellidos: 'Martínez',
    profesion: 'Ingeniera Electrónica',
    especializacion: ['Circuitos electrónicos', 'Microcontroladores'],
    cursosDictados: ['Electrónica para Principiantes', 'Microcontroladores Avanzados'],
    calificacion: 4.7,
    reseñas: ['Profundiza en conceptos complejos de forma sencilla.'],
  },
  precio: 300,
  descuentos: 15,
  precioDescontado: 255,
  calificacion: 4.85,
  testimonios: [
    {
      nombre: 'Jorge Navarro',
      comentario: 'Gran curso para empezar en electrónica. Muy completo.',
      calificacion: 5,
    },
  ],
  aprenderas: ['Diseñar circuitos básicos', 'Programar microcontroladores', 'Solucionar problemas comunes en electrónica'],
  objetivos: ['Comprender la electrónica básica', 'Aplicar conocimientos en proyectos de electrónica'],
  dirigidoA: ['Estudiantes de ingeniería', 'Aficionados a la electrónica', 'Profesionales buscando actualizar sus conocimientos'],
  contenido: [
    {
      idModulo: 1,
      titleModulo: 'Fundamentos de Electrónica',
      temas: [
        { title: 'Teoría Básica', temas: ['Voltaje', 'Corriente', 'Resistencia'] },
        { title: 'Componentes Electrónicos', temas: ['Resistencias', 'Capacitores', 'Inductores'] },
      ],
    },
    {
      idModulo: 2,
      titleModulo: 'Circuitos Electrónicos',
      temas: [
        { title: 'Ley de Ohm y Leyes de Kirchhoff', temas: ['Ley de Ohm', 'Leyes de Kirchhoff'] },
        { title: 'Análisis de Circuitos', temas: ['Métodos de análisis de circuitos', 'Circuitos en serie y paralelo'] },
      ],
    },
    {
      idModulo: 3,
      titleModulo: 'Introducción a los Microcontroladores',
      temas: [
        { title: '¿Qué es un Microcontrolador?', temas: ['Definición', 'Aplicaciones'] },
        { title: 'Programación de Microcontroladores', temas: ['Lenguajes de programación', 'Desarrollo de proyectos simples'] },
      ],
    },
  ],
  lanzamiento: new Date('2023-03-01'),
  categoriaIds: [1],
},

{
  id: 102,
  title: 'Electrónica Digital para Principiantes',
  descripcionCorta: 'Aprende los fundamentos de la electrónica digital, desde las puertas lógicas hasta la creación de circuitos complejos.',
  nivel: 'Principiante',
  duracionHoras: 50,
  imagenURL:'https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg',
  instructor: {
    nombre: 'Laura',
    apellidos: 'Martínez',
    profesion: 'Ingeniera Electrónica',
    especializacion: ['Electrónica Digital', 'Microcontroladores'],
    cursosDictados: ['Electrónica Básica', 'Microcontroladores para IoT'],
    calificacion: 4.7,
    reseñas: ['Didáctica y siempre dispuesta a resolver dudas', 'Los laboratorios en línea son increíbles'],
  },
  precio: 150,
  descuentos: 15,
  precioDescontado: 127.5,
  calificacion: 4.5,
  testimonios: [
    { nombre: 'Miguel Ángel Torres', comentario: 'Gran introducción a la electrónica digital, muy recomendado para quienes empiezan.', calificacion: 5 },
  ],
  aprenderas: ['Funcionamiento de las puertas lógicas', 'Diseño y simulación de circuitos digitales', 'Principios de los microcontroladores'],
  objetivos: ['Comprender la lógica detrás de la electrónica digital', 'Ser capaz de diseñar circuitos digitales básicos'],
  dirigidoA: ['Estudiantes de ingeniería', 'Aficionados a la electrónica'],
  contenido: [
    {
      idModulo: 1,
      titleModulo: 'Introducción a la Electrónica Digital',
      temas: [
        { title: 'Historia y Fundamentos', temas: ['Origen de la electrónica digital', 'Diferencias entre electrónica analógica y digital'] },
        { title: 'Puertas Lógicas', temas: ['AND', 'OR', 'NOT'] },
      ],
    },
    {
      idModulo: 2,
      titleModulo: 'Circuitos Combinacionales',
      temas: [
        { title: 'Conceptos Básicos', temas: ['Definición', 'Aplicaciones'] },
        { title: 'Diseño de Circuitos', temas: ['Sumadores', 'Multiplexores'] },
      ],
    },
    {
      idModulo: 3,
      titleModulo: 'Introducción a los Microcontroladores',
      temas: [
        { title: '¿Qué es un Microcontrolador?', temas: ['Definición', 'Componentes básicos'] },
        { title: 'Programación de Microcontroladores', temas: ['Lenguajes utilizados', 'Ejemplo básico de programación'] },
      ],
    },
  ],
  lanzamiento: new Date('2023-03-01'),
  categoriaIds: [1], // Pertenece a la categoría de Ingeniería Eléctrica
},

{
  id: 103,
  title: 'Introducción a las Energías Renovables',
  descripcionCorta: 'Explora las diferentes fuentes de energía renovable, su impacto ambiental y su rol en el futuro energético sostenible.',
  nivel: 'Principiante',
  duracionHoras: 60,
  imagenURL:'https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg',
  instructor: {
    nombre: 'Carlos',
    apellidos: 'Hernández',
    profesion: 'Ingeniero Ambiental',
    especializacion: ['Energías Renovables', 'Impacto Ambiental'],
    cursosDictados: ['Gestión Ambiental', 'Tecnologías Limpias'],
    calificacion: 4.8,
    reseñas: ['Explicaciones claras y concisas', 'Gran conocimiento en sostenibilidad'],
  },
  precio: 200,
  descuentos: 20,
  precioDescontado: 160,
  calificacion: 4.6,
  testimonios: [
    { nombre: 'Sofía Paredes', comentario: 'Curso esencial para entender el panorama actual de las energías renovables.', calificacion: 5 },
  ],
  aprenderas: ['Tipos de energías renovables', 'Beneficios ambientales de las energías limpias', 'Tecnologías emergentes en energía sostenible'],
  objetivos: ['Identificar las principales fuentes de energía renovable', 'Evaluar el impacto ambiental de diferentes tecnologías energéticas'],
  dirigidoA: ['Estudiantes de ciencias ambientales', 'Profesionales interesados en sostenibilidad'],
  contenido: [
    {
      idModulo: 1,
      titleModulo: 'Fundamentos de las Energías Renovables',
      temas: [
        { title: 'Solar', temas: ['Paneles solares', 'Energía fotovoltaica vs. termosolar'] },
        { title: 'Eólica', temas: ['Turbina eólica', 'Parques eólicos'] },
      ],
    },
    {
      idModulo: 2,
      titleModulo: 'Impacto Ambiental y Sostenibilidad',
      temas: [
        { title: 'Beneficios de las Energías Renovables', temas: ['Reducción de emisiones', 'Conservación de recursos naturales'] },
        { title: 'Desafíos y Soluciones', temas: ['Almacenamiento de energía', 'Integración en la red eléctrica'] },
      ],
    },
    {
      idModulo: 3,
      titleModulo: 'Tecnologías Emergentes',
      temas: [
        { title: 'Innovaciones en Energía Solar', temas: ['Paneles solares de tercera generación', 'Pinturas solares'] },
        { title: 'Futuro de la Energía Eólica', temas: ['Turbina eólica sin aspas', 'Eólica marina flotante'] },
      ],
    },
  ],
  lanzamiento: new Date('2023-05-20'),
  categoriaIds: [2], // Pertenece a la categoría de Desarrollo Sostenible
}

]





