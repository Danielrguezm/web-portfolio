import { IconName } from '../shared/icon.component';

export interface Project {
  numero: string;
  titulo: string;
  descripcion: string;
  chips: { icon: IconName; label: string }[];
  img: string;
  alt: string;
  repo: string;
  demo: string;
}

export const PROJECTS: Project[] = [
  {
    numero: 'Proyecto 01',
    titulo: 'Gestor de tareas',
    descripcion:
      'Aplicación de tableros con autenticación JWT, roles y notificaciones. API en Spring Boot y frontend en Angular.',
    chips: [
      { icon: 'java', label: 'Java' },
      { icon: 'springboot', label: 'Spring Boot' },
      { icon: 'angular', label: 'Angular' },
      { icon: 'mysql', label: 'MySQL' },
    ],
    img: 'assets/img/proyecto-1.svg',
    alt: 'Captura del gestor de tareas',
    repo: 'https://github.com/',
    demo: '#',
  },
];
