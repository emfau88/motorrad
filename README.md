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

## Noch zu bestätigen

Die endgültige Domain, rechtlichen Texte sowie sämtliche Veranstaltungsangaben sollten vor der offiziellen Veröffentlichung durch den Verein bestätigt werden.
