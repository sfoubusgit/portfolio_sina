import Link from 'next/link';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getCategoryBySlug, categories } from '@/data/categories';
import { getProductsByCategory } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import Button from '@/components/Button';

interface CategoryPageProps {
  params: {
    slug: string;
  };
}

// Category-specific content mapping
const categoryContent: Record<string, {
  heroTitle: string;
  heroSubtitle: string;
  seoIntro: string[];
  idealFor: string[];
  ctaText: string;
}> = {
  'zero-waste': {
    heroTitle: 'Zero Waste Essentials',
    heroSubtitle: 'Nachhaltige Alternativen für deinen plastikfreien Alltag.',
    seoIntro: [
      'Unsere Zero-Waste-Essentials helfen dir dabei, deinen Alltag Schritt für Schritt nachhaltiger zu gestalten. Ob Küche, Bad oder unterwegs – jedes Produkt ist darauf ausgelegt, Müll zu reduzieren und Ressourcen zu schonen.',
      'Wir setzen auf natürliche Materialien, langlebige Verarbeitung und wiederverwendbare Designs. So wird Zero Waste nicht zur Herausforderung, sondern zum einfachen Teil deiner täglichen Routinen.',
    ],
    idealFor: [
      'du weniger Plastik im Haushalt verwenden möchtest',
      'du langlebige Alternativen zu Einwegprodukten suchst',
      'du bewusst und ressourcenschonend leben willst',
      'du kleine Veränderungen mit großer Wirkung schätzt',
    ],
    ctaText: 'Zero Waste entdecken →',
  },
  'grow-green': {
    heroTitle: 'Grow Green – Mini-Pflanzkits',
    heroSubtitle: 'Pflanze Kräuter, Minis & Bonsai – ganz einfach zuhause.',
    seoIntro: [
      'Mit den EcoSpark Grow Green Kits bringst du Natur direkt in dein Zuhause. Ob Bonsai, Basilikum oder Minipflanzen – unsere Sets enthalten alles, was du brauchst, um sofort loszulegen. Ideal für Einsteiger und alle, die Freude an kleinen, pflegeleichten Pflanzen haben.',
      'Grow Kits fördern nicht nur Grün im Wohnraum, sondern stärken auch Bewusstsein und Ruhe im Alltag. Eine kleine Routine mit großer Wirkung.',
    ],
    idealFor: [
      'du deine eigenen Mini-Pflanzen ziehen möchtest',
      'du einfache All-in-One Sets bevorzugst',
      'du Entspannung und Natur im Alltag suchst',
      'du praktische, nachhaltige Geschenkideen magst',
    ],
    ctaText: 'Jetzt Pflanzenreise starten →',
  },
  'eco-gadgets': {
    heroTitle: 'Eco Gadgets',
    heroSubtitle: 'Nachhaltige Mini-Gadgets, die Energie sparen und Spaß machen.',
    seoIntro: [
      'Unsere Eco Gadgets verbinden clevere Technik mit echter Nachhaltigkeit. Ob solarbetriebene Produkte oder Geräte, die komplett ohne Batterien funktionieren – hier findest du smarte Tools, die deinen Alltag leichter und umweltfreundlicher machen.',
      'EcoSpark Gadgets zeigen, dass Nachhaltigkeit modern, praktisch und innovativ sein kann. Ideal für alle, die smarte Lösungen mit kleinem ökologischen Fußabdruck suchen.',
    ],
    idealFor: [
      'du Technik liebst, aber nachhaltiger leben möchtest',
      'du energieeffiziente Alternativen suchst',
      'du neugierig auf smarte Eco-Lösungen bist',
      'du minimalistische Alltagshelfer bevorzugst',
    ],
    ctaText: 'Energieeffiziente Gadgets entdecken →',
  },
  'upcycling': {
    heroTitle: 'Upcycling Produkte',
    heroSubtitle: 'Gegen Verschwendung – für kreative neue Ressourcen.',
    seoIntro: [
      'Unsere Upcycling-Produkte verwandeln ausgediente Materialien in langlebige Alltagsbegleiter. Jede Geldbörse, jeder Schlüsselanhänger hat seine eigene Geschichte – sichtbar an Struktur und Beschaffenheit des recycelten Materials.',
      'Upcycling spart Ressourcen, vermeidet Müll und zeigt, wie viel Potenzial in Dingen steckt, die sonst weggeworfen würden. Modern, robust und absolut einzigartig.',
    ],
    idealFor: [
      'du einzigartige Produkte mit Charakter suchst',
      'du Müll reduzieren möchtest',
      'du nachhaltige Alternativen zu Massenproduktion bevorzugst',
      'du Wert auf robuste & langlebige Materialien legst',
    ],
    ctaText: 'Upcycling entdecken →',
  },
};

export async function generateStaticParams() {
  return categories.map((category) => ({
    slug: category.slug,
  }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const category = getCategoryBySlug(params.slug);
  
  if (!category) {
    return {
      title: 'Kategorie nicht gefunden – EcoSpark',
    };
  }

  return {
    title: category.seoTitle,
    description: category.seoDescription,
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = getCategoryBySlug(params.slug);
  const products = category ? getProductsByCategory(category.slug) : [];
  const content = category ? categoryContent[category.slug] : null;

  if (!category || !content) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        {/* Hero Section */}
        <div className="mb-12">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-deep-forest mb-6">
            {content.heroTitle}
          </h1>
          <p className="text-xl text-graphite mb-4">
            {content.heroSubtitle}
          </p>
        </div>

        {/* SEO Intro Text */}
        <div className="mb-12 space-y-4">
          {content.seoIntro.map((paragraph, index) => (
            <p key={index} className="text-lg text-graphite leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Ideal für dich, wenn... */}
        <div className="mb-12">
          <h2 className="font-heading text-2xl font-bold text-deep-forest mb-4">
            Ideal für dich, wenn…
          </h2>
          <ul className="list-disc ml-6 space-y-2 text-graphite">
            {content.idealFor.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* CTA Button */}
        <div className="mb-12">
          <a href="#products">
            <Button variant="secondary" className="bg-leaf-green text-white border-leaf-green hover:bg-opacity-90">
              {content.ctaText}
            </Button>
          </a>
        </div>

        {/* Product Grid */}
        <div id="products" className="scroll-mt-20">
          {products.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <p className="text-gray-mid">Keine Produkte in dieser Kategorie gefunden.</p>
          )}
        </div>
      </div>
    </div>
  );
}
