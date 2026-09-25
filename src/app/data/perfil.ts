/** Datos de contacto y de perfil, en un único sitio para no repetirlos por las plantillas. */
export const CONTACTO = {
  email: 'Danielrodriguezmull@gmail.com',
  telefono: '+34 645 142 358',
  // Se usa para el href tel:, sin espacios.
  telefonoPlano: '+34645142358',
  ubicacion: 'Lanzarote, Canarias, España',
  github: 'https://github.com/Danielrguezm',
  linkedin: 'https://linkedin.com/in/danielrodriguezmullender',
} as const;

export interface Habilidad {
  nombre: string;
  descripcion: string;
}

export const HABILIDADES: Habilidad[] = [
  {
    nombre: 'Proactividad',
    descripcion: 'Propongo mejoras y no espero a que me asignen la siguiente tarea.',
  },
  {
    nombre: 'Resolución de problemas',
    descripcion: 'Analizo el fallo, busco la causa y pruebo hasta dar con la solución correcta.',
  },
  {
    nombre: 'Pensamiento crítico',
    descripcion: 'Cuestiono requisitos y soluciones antes de darlos por buenos.',
  },
  {
    nombre: 'Trabajo en equipo y comunicación',
    descripcion: 'Coordinación entre departamentos y claridad al explicar lo técnico.',
  },
  {
    nombre: 'Aprendizaje continuo',
    descripcion: 'Estudio y construyo proyectos fuera del horario de trabajo.',
  },
  {
    nombre: 'Organización',
    descripcion: 'Trabajo con plazos, prioridades y objetivos medidos.',
  },
];

export interface Dato {
  label: string;
  valor: string;
}

export const DATOS: Dato[] = [
  { label: 'Perfil', valor: 'Desarrollador Full Stack · Java / Angular' },
  { label: 'Ubicación', valor: 'Lanzarote, Canarias · Posibilidad de reubicación' },
  { label: 'Idiomas', valor: 'Español nativo · Inglés C1' },
  { label: 'Disponibilidad', valor: 'Incorporación inmediata' },
  { label: 'Otros', valor: 'Carné B y vehículo propio' },
];
