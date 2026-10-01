# Ottenauer Motorradfreunde e. V.

Neue offizielle Website der Ottenauer Motorradfreunde e. V. aus Gaggenau-Ottenau.

## Versionen ansehen

- **Hauptversion – v9-Prototyp:** [https://emfau88.github.io/motorrad/](https://emfau88.github.io/motorrad/)
- **Bisheriger Astro-Entwurf:** [https://emfau88.github.io/motorrad/entwurf/](https://emfau88.github.io/motorrad/entwurf/)
- **Jubiläumsseite des bisherigen Entwurfs:** [https://emfau88.github.io/motorrad/50-jahre/](https://emfau88.github.io/motorrad/50-jahre/)

## Status

Die visuelle v9-Version ist die aktuelle Hauptseite. Sie wurde aus dem eigenständigen HTML-Prototyp in eine wartbarere Struktur mit ausgelagerten Assets, Styles und JavaScript überführt. Der vorherige mehrseitige Astro-Entwurf bleibt für Vergleich und Weiterentwicklung separat erreichbar. Das CMS ist weiterhin nicht Bestandteil dieser Frontend-Phase.

## Technik

- Astro mit TypeScript
- statische Ausgabe mit wenig clientseitigem JavaScript
- zentrale Design-Tokens in CSS
- v9-Bilder, Schriften, Styles und Verhalten als separate Assets
- redaktionelle Listen der Hauptseite direkt in Astro-Datenstrukturen
- einheitliche Bildkarten mit tastaturbedienbarer Foto-Großansicht
- Jubiläums-Countdown mit Sekunden, Google-Maps-Anfahrt und optionaler Standortkarte
- strukturierte Mock-Daten als spätere CMS-Schnittstelle

## Änderungen vom 1. Oktober 2026

- Neue Vereinsfotos ersetzen die unscharfen Gruppenbilder und Zeitungsausschnitte. Der Jubiläumsrückblick ist mit 2016 gekennzeichnet.
- Bildausschnitte, Farben und Helligkeit verbessert; das historische Foto begradigt und Kennzeichen im Tourenbild unkenntlich gemacht. Originale erhalten.
- Bilder für kurze Ladezeiten und unterschiedliche Bildschirmgrößen optimiert.
- Bildkarten und Kontaktinformationen einheitlich ausgerichtet.
- Foto-Großansicht mit Weiterblättern und Tastaturbedienung ergänzt.
- Countdown um Sekunden und die Anfahrt zur Merkurhalle mit Routenlink und einer erst nach Zustimmung geladenen Standortkarte ergänzt.
- Impressum und Datenschutz überarbeitet und verlinkt; sichtbare Entwurfshinweise entfernt. Offene Freigabepunkte bleiben dokumentiert.
- Jubiläumslogo vergrößert, Lorbeerfarbe und Zweigabstand angepasst sowie störende Mittelkanten korrigiert.
- Sanften diagonalen Glanz und einen kurzen Glanzpunkt an der rechten Lorbeerspitze ergänzt, auch mobil. Logo und Schrift bleiben ohne Effekt.
- [Instagram-Profil @omf19762026](https://www.instagram.com/omf19762026/) mit offiziellem Glyph im Kontaktbereich und Footer verlinkt, ohne eingebetteten Feed.
- Vereinslogo im Footer wie im Header freigestellt dargestellt.
- Darstellung auf Desktop, Tablet und Smartphone sowie Seitenfunktionen geprüft.

## Lokal starten

```bash
npm install
npm run dev
```

Produktionsprüfung:

```bash
npm run build
```

## Dokumentation

- [Umsetzungsplan](docs/implementation-plan.md)
- [Architektur](docs/architecture.md)
- [Inhaltsmodell](docs/content-model.md)
- [Vereinsfotos und Bildaufbereitung](docs/photo-assets.md)
- [Rechtliche Quellen und offene Freigaben](docs/legal-review.md)
- [Herkunft des Instagram-Glyphs](docs/brand-assets.md)

## Noch zu bestätigen

Die neuen Vereinsfotos ersetzen die Zeitungsausschnitte und die alten verpixelten Bilder. Impressum und Datenschutz sind im Design der Hauptseite vorbereitet und im Footer verlinkt.

Die endgültige Domain, Veranstaltungsangaben, zustellfähige Vereinsanschrift und aktuelle Vorstandsvertretung sind noch zu bestätigen. Details und Quellen: [rechtliche Freigabe](docs/legal-review.md).
