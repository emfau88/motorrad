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
- Jubiläums-Countdown mit Sekunden und externer Google-Maps-Anfahrt (keine Karten-Einbettung)
- strukturierte Mock-Daten als spätere CMS-Schnittstelle

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

## Noch zu bestätigen

Die neuen Vereinsfotos ersetzen die Zeitungsausschnitte und die alten verpixelten Bilder. Impressum und Datenschutz sind im Design der Hauptseite vorbereitet und im Footer verlinkt.

Die endgültige Domain und Veranstaltungsangaben sowie die zustellfähige Vereinsanschrift und die aktuelle Vorstandsvertretung sind noch zu bestätigen. Die Rechtsseiten bleiben bis dahin ausdrücklich als Entwurf gekennzeichnet. Details und Quellen: [rechtliche Freigabe](docs/legal-review.md).
