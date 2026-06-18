export interface Project {
  title: string;
  duration: string;
  aboutText: string;
  organisationText: string;
  learnedTitle: string;
  learnedText: string;
  technologies: string[];
  image: string;
  liveTestLink: string;
  githubLink: string;
}

// project.interface.ts
// ↓
// kennt den Bauplan eines Projekts

// projects.ts
// ↓
// sagt: mein Array enthält Projekte

// project-details.ts
// ↓
// sagt: mein Input ist ein Projekt

// interface in project.ts importieren
// interface exportieren
// dem projects array den typ geben
