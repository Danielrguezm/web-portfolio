import { IconName } from '../shared/icon.component';

export interface TechCell {
  n: string;
  nombre: string;
  nota: string;
  icons: IconName[];
}

export const STACK: TechCell[] = [
  { n: '01', nombre: 'Java', nota: 'Backend · POO', icons: ['java'] },
  { n: '02', nombre: 'Spring Boot', nota: 'APIs REST · JPA', icons: ['springboot'] },
  { n: '03', nombre: 'Angular', nota: 'SPA · RxJS', icons: ['angular'] },
  { n: '04', nombre: 'TypeScript', nota: 'Tipado · Tooling', icons: ['typescript'] },
  { n: '05', nombre: 'JavaScript', nota: 'ES2023 · DOM', icons: ['javascript'] },
  { n: '06', nombre: 'HTML / CSS', nota: 'Grid · Responsive', icons: ['html5', 'css'] },
  { n: '07', nombre: 'Python', nota: 'pandas · Automatización', icons: ['code'] },
  { n: '08', nombre: 'Node.js', nota: 'Tooling · npm', icons: ['node'] },
  { n: '09', nombre: 'SQL', nota: 'Consultas · Modelado', icons: ['database'] },
  { n: '10', nombre: 'MySQL', nota: 'Relacional', icons: ['mysql'] },
  { n: '11', nombre: 'PostgreSQL', nota: 'Relacional', icons: ['database'] },
  { n: '12', nombre: 'MongoDB', nota: 'NoSQL · Documentos', icons: ['mongodb'] },
  { n: '13', nombre: 'Git / GitHub', nota: 'Ramas · PRs', icons: ['git'] },
  { n: '14', nombre: 'Power Platform', nota: 'Apps · Automate · Fx', icons: ['layers'] },
  { n: '15', nombre: 'Office 365', nota: 'SharePoint · Dataverse · Excel', icons: ['layers'] },
];
