import { BlogPost } from './types';

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: '5-zero-waste-hacks-fuer-deinen-alltag',
    title: '5 Zero Waste Hacks für deinen Alltag',
    excerpt: 'Einfache Tipps, um im Alltag weniger Müll zu produzieren und nachhaltiger zu leben.',
    content: `
# 5 Zero Waste Hacks für deinen Alltag

Nachhaltigkeit muss nicht kompliziert sein! Mit diesen einfachen Zero-Waste-Hacks kannst du im Alltag ganz einfach weniger Müll produzieren und deinen ökologischen Fußabdruck reduzieren.

## 1. Bienenwachstücher statt Frischhaltefolie

Bienenwachstücher sind die perfekte Alternative zu Frischhaltefolie. Sie sind wiederverwendbar, biologisch abbaubar und halten Lebensmittel genauso frisch. Einfach nach dem Gebrauch mit kaltem Wasser abspülen und trocknen lassen.

## 2. Wiederverwendbare Abschminkpads

Statt Einweg-Pads aus Baumwolle zu verwenden, setze auf wiederverwendbare Abschminkpads. Sie können bis zu 1000 Mal gewaschen werden und sparen so hunderte von Einweg-Produkten.

## 3. Bambus-Besteck für unterwegs

Für die Lunchbox oder unterwegs: Bambus-Besteck ist leicht, robust und biologisch abbaubar. Perfekt, um Einweg-Plastikbesteck zu vermeiden.

## 4. Seedbombs für mehr Grün

Seedbombs sind eine einfache und spaßige Art, mehr Grün in deine Umgebung zu bringen. Einfach werfen, gießen und wachsen lassen – und dabei Bienen und Insekten unterstützen.

## 5. Pflanzbare Stifte

Wenn dein Stift leer ist, pflanze ihn einfach ein! Pflanzbare Stifte enthalten am Ende Samen und sind eine kreative Art, Müll zu vermeiden.

Mit diesen einfachen Hacks kannst du schon heute beginnen, nachhaltiger zu leben. Jeder kleine Schritt zählt!
    `,
    date: '2024-03-15',
    author: 'EcoSpark Team',
    image: '/images/blog/zero-waste-hacks.jpg',
  },
  {
    id: '2',
    slug: 'warum-kleine-nachhaltige-produkte-einen-unterschied-machen',
    title: 'Warum kleine nachhaltige Produkte einen Unterschied machen',
    excerpt: 'Kleine Schritte führen zu großen Veränderungen. Erfahre, warum auch kleine nachhaltige Produkte wichtig sind.',
    content: `
# Warum kleine nachhaltige Produkte einen Unterschied machen

Oft hören wir die Frage: "Macht das wirklich einen Unterschied?" – wenn es um kleine nachhaltige Produkte geht. Die Antwort ist: Ja, definitiv!

## Jeder kleine Schritt zählt

Kleine nachhaltige Produkte mögen auf den ersten Blick unbedeutend erscheinen, aber sie haben einen großen kumulativen Effekt. Wenn tausende von Menschen kleine Änderungen vornehmen, entsteht daraus eine große Bewegung.

## Bewusstsein schaffen

Jedes nachhaltige Produkt, das wir verwenden, erinnert uns daran, bewusster zu konsumieren. Es schafft ein Bewusstsein für unsere Umwelt und unsere Verantwortung.

## Vorbildfunktion

Wenn wir nachhaltige Produkte verwenden, inspirieren wir andere. Freunde, Familie und Kollegen sehen unsere Entscheidungen und werden vielleicht selbst neugierig.

## Marktsignale senden

Jeder Kauf eines nachhaltigen Produkts sendet ein Signal an den Markt: Es gibt Nachfrage nach nachhaltigen Alternativen. Das motiviert Unternehmen, mehr nachhaltige Produkte anzubieten.

## Die Macht der Gewohnheit

Kleine Änderungen führen zu neuen Gewohnheiten. Wenn wir uns daran gewöhnen, nachhaltige Produkte zu verwenden, wird es zur Normalität.

## Fazit

Kleine nachhaltige Produkte sind nicht nur praktisch, sondern auch wichtig für den Wandel hin zu einer nachhaltigeren Gesellschaft. Jeder Kauf, jede Entscheidung zählt. Zusammen machen wir den Unterschied!
    `,
    date: '2024-03-10',
    author: 'EcoSpark Team',
    image: '/images/blog/kleine-produkte.jpg',
  },
  {
    id: '3',
    slug: 'was-sind-pflanzbare-stifte',
    title: 'Was sind pflanzbare Stifte?',
    excerpt: 'Erfahre mehr über diese innovative und nachhaltige Alternative zu herkömmlichen Stiften.',
    content: `
# Was sind pflanzbare Stifte?

Pflanzbare Stifte sind eine innovative und nachhaltige Alternative zu herkömmlichen Stiften. Aber wie funktionieren sie eigentlich?

## Das Konzept

Pflanzbare Stifte werden aus recyceltem Material (oft Zeitungspapier) hergestellt und enthalten am Ende des Stifts Samen. Wenn der Stift aufgebraucht ist, pflanzt du ihn einfach ein und lässt die Natur ihre Arbeit tun.

## Wie funktioniert es?

1. **Verwenden**: Nutze den Stift wie gewohnt zum Schreiben
2. **Pflanzen**: Wenn der Stift zu kurz wird, pflanze ihn in einen Topf mit Erde
3. **Gießen**: Halte die Erde feucht
4. **Wachsen lassen**: Nach einigen Tagen beginnen die Samen zu keimen

## Welche Samen sind enthalten?

Je nach Stift können verschiedene Samen enthalten sein:
- Kräuter (Basilikum, Koriander, etc.)
- Blumen (Sonnenblumen, Wildblumen, etc.)
- Gemüse (Tomaten, Paprika, etc.)

## Warum sind sie nachhaltig?

- **Recyceltes Material**: Die Stifte werden aus recyceltem Zeitungspapier hergestellt
- **Biologisch abbaubar**: Sie zersetzen sich vollständig in der Erde
- **Kein Müll**: Statt den Stift wegzuwerfen, wird er zu etwas Neuem
- **Bewusstsein**: Sie erinnern uns daran, dass alles einen Lebenszyklus hat

## Fazit

Pflanzbare Stifte sind eine kreative und nachhaltige Art, Müll zu vermeiden und gleichzeitig etwas Schönes zu schaffen. Sie sind perfekt für Kinder, Büros und alle, die gerne schreiben und gleichzeitig etwas für die Umwelt tun möchten.
    `,
    date: '2024-03-05',
    author: 'EcoSpark Team',
    image: '/images/blog/pflanzbare-stifte.jpg',
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}


