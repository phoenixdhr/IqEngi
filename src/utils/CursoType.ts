// Definiciones de tipos básicos permanecen sin cambios.

export type CompromisosEducativos = string[];

type id = string; // Cambiado a string para reflejar el uso de MongoDB ObjectId.

export interface Usuario {
  _id: id;
  nombre: string;
  apellidos: string;
  email: string;
  hashContraseña: string; // Ajuste de nombre para mantener consistencia
  rol: RolUsuario[]; // Suponiendo que los roles sean representados por strings
  perfil: Perfil;
  cursos_comprados_historial: CursoComprado[]; // Ajustado según la descripción
  curso_progreso: id[] //id de Cursos
}

type RolUsuario = 'estudiante' | 'instructor' | 'editor' | 'administrador';
type EstadoAccesoCurso = 'activo' | 'inactivo';

export interface Perfil {
  bio: string;
  ubicacion: string;
  imagenURL: string;
  contacto: string;
  intereses: string[];
}

export interface CursoComprado  {
  cursoId: id;
  fechaCompra: Date;
  estadoAcceso: EstadoAccesoCurso;
};

export interface ProgresoCurso {
  _id: id;
  usuarioId: id;
  cursoId: id;
  modulosCompletados: number[]; // Cambiado a reflejar IDs de módulos
  examenesEvaluacionesPasadas: boolean[];
  progresoTotal: number;
}

type nivel = 'Principiante' | 'Intermedio' | 'Avanzado';

export interface Curso {
  _id: id;
  title: string;
  descripcionCorta: string;
  nivel: nivel;
  instructor: InstructorCurso,
  duracionHoras: number;
  imagenURL: string;
  precio: number;
  descuentos?: number;
  calificacion: number;
  aprenderas: string[];
  objetivos: string[];
  dirigidoA: string[];
  contenido: EstructuraProgramaria[];
  fechaLanzamiento: Date;
  categoriaIds: id[];
  usuarios_inscritos: id[]; // Reflejando la relación con usuarios inscritos.


}



// InstructorCurso y Instructor usan informacion duplicada
type  InstructorCurso = {
  _id: id;
  nombre: string;
  apellidos: string;
  profesion: string;
  especializacion: string[];
}

export interface Instructor {
  _id: id;
  nombre: string;
  apellidos: string;
  profesion: string;
  especializacion: string[];
  calificacionPromedio: number;
	  pais: string;
}

export interface EstructuraProgramaria {
  idModulo: number;
  titleModulo: string;
  unidades: UnidadEducativa[];
}

export interface UnidadEducativa {
  title: string;
  temas: string[];
}


export interface Testimonio {
  _id: id;
  cursoId: id;
  usuarioId: id;
  comentario: string;
  calificacion: number;
  fecha: Date;
}


export interface Categoria {
  _id: id;
  nombre: string;
  descripcion?: string;
}

export const categoriasUnicas: Categoria[] = [];

type EstadoOrden = 'pendiente' | 'procesando' | 'completada' | 'cancelada' | 'reembolsada';

export interface Orden {
  _id: id;
  usuarioId: id;
  cursos: id[];
  fechaCompra: Date;
  montoTotal: number;
  estado: EstadoOrden;
};

export type Cursos = Array<Curso>;




