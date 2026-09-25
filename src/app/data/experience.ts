export interface TableRow {
  periodo: string;
  puesto: string;
  /** Empresa y ubicación; se muestra bajo el puesto. */
  empresa?: string;
  /** Resumen de una línea. */
  detalle: string;
  /** Desglose de tareas y logros, renderizado como lista. */
  logros?: string[];
}

export const EXPERIENCIA: TableRow[] = [
  {
    periodo: 'Mar 2026 — Jun 2026',
    puesto: 'Desarrollador Power Platform · Prácticas',
    empresa: 'Plexus Tech · España',
    detalle:
      'Desarrollo de aplicaciones internas sobre Office 365 y SharePoint para la gestión de tareas y el onboarding de empleados, participando desde la toma de requisitos hasta la entrega.',
    logros: [
      'Diseño del modelo de datos en SharePoint y Dataverse, definiendo entidades, relaciones y permisos, y resolviendo las consultas necesarias para cada vista.',
      'Implementación de la lógica de negocio en Power Fx y automatización de procesos manuales con Power Automate, sustituyendo el seguimiento en hojas de cálculo por flujos con registro automático.',
      'Construcción de las interfaces en Power Apps, cuidando que resultaran utilizables por personal sin perfil técnico.',
      'Pruebas, corrección de errores y ajuste de las aplicaciones a partir del feedback de los usuarios internos.',
      'Integración con el resto del ecosistema Office 365 (listas de SharePoint, correo y notificaciones), evitando duplicar la información entre herramientas.',
      'Gestión de permisos y roles de acceso a las aplicaciones y a los datos según el perfil de cada usuario.',
      'Documentación de las aplicaciones y de los flujos para que pudieran mantenerse y ampliarse por otras personas del equipo.',
      'Impacto: procesos que antes se seguían a mano en hojas de cálculo pasaron a quedar registrados de forma automática, reduciendo el trabajo repetitivo y los errores de seguimiento.',
    ],
  },
  {
    periodo: 'Sep 2024 — Abr 2026',
    puesto: 'Analista de Pagos y Riesgo · Trust & Safety',
    empresa: 'Accenture · Proyecto Meta · Dublín, Irlanda',
    detalle:
      'Gestión y análisis de casos de pagos y riesgo de usuarios y clientes internacionales de la plataforma, aplicando las políticas y los criterios de decisión definidos bajo objetivos estrictos de calidad y tiempos de respuesta.',
    logros: [
      'Evaluación de cada caso sobre la evidencia disponible, decisión de la acción a aplicar según su impacto y nivel de riesgo, y escalado de los casos más graves al equipo especializado.',
      'Detección de patrones de riesgo y fraude recurrentes entre casos, con documentación de los hallazgos y reporte a los equipos responsables.',
      'Registro completo y trazable de cada decisión en el sistema de gestión de casos, conforme a los estándares de calidad y auditoría, de modo que cualquier expediente pudiera revisarse a posteriori.',
      'Trabajo sujeto a revisión de calidad continua, lo que exigía mantener la precisión también en los periodos de mayor volumen de casos.',
      'Coordinación con distintos departamentos y equipos de soporte hasta el cierre de cada incidencia, manteniendo informadas a las partes implicadas.',
      'Priorización de la carga diaria según impacto y urgencia, gestionando el propio tiempo para cumplir los tiempos de respuesta comprometidos.',
      'Trabajo diario en inglés y español, con tratamiento de información confidencial y sensible en un entorno corporativo regulado.',
      'Impacto: cada decisión afectaba directamente a la protección del usuario final y a la integridad de la plataforma frente al fraude en pagos, en un servicio de alcance global.',
    ],
  },
];

export const FORMACION: TableRow[] = [
  {
    periodo: '2024 — 2026',
    puesto: 'Técnico Superior en Desarrollo de Aplicaciones Web',
    empresa: 'UNIR · FP de Grado Superior',
    detalle:
      'Ciclo formativo orientado al desarrollo completo de aplicaciones web, con proyecto final y prácticas en empresa.',
    logros: [
      'Back-end: programación orientada a objetos en Java, acceso a datos, desarrollo en entorno servidor y construcción de servicios y APIs REST.',
      'Front-end: HTML5, CSS3, JavaScript, TypeScript y Angular; diseño de interfaces web usables y adaptables a distintos dispositivos.',
      'Bases de datos: modelado relacional, SQL, administración de sistemas gestores y bases de datos no relacionales.',
      'Entornos y despliegue: control de versiones con Git, entornos de desarrollo, integración de sistemas y configuración de aplicaciones web.',
    ],
  },
  {
    periodo: 'Sep 2023 — Jun 2024',
    puesto: 'Diploma en Data Analytics for Business',
    empresa: 'CCT College Dublin · Irlanda',
    detalle:
      'Análisis y visualización de datos, SQL y elaboración de informes para la toma de decisiones.',
  },
];
