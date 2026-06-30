import { Component } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

import { ProjectDetails } from './project-details/project-details';
import { Project } from './project.interface';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectDetails, TranslatePipe],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  constructor(private translate: TranslateService) {
    this.projects = this.englishProjects;

    this.translate.onLangChange.subscribe((event) => {
      this.projects = event.lang === 'de' ? this.germanProjects : this.englishProjects;
    });
  }

  activeProject = 0;
  projects: Project[] = [];
  changeProject(index: number) {
    this.activeProject = index;
  }

  germanProjects: Project[] = [
    {
      title: 'Pokedex',
      mobileTitle: '1. Projekt',
      duration: '2 Wochen',
      aboutText:
        'Eine interaktive Pokédex-Anwendung, mit der Nutzer Pokémon-Daten durchsuchen, nach Namen suchen und detaillierte Informationen in einer responsiven Oberfläche anzeigen können.',
      organisationText:
        'Ich habe das Projekt Schritt für Schritt entwickelt und Datenverarbeitung, Rendering und Styling klar voneinander getrennt.',
      learnedTitle: 'Was ich gelernt habe',
      learnedText:
        'Dieses Projekt hat mein Verständnis für API-Anbindung, dynamisches Rendering und die Organisation größerer JavaScript-Anwendungen verbessert.',
      technologies: [
        {
          icon: './assets/icons/skill/HTML.png',
          name: 'HTML',
        },
        {
          icon: './assets/icons/skill/CSS.png',
          name: 'CSS',
        },
        {
          icon: './assets/icons/skill/Javascript.png',
          name: 'JavaScript',
        },
      ],
      image: './assets/img/pokedex.png',
      liveTestLink: '',
      githubLink: 'https://github.com/FranziskaKalloch/Pokedex.git',
    },

    {
      title: 'El Pollo Loco',
      mobileTitle: '2. Projekt',
      duration: '3 Wochen',
      aboutText:
        'El Pollo Loco ist ein browserbasiertes Jump-and-Run-Spiel mit objektorientiertem JavaScript. Der Spieler sammelt Münzen und Flaschen, besiegt Gegner und kämpft gegen einen Endboss.',
      organisationText:
        'Ich habe das Projekt in separate Klassen für Charakter, Gegner, sammelbare Objekte und Spiellogik aufgeteilt. Dadurch blieb der Code übersichtlich und leichter zu erweitern.',
      learnedTitle: 'Was ich gelernt habe',
      learnedText:
        'Durch dieses Projekt habe ich mein Verständnis für objektorientierte Programmierung, Kollisionserkennung, Animationen und Game-State-Management vertieft.',
      technologies: [
        {
          icon: './assets/icons/skill/HTML.png',
          name: 'HTML',
        },
        {
          icon: './assets/icons/skill/CSS.png',
          name: 'CSS',
        },
        {
          icon: './assets/icons/skill/Javascript.png',
          name: 'JavaScript',
        },
      ],
      image: './assets/img/El-Pollo-Loco.png',
      liveTestLink: '',
      githubLink: 'https://github.com/FranziskaKalloch/El-Pollo-Loco.git',
    },

    {
      title: 'Join',
      mobileTitle: '3. Projekt',
      duration: '2 Wochen',
      aboutText: 'Kommt bald...',
      organisationText: 'Kommt bald...',
      learnedTitle: 'Meine Erfahrung in der Gruppenarbeit',
      learnedText: 'Kommt bald...',
      technologies: [
        {
          icon: './assets/icons/skill/HTML.png',
          name: 'HTML',
        },
        {
          icon: './assets/icons/skill/CSS.png',
          name: 'CSS',
        },
        {
          icon: './assets/icons/skill/Javascript.png',
          name: 'JavaScript',
        },
      ],
      image: './assets/img/Screenshot-join-project.png',
      liveTestLink: '',
      githubLink: '',
    },

    {
      title: 'Ongoing Project',
      mobileTitle: '4. Projekt',
      duration: '',
      aboutText: 'Kommt bald...',
      organisationText: 'Kommt bald...',
      learnedTitle: 'Was ich gelernt habe',
      learnedText: 'Kommt bald...',
      technologies: [
        {
          icon: './assets/icons/skill/Vue Js.png',
          name: 'Vue.js',
        },
        {
          icon: './assets/icons/skill/React.png',
          name: 'React',
        },
      ],
      image: './assets/img/Ongoing-project.png',
      liveTestLink: '',
      githubLink: '',
    },
  ];

  englishProjects: Project[] = [
    {
      title: 'Pokedex',
      mobileTitle: '1. Project',
      duration: '2 weeks',
      aboutText:
        'An interactive Pokédex application that allows users to explore Pokémon data, search by name, and view detailed information in a responsive interface.',
      organisationText:
        'I developed the project step by step, separating data handling, rendering, and styling into clear and maintainable structures.',
      learnedTitle: 'What I have learnt',
      learnedText:
        'This project improved my understanding of API integration, dynamic rendering, and organizing larger JavaScript applications.',
      technologies: [
        {
          icon: './assets/icons/skill/HTML.png',
          name: 'HTML',
        },
        {
          icon: './assets/icons/skill/CSS.png',
          name: 'CSS',
        },
        {
          icon: './assets/icons/skill/Javascript.png',
          name: 'JavaScript',
        },
      ],
      image: './assets/img/pokedex.png',
      liveTestLink: '',
      githubLink: 'https://github.com/FranziskaKalloch/Pokedex.git',
    },
    {
      title: 'El Pollo Loco',
      mobileTitle: '2. Project',
      duration: '3 weeks',
      aboutText:
        'El Pollo Loco is a browser-based jump-and-run game built with object-oriented JavaScript. The player collects coins and bottles, defeats enemies, and faces an end boss while exploring a side-scrolling game world.',
      organisationText:
        'I structured the project into separate classes for the character, enemies, collectible objects, and game logic. This helped me keep the code maintainable and made it easier to extend and debug individual features.',
      learnedTitle: 'What I have learnt',
      learnedText:
        'Through this project, I strengthened my understanding of object-oriented programming, collision detection, animations, and game state management. I also learned how different classes interact to create a complete game experience.',
      technologies: [
        {
          icon: './assets/icons/skill/HTML.png',
          name: 'HTML',
        },
        {
          icon: './assets/icons/skill/CSS.png',
          name: 'CSS',
        },
        {
          icon: './assets/icons/skill/Javascript.png',
          name: 'JavaScript',
        },
      ],
      image: './assets/img/El-Pollo-Loco.png',
      liveTestLink: '',
      githubLink: 'https://github.com/FranziskaKalloch/El-Pollo-Loco.git',
    },
    {
      title: 'Join',
      mobileTitle: '3. Project',
      duration: '2 weeks',
      aboutText: 'Coming Soon...',
      organisationText: 'Coming Soon...',
      learnedTitle: 'My group work experience',
      learnedText: 'Coming Soon...',
      technologies: [
        {
          icon: './assets/icons/skill/HTML.png',
          name: 'HTML',
        },
        {
          icon: './assets/icons/skill/CSS.png',
          name: 'CSS',
        },
        {
          icon: './assets/icons/skill/Javascript.png',
          name: 'JavaScript',
        },
      ],
      image: './assets/img/Screenshot-join-project.png',
      liveTestLink: '',
      githubLink: '',
    },
    {
      title: 'Ongoing Project',
      mobileTitle: '4. Project',
      duration: '',
      aboutText: 'Coming Soon...',
      organisationText: 'Coming Soon...',
      learnedTitle: 'What I have learnt',
      learnedText: 'Coming Soon...',
      technologies: [
        {
          icon: './assets/icons/skill/Vue Js.png',
          name: 'Vue.js',
        },
        {
          icon: './assets/icons/skill/React.png',
          name: 'React',
        },
      ],
      image: './assets/img/Ongoing-project.png',
      liveTestLink: '',
      githubLink: '',
    },
  ];
}
