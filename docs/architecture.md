# Architektur

## Technische Entscheidung

Astro erzeugt schnelle statische Seiten und liefert JavaScript nur dort aus, wo echte Interaktion benötigt wird. Das passt zur datenschutzfreundlichen, performanten Vereinswebsite und verhindert eine unnötig schwere Client-Anwendung.

## Schichten

1. `src/data`: bestätigte Vereinsinformationen und klar markierte Beispieldaten
2. `src/types`: zentrale Inhaltstypen
3. `src/components`: wiederverwendbare Darstellung
4. `src/layouts`: Dokumentrahmen, Metadaten, Header und Footer
5. `src/pages`: URLs und Zusammenstellung der Seiten
6. `src/styles`: globale Tokens, Typografie und Grundelemente

Seiten und Komponenten greifen nur auf die typisierten Datenquellen zu. Später kann eine CMS-Schicht dieselben Formen liefern.

## Informationsarchitektur

| Navigation       | URL               | Zweck                                   |
| ---------------- | ----------------- | --------------------------------------- |
| Start            | `/`               | Überblick und wichtigste Einstiege      |
| Aktuelles        | `/aktuelles`      | Beiträge und Vereinsnachrichten         |
| Termine          | `/termine`        | kommende und vergangene Veranstaltungen |
| Touren & Galerie | `/touren-galerie` | kuratierte Alben statt Bilderwand       |
| 50 Jahre OMF     | `/50-jahre`       | Jubiläum und Vereinsgeschichte          |
| Verein           | `/verein`         | Profil, Geschichte, Clubhaus, Vorstand  |
| Mitmachen        | `/mitmachen`      | Kennenlernen und Kontaktaufnahme        |

Ergänzende Seiten: `/kontakt`, `/anfahrt`, `/impressum`, `/datenschutz`.

## Bilder

Echte Vereinsbilder werden später nach Kategorien in `src/assets/images` eingeordnet. Bis dahin werden absichtlich gestaltete Platzhalter verwendet. Jeder Bilddatensatz enthält Fokuspunkt und Alt-Text, damit responsive Zuschnitte steuerbar bleiben.

## JavaScript

Clientseitiges JavaScript bleibt auf Navigation, Galerie/Lightbox und kleine progressive Verbesserungen begrenzt. Inhalte und Kernnavigation müssen ohne JavaScript nutzbar sein.
