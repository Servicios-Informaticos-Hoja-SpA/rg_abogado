export interface LegalCause {
  id: string;
  name: string;
  area: 'familia' | 'penal';
  isDirect: boolean;
  isUrgency?: boolean;
  conditionDescription?: string;
  checkboxLabel?: string;
  templateSubject: string;
  requirementSummary: string;
}

export const OFFICIAL_PHONE = '+56984249110';
export const OFFICIAL_EMAIL = 'contacto@ricardoguzman.cl';
export const OFFICIAL_DOMAIN = 'ricardoguzman.cl';

export const COMMUNES = [
  // Región Metropolitana (Principales)
  'Santiago (Centro)',
  'Las Condes / Vitacura / Lo Barnechea',
  'Providencia / Ñuñoa',
  'La Reina / Peñalolén',
  'La Florida / Macul / San Joaquín',
  'Maipú / Pudahuel / Estación Central',
  'San Bernardo / Puente Alto',
  'Colina / Chicureo / Lampa',
  'Otra comuna de la Región Metropolitana',
  // Región de Valparaíso (Principales)
  'Viña del Mar',
  'Valparaíso',
  'Concón',
  'Quilpué / Villa Alemana',
  'Quillota / Calera',
  'San Antonio',
  'Otra comuna de la Región de Valparaíso',
  // Resto del país (Atención telemática)
  'Otra región de Chile (Atención telemática)',
];

export const CAUSES_DATA: LegalCause[] = [
  // DERECHO DE FAMILIA
  {
    id: 'pension-alimentos',
    name: 'Demanda de pensión de alimentos',
    area: 'familia',
    isDirect: false,
    conditionDescription: 'Conforme al Art. 106 de la Ley 19.968, la demanda requiere obligatoriamente haber realizado una mediación previa que haya resultado frustrada. Sin el Acta de Mediación Frustrada oficial emitida por un centro autorizado, el tribunal no dará curso a la demanda.',
    checkboxLabel: 'Dispongo del Acta de Mediación Frustrada o la estoy tramitando actualmente.',
    templateSubject: 'Demanda de pensión de alimentos',
    requirementSummary: 'Cuenta con mediación previa frustrada (Art. 106 Ley 19.968).',
  },
  {
    id: 'modificacion-alimentos',
    name: 'Aumento, rebaja o cese de alimentos',
    area: 'familia',
    isDirect: false,
    conditionDescription: 'Para demandar la modificación o cese de una pensión previamente fijada, se requiere: 1) Acta de mediación previa frustrada y 2) Copia de la sentencia judicial o acuerdo previo vigente que fijó la pensión.',
    checkboxLabel: 'Cuento con la sentencia o acuerdo vigente y el acta de mediación frustrada.',
    templateSubject: 'Aumento, rebaja o cese de pensión de alimentos',
    requirementSummary: 'Dispone de mediación previa frustrada y resolución judicial/acuerdo vigente.',
  },
  {
    id: 'cobro-alimentos-apremios',
    name: 'Cobro de deuda de alimentos y apremios',
    area: 'familia',
    isDirect: true,
    conditionDescription: 'Para tramitar liquidaciones forzadas, retención de fondos o inscripción en el Registro Nacional de Deudores (Ley 21.389), es necesario contar con una pensión decretada o una liquidación practicada por el tribunal.',
    checkboxLabel: 'Cuento con pensión judicialmente decretada o liquidación practicada.',
    templateSubject: 'Cobro de deuda de alimentos y apremios',
    requirementSummary: 'Dispone de pensión judicialmente decretada o liquidación practicada.',
  },
  {
    id: 'cuidado-personal',
    name: 'Cuidado personal (Tuición)',
    area: 'familia',
    isDirect: false,
    conditionDescription: 'La ley exige someter la controversia sobre cuidado personal a un proceso de mediación previa obligatoria antes de interponer la demanda judicial.',
    checkboxLabel: 'Dispongo de acta de mediación previa frustrada sobre cuidado personal.',
    templateSubject: 'Cuidado personal',
    requirementSummary: 'Dispone de acta de mediación previa frustrada.',
  },
  {
    id: 'relacion-directa-regular',
    name: 'Relación directa y regular (Visitas)',
    area: 'familia',
    isDirect: false,
    conditionDescription: 'Tanto la fijación como la modificación del régimen comunicacional entre padres e hijos requiere acreditación de mediación previa frustrada.',
    checkboxLabel: 'Dispongo de acta de mediación previa frustrada sobre régimen comunicacional.',
    templateSubject: 'Relación directa y regular',
    requirementSummary: 'Dispone de acta de mediación previa frustrada.',
  },
  {
    id: 'divorcio-comun-acuerdo',
    name: 'Divorcio de común acuerdo',
    area: 'familia',
    isDirect: true,
    conditionDescription: 'El divorcio de mutuo acuerdo requiere acreditar al menos 1 año de cese efectivo e ininterrumpido de la convivencia conyugal y redactar un acuerdo completo y suficiente.',
    checkboxLabel: 'Ambos cónyuges están de acuerdo y se cumple al menos 1 año de cese de convivencia acreditable.',
    templateSubject: 'Divorcio de común acuerdo',
    requirementSummary: 'Mutuo acuerdo acreditado y cese de convivencia superior a 1 año.',
  },
  {
    id: 'divorcio-unilateral',
    name: 'Divorcio unilateral',
    area: 'familia',
    isDirect: false,
    conditionDescription: 'Al no existir acuerdo entre las partes, la Ley de Matrimonio Civil exige acreditar fehacientemente un cese de convivencia continuo de al menos 3 años (mediante acta formal de cese, notificaciones judiciales o matrimonio previo a 2004).',
    checkboxLabel: 'Cumplo con el requisito de 3 o más años de cese de convivencia acreditable.',
    templateSubject: 'Divorcio unilateral',
    requirementSummary: 'Cumple con plazo superior a 3 años de cese de convivencia acreditable.',
  },
  {
    id: 'vif-familia',
    name: 'Violencia Intrafamiliar (VIF) ante Tribunal de Familia',
    area: 'familia',
    isDirect: false,
    conditionDescription: 'Las controversias por VIF exigen revisión personal prioritaria por la eventual vigencia de medidas cautelares (prohibición de acercamiento, exclusión del hogar) y la determinación de competencia frente a sede penal.',
    checkboxLabel: 'Cuento con antecedentes de la denuncia o medidas cautelares notificadas para revisión técnica.',
    templateSubject: 'VIF ante Tribunal de Familia',
    requirementSummary: 'Antecedentes de denuncia y/o medidas cautelares listos para revisión personal.',
  },

  // DERECHO PENAL
  {
    id: 'defensa-formalizacion',
    name: 'Defensa en investigación y formalización',
    area: 'penal',
    isDirect: false,
    conditionDescription: 'Por estándar de diligencia procesal y preparación de la teoría del caso, asumimos audiencias con un mínimo de 3 días hábiles antes de su celebración, a fin de obtener la copia de la carpeta fiscal y coordinar los medios de prueba.',
    checkboxLabel: 'La audiencia está fijada con al menos 3 días hábiles de margen o la causa se encuentra en etapa de citación/investigación.',
    templateSubject: 'Defensa en investigación y formalización',
    requirementSummary: 'Cuenta con margen mínimo de 3 días hábiles antes de audiencia o causa en investigación.',
  },
  {
    id: 'control-detencion',
    name: 'Control de detención (Urgencia procesal)',
    area: 'penal',
    isDirect: false,
    isUrgency: true,
    conditionDescription: 'El plazo legal para pasar a control de detención ante el Juzgado de Garantía es de máximo 24 horas. Se requiere comunicación inmediata telefónica o por mensajería prioritaria.',
    checkboxLabel: 'Familiar o representado privado de libertad en las últimas 24 horas.',
    templateSubject: 'URGENCIA PENAL: Control de detención',
    requirementSummary: 'URGENCIA INMEDIATA · Control de detención en curso.',
  },
  {
    id: 'querella-victima',
    name: 'Querella penal por víctima',
    area: 'penal',
    isDirect: false,
    conditionDescription: 'Para redactar e interponer una querella criminal (delitos patrimoniales, estafas, lesiones, apropiaciones indebidas), se requiere constancia de denuncia previa ante Fiscalía, Carabineros o PDI y antecedentes probatorios de respaldo.',
    checkboxLabel: 'Cuento con la denuncia previa formulada y antecedentes documentales de los hechos.',
    templateSubject: 'Querella penal por víctima',
    requirementSummary: 'Denuncia previa formulada y antecedentes probatorios listos para estudio.',
  },
  {
    id: 'delitos-transito',
    name: 'Delitos Ley 18.290 (Conducción en estado de ebriedad)',
    area: 'penal',
    isDirect: true,
    conditionDescription: 'Asesoría técnica en suspensiones condicionales, discusión de alcoholemia/alcohotest y cautela de licencias de conducir ante Juzgados de Garantía.',
    checkboxLabel: 'Cuento con citación judicial o comprobante de procedimiento policial.',
    templateSubject: 'Ley 18.290 (Conducción en estado de ebriedad)',
    requirementSummary: 'Dispone de citación judicial o comprobante de procedimiento policial.',
  },
  {
    id: 'recursos-penales',
    name: 'Recursos penales (Apelación, Nulidad, Amparo)',
    area: 'penal',
    isDirect: false,
    conditionDescription: 'Los recursos penales están sometidos a plazos fatales perentorios (5 días para apelación, 10 días para nulidad). Se requiere copia íntegra de la resolución judicial a impugnar.',
    checkboxLabel: 'La resolución judicial se encuentra dentro del plazo legal vigente y cuento con copia íntegra.',
    templateSubject: 'Recursos penales (Apelación / Nulidad / Amparo)',
    requirementSummary: 'Resolución judicial dentro de plazo legal perentorio y copia disponible para análisis inmediato.',
  },
];

export function buildWhatsAppLink(params: {
  causeId: string;
  name: string;
  commune: string;
  preference: string;
  details?: string;
  confirmedCondition?: boolean;
}): string {
  const cause = CAUSES_DATA.find((c) => c.id === params.causeId);
  const areaTitle = cause?.area === 'penal' ? 'DERECHO PENAL' : 'DERECHO DE FAMILIA';
  const materiaName = cause ? cause.name : params.causeId;
  const requirementText = cause?.requirementSummary ?? 'Antecedentes en proceso de recopilación.';
  const detailsClean = params.details && params.details.trim().length > 0 ? params.details.trim() : 'Sin detalles adicionales especificados.';

  const message = [
    `*CONSULTA PROFESIONAL · ${areaTitle}*`,
    `*Materia:* ${materiaName}`,
    `*Cliente:* ${params.name.trim()}`,
    `*Comuna:* ${params.commune} (${params.preference})`,
    `*Requisito / Estado:* ${requirementText}`,
    `*Resumen preliminar:* ${detailsClean}`,
    `---`,
    `Estimado abogado Ricardo Guzmán, solicito formalmente evaluar la viabilidad de mi causa.`,
  ].join('\n');

  // Quitar el '+' para wa.me
  const cleanPhone = OFFICIAL_PHONE.replace(/[^0-9]/g, '');
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
}

export function buildUrgencyWhatsAppLink(details?: {
  place?: string;
  detaineeName?: string;
  commune?: string;
}): string {
  const lines = [
    `*URGENCIA PENAL · CONTROL DE DETENCIÓN*`,
    `Requiero asistencia jurídica inmediata para una persona privada de libertad.`,
    details?.detaineeName ? `*Detenido(a):* ${details.detaineeName}` : `*Detenido(a):* A especificar`,
    details?.place ? `*Lugar (Comisaría/Juzgado):* ${details.place}` : `*Lugar:* A coordinar`,
    details?.commune ? `*Comuna:* ${details.commune}` : `*Comuna:* Santiago / Viña del Mar`,
  ];
  const cleanPhone = OFFICIAL_PHONE.replace(/[^0-9]/g, '');
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(lines.join('\n'))}`;
}
