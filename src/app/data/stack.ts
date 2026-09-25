import { IconName } from '../shared/icon.component';

export interface TechCell {
  n: string;
  nombre: string;
  nota: string;
  icons: IconName[];
}

export interface StackGrupo {
  titulo: string;
  items: TechCell[];
}

/** Agrupado por area: quince celdas seguidas no daban ninguna jerarquia. */
export const STACK: StackGrupo[] = [
  {
    titulo: 'Back-end',
    items: [
      { n: '01', nombre: 'Java', nota: 'POO · Acceso a datos', icons: ['java'] },
      { n: '02', nombre: 'Spring Boot', nota: 'APIs REST · JPA', icons: ['springboot'] },
      { n: '03', nombre: 'Python', nota: 'pandas · Automatización', icons: ['code'] },
      { n: '04', nombre: 'Node.js', nota: 'Tooling · npm', icons: ['node'] },
    ],
  },
  {
    titulo: 'Front-end',
    items: [
      { n: '05', nombre: 'Angular', nota: 'SPA · RxJS', icons: ['angular'] },
      { n: '06', nombre: 'TypeScript', nota: 'Tipado · Tooling', icons: ['typescript'] },
      { n: '07', nombre: 'JavaScript', nota: 'ES2023 · DOM', icons: ['javascript'] },
      { n: '08', nombre: 'HTML / CSS', nota: 'Grid · Responsive', icons: ['html5', 'css'] },
    ],
  },
  {
    titulo: 'Datos',
    items: [
      { n: '09', nombre: 'SQL', nota: 'Consultas · Modelado', icons: ['database'] },
      { n: '10', nombre: 'MySQL', nota: 'Relacional', icons: ['mysql'] },
      { n: '11', nombre: 'PostgreSQL', nota: 'Relacional', icons: ['database'] },
      { n: '12', nombre: 'MongoDB', nota: 'NoSQL · Documentos', icons: ['mongodb'] },
    ],
  },
  {
    titulo: 'Herramientas y plataformas',
    items: [
      { n: '13', nombre: 'Git / GitHub', nota: 'Ramas · PRs', icons: ['git'] },
      { n: '14', nombre: 'Power Platform', nota: 'Apps · Automate · Fx', icons: ['layers'] },
      { n: '15', nombre: 'Dataverse', nota: 'Modelo de datos · SharePoint', icons: ['database'] },
    ],
  },
];
