# Mein Portfolio Projekt

Dieses Projekt wird in Angular umgesetzt.
Der Fokus liegt auf einem modernen, dunklen Design mit hellblauen Akzenten, Bubble Elementen, Hover-Effekten, responsive Layout und klarer Projektstruktur.

## Farbpalette

- Background color | #262E34 | Haupt-Hintergrund der Webseite |
- Primary color | #89BCD9 | Akzente, Highlights, Links, Icons, aktive Elemente |
- Secondary color | #F8F5EC | Helle Schrift, Kontraste, wichtige Texte |
- Hover color dark | rgb(58, 68, 72) | Dunkler Hover-Zustand |
- Surface color | rgb(45, 56, 64) | Projekt-Section, Tabs/Reiter, Skill-Bubbles, hervorgehobene Flächen |
- Error color | #E44C36 | Fehlermeldungen im Kontaktformular |
- Done color | #97E163 | Erfolgreiche Formularzustände |

## Schriften

### Anta

Verwendung für:

- Logo
- Überschriften
- Navigation
- Buttons

### Josefin Sans

Verwendung für:

- Absätze
- Projektbeschreibungen
- About-Me-Texte
- Formulartexte
- längere Lesetexte

## Geplante Sections

1. Header / Navigation
2. Hero Section
3. Why Me / About Me
4. Skills
5. Projects
6. Contact
7. Footer
8. Legal Notice / Impressum
9. Privacy Policy / Datenschutzerklärung

## Komponenten

## Phase 1

1. Header
2. Hero
3. WhyMe
4. Skills
5. Projects
6. Contact
7. Footer

## Phase 2

ProjectCard
Button
Bubble

## Project Card Komponente Inhalt

- Titel
- Beschreibung
- Organisation
- Learnings
- Icons
- Image
- Live-Link
- GitHub-Link

## Assets

Alle heruntergeladenen Design-Dateien werden lokal im Projekt gespeichert.
Geplante Asset-Struktur:

- Logos
- Icons
- Bilder
- Bubbles
- Fonts
- Projektbilder

## Besonderheiten aus der Projekts

- Bubble im Hero-Bereich
- Header im unteren Herobereich und beim scrollen sticky oben
- Bubble-Hover-Effekte im Header
- Bubble-Elemente bei Navigation
- Projektbereich mit Tabs/Reitern
- Skill-Bereich mit Bubble-Design
- Kontaktformular mit Validierung
- Responsive Mobile-Menü
- Mehrsprachigkeit Deutsch / Englisch

## Projektaufbau - Component

src/app/
├-layout/
├── header/
└── footer/

sections/
├── hero/
├── why-me/
├── skills/
├── projects/
├── references/
└── contact/

pages/
├── home/
├── legal-notice/
└── privacy-policy/

## Ordnerstruktur | SCSS 7-1 Pattern

Die Idee:

- Es gibt 7 Ordner für verschiedene SCSS-Bereiche.
- Es gibt 1 Hauptdatei, meistens `main.scss`.
- In der `main.scss` werden alle Teil-Dateien gesammelt/importiert.

scss/
│
├── abstract/
├── base/
├── components/
├── layout/
├── pages/
├── themes/
├── vendors/
│
└── main.scss

1. abstract
-> hier liegen Funktionen, Mixins, Maps und Variablen drin.

2. base
-> hier liegen die Grundstyles für das gesamte Projekt. Z.b. Reset, Schriftarten, Body-styles, allg. HTML Elemente.
-> _reset.scss
->_typography.scss
-> _base.scss

3. components
-> Hier kommen wiederverwendbare Baustein hinein.
-> Buttons, Cars, Badges, Tabs, Formularfelder.

4. layout
-> hier liegen größere Layout-Bereiche der Seite.
-> z.B. Header, Footer, Navigation, Grid-System, Sections

5. pages
-> Hier kommen Styles hinein, die nur für eine bestimmte Seite gelten.
-> z.B. Home-Seite, Impressum, Datenschutz.

6. themes
-> hier liegen alternative Designs oder Farbschemata.
-> z.B. Dark Theme, Light Theme

7. vendor
-> alles was externes Styles betrifft, wie z.B. bootstrap, externe Libraries, fremde Stylesheets

## main.scss

Ist die zentrale Sammeldatei. Hier werden alle SCSS-Dateien zusammengeführt.
@use "./abstracts/variables" as *;
@use "./abstracts/mixins" as*;
@use "./base/reset" as *;
@use "./base/typography" as*;
@use "./layout/header" as *;

WICHTIG: bei SCSS-Dateien mit Unterstrich wird der Unterstrich beim Import nicht mitgeschrieben.

## Kontaktformular

Das Formular soll visuelles Feedback geben.

Fehlerzustand:

- leeres Pflichtfeld
- ungültige Eingabe
- Privacy Policy nicht angekreuzt

Erfolgszustand:

- korrekt ausgefüllte Felder
- erfolgreich gesendete Nachricht

## globale Variablen

Diese Dinge werden überall benutzt.

- Farben ✅
- Fonts ✅
- Abstände ✅
- Container-Breiten ✅
- Breakpoints
- Animation

## Content Breite

Content Widths

Wide Container

- Hero
- Projects
- References

Narrow Container

- Why Me
- Skills
- Contact

## Style

## BEM (Block Element Modifier)

Ziel:

- eindeutige Klassennamen
- wiederverwendbare Komponenten
- weniger CSS Konflikte
- bessere Lesbarkeit

----- AUFBAU ------

.block
.block__element
.block--modifier

----- BLOCK ------

Ein Block ist eine eigenständige Komponente.

- .button
- .header
- .footer
- .project-card
- .contact-form

``scss
.button {}
``html
``<button class="button>Kontakt</button>

----- ELEMENT ------

Ein Element gehört zu einem Block. Ein Element kann nicht alleine existieren.

- .button__icon
- .button__text
- .header__logo
- .header__navigation
- .card__title

``
<button class="button">
  <span class="button__icon"></span>
  <span class="button__text">Kontakt</span>
</button>
``

----- MODIFIER ------

- .button--primary
- .button--secondary
- .button--disabled

- .card--active
- .card--selected

.button {
  // Grundstil

  &--primary {
    // Hauptbutton
  }

  &--secondary {
    // Zweitbutton
  }

  &--ghost {
    // transparenter Button
  }
}

`
<button class="button button--primary">
  Kontakt
</button>
`

## Nestin mit BEM

.button {
  border: none;
  cursor: pointer;

  &__icon {
    width: 24px;
    height: 24px;
  }

  &__text {
    font-size: 1rem;
  }

  &--primary {
    background-color: var(--primary-color);
  }

  &--secondary {
    background-color: transparent;
  }

  &:hover {
    opacity: 0.8;
  }
}

## DE EN Button HOVER TECHNIK

Normaler Zustand:

DE dunkel
EN weiß + Bubble

Hover auf DE:

DE weiß
EN dunkel + Bubble weg

Mouse weg:

DE dunkel
EN weiß + Bubble

Klick auf DE:

DE weiß + Bubble
EN dunkel

Danach ist DE der neue Active State
