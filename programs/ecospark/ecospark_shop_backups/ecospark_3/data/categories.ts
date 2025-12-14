import { Category } from './types';

export const categories: Category[] = [
  {
    slug: 'zero-waste',
    name: 'Zero Waste Essentials',
    description: 'Praktische Produkte für einen plastikfreien Alltag',
    seoTitle: 'Zero Waste Essentials – Plastikfreie Alternativen | EcoSpark',
    seoDescription: 'Entdecke nachhaltige Zero-Waste-Produkte: Bienenwachstücher, Bambus-Besteck, wiederverwendbare Pads und mehr für einen plastikfreien Alltag.',
  },
  {
    slug: 'eco-gadgets',
    name: 'Eco Gadgets',
    description: 'Innovative nachhaltige Gadgets für den Alltag',
    seoTitle: 'Eco Gadgets – Nachhaltige Technik & Innovationen | EcoSpark',
    seoDescription: 'Solar-Gadgets, Handkurbel-Lampen, Holz-Gadgets und weitere innovative nachhaltige Produkte für deinen Alltag.',
  },
  {
    slug: 'grow-green',
    name: 'Grow & Green',
    description: 'Lass es wachsen – kleine Naturmomente für deinen Alltag',
    seoTitle: 'Grow & Green – Pflanzbare Produkte & Mini-Grow-Kits | EcoSpark',
    seoDescription: 'Seedbombs, Mini-Grow-Kits, pflanzbare Stifte und weitere grüne Produkte, die wachsen und gedeihen.',
  },
  {
    slug: 'upcycling',
    name: 'Upcycling & Recycled',
    description: 'Aus Alt mach Neu – nachhaltige Upcycling-Produkte',
    seoTitle: 'Upcycling & Recycled Produkte – Aus Alt mach Neu | EcoSpark',
    seoDescription: 'Wallet aus Reifen, Ozeanplastik-Accessoires und weitere innovative Upcycling-Produkte mit Geschichte.',
  },
  {
    slug: 'gifts',
    name: 'Eco Gift Ideas',
    description: 'Nachhaltige Geschenkideen für jeden Anlass',
    seoTitle: 'Eco Gift Ideas – Nachhaltige Geschenksets & Starter-Sets | EcoSpark',
    seoDescription: 'Entdecke nachhaltige Geschenksets, Starter-Sets und individuelle Geschenkideen für umweltbewusste Menschen.',
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find(cat => cat.slug === slug);
}



