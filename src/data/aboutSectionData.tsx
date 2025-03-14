// Company Values Interface
export interface CompanyValue {
  title: string;
  description: string;
}

// Beliefs Interface
export interface Belief {
  icon: string;
  title: string;
}

// Company Values Data
export const companyValues: CompanyValue[] = [
  {
    title: "Actitud de dueño",
    description: "Comprometido con el resultado, conoce con profundidad lo que hace y tiene una visión del todo. Actúa con obstinación, disciplina y enfoque en los detalles."
  },
  {
    title: "Humildad",
    description: "Sabe escuchar, es atento, considera la opinión de los demás, no le importa quién hizo algo, sino lo que todos hicimos. No tiene vergüenza de preguntar ni de decir que no sabe."
  },
  {
    title: "Franqueza",
    description: "Es directo, sincero, verdadero y transparente en sus relaciones, siempre con respeto, de forma positiva, agregadora y acogedora."
  },
  {
    title: "Disponibilidad",
    description: "Es receptivo, accesible, disponible, cualquier momento es bueno, siempre está preparado y considera el trabajo una prioridad."
  },
  {
    title: "Disciplina",
    description: "Cumple lo combinado, es puntual con el horario y sus compromisos. Realiza sus tareas de forma disciplinada. Es enfocado, pragmático, optimiza el tiempo."
  },
  {
    title: "Determinación",
    description: "Es obstinado, entrega resultados superiores y cumple sus compromisos. Hace que las cosas sucedan, busca alternativas para los problemas y compromete a las personas en la búsqueda de un objetivo común."
  },
  {
    title: "Simplicidad",
    description: "Hace que las cosas sucedan de manera simple y práctica, pone manos a la obra, va derecho al punto, descomplica y desburocratiza, respetando las normas."
  }
];

// Beliefs Data
export const beliefs: Belief[] = [
  {
    icon: "foco.png",
    title: "Enfoque en el detalle"
  },
  {
    icon: "mao-na-massa.png",
    title: "Manos a la obra"
  },
  {
    icon: "conquistas.png",
    title: "Las cosas solamente se conquistan con mucho trabajo"
  },
  {
    icon: "pessoa.png",
    title: "La persona correcta en el lugar correcto"
  },
  {
    icon: "paixao.png",
    title: "Pasión por lo que hace"
  },
  {
    icon: "atitude.png",
    title: "La actitud es más importante que el conocimiento"
  },
  {
    icon: "lider.png",
    title: "El líder es quien tiene que conquistar a sus liderados"
  },
  {
    icon: "liderar.png",
    title: "Liderar con el ejemplo"
  },
  {
    icon: "resultado.png",
    title: "Enfoque en el resultado"
  },
  {
    icon: "acreditar.png",
    title: "Creer es un factor de diferencia"
  },
  {
    icon: "produtos.png",
    title: "Productos y servicios de calidad"
  }
];