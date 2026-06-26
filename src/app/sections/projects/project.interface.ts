export interface Project {
  title: string;
  duration: string;
  aboutText: string;
  organisationText: string;
  learnedTitle: string;
  learnedText: string;
  technologies: Technology[];
  image: string;
  liveTestLink: string;
  githubLink: string;
}

export interface Technology {
  icon: string;
  name: string;
}
