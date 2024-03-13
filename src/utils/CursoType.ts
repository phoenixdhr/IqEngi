// Definiciones de tipos básicos para listas de strings. Estos están bien como están.
export type Aprenderas = string[];
export type Objetivos = string[];
export type Especializacion = string[];
export type CompromisosEducativos = string[];

type id = number;



export interface Usuario {
  _id: id;
  nombre: string;
  apellidos: string;
  email: string;
  hashContraseña: string;
  rol: RolUsuario[]; // Suponiendo que los roles sean representados por strings
  perfil: Perfil;
  cursos_comprados_historial: id[]; // Array de IDs de cursos
  cursos_progreso: ProgresoCurso[]; // Array de objetos que representan el progreso en los cursos
}

type RolUsuario = 'estudiante' | 'instructor' | 'editor' | 'administrador';
type EstadoAccesoCurso = 'activo' | 'inactivo';


export interface Perfil {
  bio: string;
  ubicacion: string;
  imagenURL: string;
  contacto: string;
  intereses: string[]; // Array de intereses como strings
}

export interface CursoComprado  {
  cursoId: id;
  fechaCompra: Date; // O podrías usar Date si trabajas con objetos de fecha en lugar de cadenas.
  estadoAcceso: EstadoAccesoCurso;
};

export interface ProgresoCurso {
  cursoId: id; // ID del curso
  modulosCompletados: id[]; // Podría ser un array de IDs de módulos
  examenesEvaluacionesPasadas: boolean[]; // Suponiendo una representación simplificada con valores booleanos
  progresoTotal: number; // Porcentaje del total completado
}








// Interface para los cursos, vinculando todos los elementos anteriores.
export interface Curso {
  _id: id;
  title: string;
  descripcionCorta: string;
  nivel: 'Principiante' | 'Intermedio' | 'Avanzado';
  duracionHoras: number;
  imagenURL: string;
  instructor: Instructor;
  instructorId: id;
  precio: number;
  descuentos?: number; // Considera especificar cómo se aplica este descuento, ¿es un porcentaje?
  // precioDescontado?: number; // Podría calcularse automáticamente basado en el precio y descuentos.
  calificacion: number;
  testimonios: Testimonio[];
  aprenderas: Aprenderas;
  objetivos: Objetivos;
  dirigidoA: string[]; // Lista de audiencias objetivo. Bien estructurado.
  contenido: EstructuraProgramaria[];
  fechaLanzamiento: Date;
  categoriaIds: id[]; // Relacionar con categorías por ID es una buena práctica para mantener la normalización.
  usuarios_inscritos: id[] // id de los usuarios inscritos
}


// Testimonio de estudiantes sobre los cursos.
export interface Testimonio {
  usuarioId: id;
  comentario: string;
  calificacion: number,
  fecha: Date; // Considera limitar este valor a un rango específico, por ejemplo, 1-5.
}






// Información detallada sobre el instructor de un curso.
export interface Instructor {
  _id:id
  nombre: string;
  apellidos: string;
  profesion: string;
  especializacion: Especializacion;
  calificacionPromedio: number; // Igual que con Testimonio, podría ser útil limitar el rango.
  resenas_instructor: Reseña[]; // Considera usar un array de objetos si necesitas almacenar más que textos de reseñas, por ejemplo, para incluir calificaciones de las reseñas o fechas.
}


export interface Reseña {
  usuarioId: id;
  comentario: string;
  calificacion: number;
  fecha: Date
};







// Detalle de las unidades o módulos educativos dentro de un curso.
export interface UnidadEducativa {
  title: string;
  temas: string[]; // Esta estructura está bien si cada tema es simplemente un string. Si necesitas más detalle por tema, considera usar un objeto.
}

// Estructura de una lección dentro del curso, que incluye varias unidades educativas.
export interface EstructuraProgramaria {
  idModulo: id;
  titleModulo: string;
  unidades: UnidadEducativa[]; // Aquí usas 'temas' para contener unidades educativas, considera renombrarlo a 'unidades' para mayor claridad.
}






// Definición de Categorías - Esto está bien estructurado para una gestión flexible de categorías.
export interface Categoria {
  _id: id;
  nombre: string;
  descripcion?: string; // Opcional es una buena práctica para descripciones extendidas.
}







// Lista única de categorías - Buena práctica para evitar duplicidades y facilitar la gestión.
export const categoriasUnicas: Categoria[] = [
  // La implementación aquí es correcta. Asegúrate de mantenerla actualizada con todas las categorías usadas.
];




type EstadoOrden = 'pendiente' | 'procesando' | 'completada' | 'cancelada' | 'reembolsada';

export interface Orden {
  _id: id;
  usuarioId: id; // id de usuario
  cursos: id[]; // id de los cursos
  fechaCompra: Date;
  montoTotal: number;
  estado: EstadoOrden;
};




export type Cursos = Array<Curso>;