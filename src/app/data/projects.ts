import { IconName } from '../shared/icon.component';

export interface Project {
  numero: string;
  titulo: string;
  descripcion: string;
  chips: { icon: IconName; label: string }[];
  img: string;
  alt: string;
  /** 'icono' encaja la imagen entera sobre fondo claro, sin duotono. */
  encaje?: 'captura' | 'icono';
  /** Ausente cuando el proyecto no es público. */
  repo?: string;
  /** Ausente mientras no haya demo desplegada. */
  demo?: string;
}

export const PROJECTS: Project[] = [
  {
    numero: 'Proyecto 01',
    titulo: 'Arena.GG',
    descripcion:
      'Plataforma web de gestión de torneos de eSports. Desarrollo full stack con Angular en el front-end, Spring Boot y API REST en el back-end y PostgreSQL como base de datos.',
    chips: [
      { icon: 'angular', label: 'Angular' },
      { icon: 'springboot', label: 'Spring Boot' },
      { icon: 'java', label: 'Java' },
      { icon: 'database', label: 'PostgreSQL' },
    ],
    img: 'assets/img/proyecto-1.png',
    alt: 'Página de inicio de la plataforma Arena.GG',
    repo: 'https://github.com/Danielrguezm/arena-gg',
  },
  {
    numero: 'Proyecto 02',
    titulo: 'Tablero Kanban de gestión de tareas',
    descripcion:
      'Aplicación desarrollada sobre Power Platform que representa el estado de las tareas en un tablero Kanban, con movimiento entre columnas, asignación de responsables y seguimiento del avance de cada tarea.',
    chips: [
      { icon: 'layers', label: 'Power Apps' },
      { icon: 'zap', label: 'Power Automate' },
      { icon: 'database', label: 'SharePoint' },
    ],
    img: 'assets/img/proyecto-2.png',
    alt: 'Icono de un tablero Kanban',
    encaje: 'icono',
  },
  {
    numero: 'Proyecto 03',
    titulo: 'Onboarding de RR. HH.',
    descripcion:
      'Aplicación en Power Platform para la incorporación de empleados: ficha técnica y personal de cada trabajador, inventario del hardware asignado y del pendiente de entregar, control de las licencias de software activas, y solicitud de nuevo hardware y de licencias desde la propia aplicación.',
    chips: [
      { icon: 'layers', label: 'Power Apps' },
      { icon: 'database', label: 'Dataverse' },
      { icon: 'zap', label: 'Power Automate' },
    ],
    img: 'assets/img/proyecto-3.png',
    alt: 'Icono de una ficha de empleado con un apretón de manos',
    encaje: 'icono',
  },
  {
    numero: 'Proyecto 04',
    titulo: 'Bot de automatización de alertas',
    descripcion:
      'Aplicación en Python que consume APIs externas, procesa series de datos con pandas y envía alertas automáticas por correo mediante SMTP.',
    chips: [
      { icon: 'code', label: 'Python' },
      { icon: 'zap', label: 'Automatización' },
    ],
    img: 'assets/img/proyecto-4.png',
    alt: 'Icono de un robot',
    encaje: 'icono',
    repo: 'https://github.com/Danielrguezm/crypto-bot',
  },
];
