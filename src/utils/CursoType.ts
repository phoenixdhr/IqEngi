// Definiciones de tipos básicos para listas de strings. Estos están bien como están.
export type Aprenderas = string[];
export type Objetivos = string[];
export type Especializacion = string[];
export type CompromisosEducativos = string[];

// Testimonio de estudiantes sobre los cursos.
export interface Testimonio {
  nombre: string;
  comentario: string;
  calificacion: number; // Considera limitar este valor a un rango específico, por ejemplo, 1-5.
}

// Información detallada sobre el instructor de un curso.
export interface Instructor {
  nombre: string;
  apellidos: string;
  profesion: string;
  especializacion: Especializacion;
  cursosDictados: CompromisosEducativos;
  calificacion: number; // Igual que con Testimonio, podría ser útil limitar el rango.
  reseñas: string[]; // Considera usar un array de objetos si necesitas almacenar más que textos de reseñas, por ejemplo, para incluir calificaciones de las reseñas o fechas.
}

// Detalle de las unidades o módulos educativos dentro de un curso.
export interface UnidadEducativa {
  title: string;
  temas: string[]; // Esta estructura está bien si cada tema es simplemente un string. Si necesitas más detalle por tema, considera usar un objeto.
}

// Estructura de una lección dentro del curso, que incluye varias unidades educativas.
export interface EstructuraProgramaria {
  idModulo: number;
  titleModulo: string;
  temas: UnidadEducativa[]; // Aquí usas 'temas' para contener unidades educativas, considera renombrarlo a 'unidades' para mayor claridad.
}

// Definición de Categorías - Esto está bien estructurado para una gestión flexible de categorías.
export interface Categoria {
  id: number;
  nombre: string;
  descripcion?: string; // Opcional es una buena práctica para descripciones extendidas.
}

// Lista única de categorías - Buena práctica para evitar duplicidades y facilitar la gestión.
export const categoriasUnicas: Categoria[] = [
  // La implementación aquí es correcta. Asegúrate de mantenerla actualizada con todas las categorías usadas.
];

// Interface para los cursos, vinculando todos los elementos anteriores.
export interface Curso {
  id: number;
  title: string;
  descripcionCorta: string;
  nivel: 'Principiante' | 'Intermedio' | 'Avanzado';
  duracionHoras: number;
  imagenURL: string;
  instructor: Instructor;
  precio: number;
  descuentos?: number; // Considera especificar cómo se aplica este descuento, ¿es un porcentaje?
  precioDescontado?: number; // Podría calcularse automáticamente basado en el precio y descuentos.
  calificacion: number;
  testimonios: Testimonio[];
  aprenderas: Aprenderas;
  objetivos: Objetivos;
  dirigidoA: string[]; // Lista de audiencias objetivo. Bien estructurado.
  contenido: EstructuraProgramaria[];
  lanzamiento: Date;
  categoriaIds: number[]; // Relacionar con categorías por ID es una buena práctica para mantener la normalización.
}


export type Cursos = Array<Curso>;




