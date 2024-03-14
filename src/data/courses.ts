

import type { Cursos } from '../utils/CursoType';


export const dataCursos: Cursos = [{
  _id: 101,
  title: 'API 650 | Diseño de Tanques de Almacenamiento',
  descripcionCorta: 'Domina el diseño de tanques de almacenamiento siguiendo los estándares de API 650, desde conceptos básicos hasta aplicaciones avanzadas.',
  nivel: 'Intermedio',
  duracionHoras: 40,
  imagenURL: 'https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg',
  instructor: {
    _id: 1,
    nombre: 'Roberto',
    apellidos: 'González',
    profesion: 'Ingeniero Mecánico',
    especializacion: ['Diseño de tanques de almacenamiento', 'Normas API'],
    calificacionPromedio: 4.8,
    resenas_instructor: [
      { usuarioId: 1, comentario: 'Excelente dominio de las normas API y su aplicación práctica.', calificacion: 5, fecha: new Date() }
    ]
  },
  instructorId: 1,
  precio: 450,
  descuentos: 10,
  calificacion: 4.9,
  testimonios: [
    { usuarioId: 2, comentario: 'Curso esencial para entender el diseño según API 650, muy completo.', calificacion: 5, fecha: new Date() }
  ],
  aprenderas: ['Interpretar los estándares API 650', 'Diseñar tanques de almacenamiento seguros y eficientes', 'Aplicar consideraciones de diseño en proyectos reales'],
  objetivos: ['Conocer las bases del diseño de tanques de almacenamiento', 'Aplicar normas API 650 en proyectos de ingeniería'],
  dirigidoA: ['Ingenieros mecánicos', 'Diseñadores de equipos industriales', 'Profesionales en el área de proyectos industriales'],
  contenido: [
    {
      idModulo: 1,
      titleModulo: 'Fundamentos de los Tanques de Almacenamiento',
      unidades: [
        { title: 'Introducción a API 650', temas: ['Historia', 'Importancia'] },
        { title: 'Tipos de Tanques', temas: ['Tanques atmosféricos', 'Tanques de baja presión'] }
      ]
    },
    {
      idModulo: 2,
      titleModulo: 'Diseño de Tanques según API 650',
      unidades: [
        { title: 'Materiales', temas: ['Selección de materiales', 'Pruebas de materiales'] },
        { title: 'Diseño Estructural', temas: ['Cálculos de espesor', 'Refuerzos y soportes'] }
      ]
    },
    {
      idModulo: 3,
      titleModulo: 'Consideraciones de Fabricación y Montaje',
      unidades: [
        { title: 'Procesos de Fabricación', temas: ['Soldadura', 'Ensamblaje'] },
        { title: 'Inspección y Pruebas', temas: ['Pruebas hidrostáticas', 'Inspecciones no destructivas'] }
      ]
    }
  ],
  fechaLanzamiento: new Date('2023-06-15'),
  categoriaIds: [3],
  usuarios_inscritos: [4, 5, 6]
},

{
  _id: 102,
  title: 'ASME VIII | Diseño de Recipientes sometidos a Presión',
  descripcionCorta: 'Explora los principios de diseño de recipientes a presión conforme al código ASME Sección VIII, cubriendo desde la selección de materiales hasta las pruebas finales.',
  nivel: 'Intermedio',
  duracionHoras: 45,
  imagenURL:'https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg',
  instructor: {
    _id: 2,
    nombre: 'Mariana',
    apellidos: 'López',
    profesion: 'Ingeniera Industrial',
    especializacion: ['Recipientes a presión', 'Normativa ASME'],
    calificacionPromedio: 4.9,
    resenas_instructor: [
      { usuarioId: 3, comentario: 'Claridad en la explicación de conceptos complejos.', calificacion: 5, fecha: new Date() }
    ]
  },
  instructorId: 2,
  precio: 500,
  descuentos: 10,
  calificacion: 4.8,
  testimonios: [
    { usuarioId: 4, comentario: 'Profundiza en ASME VIII con ejemplos prácticos. Altamente recomendado.', calificacion: 5, fecha: new Date() }
  ],
  aprenderas: ['Manejar el código ASME Sección VIII', 'Diseñar recipientes a presión seguros', 'Realizar cálculos de diseño críticos'],
  objetivos: ['Dominar el código ASME Sección VIII para el diseño de recipientes a presión', 'Aplicar conocimientos en proyectos reales'],
  dirigidoA: ['Ingenieros de diseño mecánico', 'Profesionales en fabricación de equipos a presión', 'Inspectores de calidad'],
  contenido: [
    {
      idModulo: 1,
      titleModulo: 'Introducción a los Recipientes a Presión',
      unidades: [
        { title: 'Principios Básicos', temas: ['Definiciones', 'Aplicaciones'] },
        { title: 'Código ASME Sección VIII', temas: ['Historia', 'Estructura del código'] }
      ]
    },
    {
      idModulo: 2,
      titleModulo: 'Diseño de Recipientes a Presión',
      unidades: [
        { title: 'Selección de Materiales', temas: ['Criterios', 'Propiedades de materiales'] },
        { title: 'Cálculos de Diseño', temas: ['Cálculo de espesores', 'Consideraciones de carga'] }
      ]
    },
    {
      idModulo: 3,
      titleModulo: 'Fabricación, Inspección y Pruebas',
      unidades: [
        { title: 'Procesos de Fabricación', temas: ['Soldadura', 'Montaje'] },
        { title: 'Pruebas y Certificación', temas: ['Pruebas no destructivas', 'Certificación de calidad'] }
      ]
    }
  ],
  fechaLanzamiento: new Date('2023-07-01'),
  categoriaIds: [3],
  usuarios_inscritos: [7, 8]
},

{
  _id: 103,
  title: 'API 570 | Inspección y Reparación de Sistemas de Tuberías',
  descripcionCorta: 'Aprende a inspeccionar y reparar sistemas de tuberías industriales siguiendo los estándares API 570, incluyendo técnicas de inspección y criterios de reparación.',
  nivel: 'Intermedio',
  duracionHoras: 35,
  imagenURL:'https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg',
  instructor: {
    _id: 3,
    nombre: 'José',
    apellidos: 'Ramírez',
    profesion: 'Ingeniero Mecánico',
    especializacion: ['Inspección de tuberías', 'Normas API'],
    calificacionPromedio: 4.6,
    resenas_instructor: [
      { usuarioId: 5, comentario: 'Metodología clara y enfocada en la aplicación práctica.', calificacion: 4, fecha: new Date() }
    ]
  },
  instructorId: 3,
  precio: 400,
  descuentos: 10,
  calificacion: 4.7,
  testimonios: [
    { usuarioId: 6, comentario: 'Curso completo sobre inspección según API 570. Excelente enfoque práctico.', calificacion: 5, fecha: new Date() }
  ],
  aprenderas: ['Interpretar la normativa API 570', 'Identificar y reparar defectos en tuberías', 'Planificar programas de inspección y mantenimiento'],
  objetivos: ['Capacitar en la inspección y reparación de sistemas de tuberías industriales', 'Preparar para la certificación API 570'],
  dirigidoA: ['Ingenieros de mantenimiento', 'Inspectores de tuberías', 'Técnicos en instalaciones industriales'],
  contenido: [
    {
      idModulo: 1,
      titleModulo: 'Fundamentos de Inspección de Tuberías',
      unidades: [
        { title: 'Normativa API 570', temas: ['Introducción', 'Alcance y definiciones'] },
        { title: 'Tipos de Tuberías y Materiales', temas: ['Clasificación', 'Selección de materiales'] }
      ]
    },
    {
      idModulo: 2,
      titleModulo: 'Técnicas de Inspección y Evaluación',
      unidades: [
        { title: 'Métodos de Inspección', temas: ['Inspección visual', 'Pruebas no destructivas'] },
        { title: 'Evaluación de Defectos', temas: ['Criterios de aceptación', 'Técnicas de medición'] }
      ]
    },
    {
      idModulo: 3,
      titleModulo: 'Reparación y Mantenimiento de Tuberías',
      unidades: [
        { title: 'Técnicas de Reparación', temas: ['Soldadura', 'Reemplazo de secciones'] },
        { title: 'Programas de Mantenimiento', temas: ['Planificación', 'Ejecución y seguimiento'] }
      ]
    }
  ],
  fechaLanzamiento: new Date('2023-08-10'),
  categoriaIds: [3],
  usuarios_inscritos: [9, 10]
}];