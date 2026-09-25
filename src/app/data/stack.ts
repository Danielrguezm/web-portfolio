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
  { n: '07', nombre: 'SQL', nota: 'Consultas · Modelado', icons: ['database'] },
  { n: '08', nombre: 'MySQL', nota: 'Relacional', icons: ['mysql'] },
  { n: '09', nombre: 'MongoDB', nota: 'NoSQL · Documentos', icons: ['mongodb'] },
  { n: '10', nombre: 'Git / GitHub', nota: 'Ramas · PRs', icons: ['git'] },
];
