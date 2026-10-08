// Temas do blog. Cada post escolhe um ou dois no campo `topics` do index.md.
export const topics = ['Instagram e redes', 'Marca e estratégia', 'Vendas', 'Inteligência artificial', 'Para profissionais'] as const;
export type Topic = (typeof topics)[number];
