import { Component } from '@angular/core';

import { ProjectDetails } from './project-details/project-details';
import { Project } from './project.interface';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectDetails],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  activeProject = 0;

  changeProject(index: number) {
    this.activeProject = index;
  }

  projects: Project[] = [
    {
      title: 'Pokedex',
      duration: '2 weeks',
      aboutText:
        'An interactive Pokédex application that allows users to explore Pokémon data, search by name, and view detailed information in a responsive interface.',
      organisationText:
        'I developed the project step by step, separating data handling, rendering, and styling into clear and maintainable structures.',
      learnedTitle: 'What I have learnt',
      learnedText:
        'This project improved my understanding of API integration, dynamic rendering, and organizing larger JavaScript applications.',
      technologies: [
        '/assets/icons/skill/HTML.png',
        '/assets/icons/skill/CSS.png',
        '/assets/icons/skill/Javascript.png',
      ],
      image: '/assets/img/pokedex.png',
      liveTestLink: '',
      githubLink: '',
    },
    {
      title: 'El Pollo Loco',
      duration: '3 weeks',
      aboutText:
        'El Pollo Loco is a browser-based jump-and-run game built with object-oriented JavaScript. The player collects coins and bottles, defeats enemies, and faces an end boss while exploring a side-scrolling game world.',
      organisationText:
        'I structured the project into separate classes for the character, enemies, collectible objects, and game logic. This helped me keep the code maintainable and made it easier to extend and debug individual features.',
      learnedTitle: 'What I have learnt',
      learnedText:
        'Through this project, I strengthened my understanding of object-oriented programming, collision detection, animations, and game state management. I also learned how different classes interact to create a complete game experience.',
      technologies: [
        '/assets/icons/skill/HTML.png',
        '/assets/icons/skill/CSS.png',
        '/assets/icons/skill/Javascript.png',
      ],
      image: './assets/img/El-Pollo-Loco.png',
      liveTestLink: '',
      githubLink: '',
    },
    {
      title: 'Join',
      duration: '2 weeks',
      aboutText: 'Coming Soon...',
      organisationText: 'Coming Soon...',
      learnedTitle: 'My group work experience',
      learnedText: 'Coming Soon...',
      technologies: [
        '/assets/icons/skill/HTML.png',
        '/assets/icons/skill/CSS.png',
        '/assets/icons/skill/Javascript.png',
      ],
      image: '',
      liveTestLink: '',
      githubLink: '',
    },
    {
      title: 'Ongoing Project',
      duration: '',
      aboutText: 'Coming Soon...',
      organisationText: 'Coming Soon...',
      learnedTitle: 'What I have learnt',
      learnedText: 'Coming Soon...',
      technologies: ['React', 'VueJs'],
      image: './assets/img/Ongoing-project.png',
      liveTestLink: '',
      githubLink: '',
    },
  ];
}

// Welche Daten braucht projectDetails:
// Duration
// about Text
// organisation Text
// learned Text || group work experience
// Technologies
// Image
// Github Link
// Live Test Link

//  SChritte:
// Datenmodell überlegen
// Parent kennt alle Projekte
// activeProject festlegen
// activeProject an Child geben
// Tabs schalten active Project um

// Variante - mit Index
// bedeutet dann:
// 0 = Pokedex
// 1 = El Pollo Loco
// 2 = Join
// 3 = Ongoing Project

// Vorteil -> sehr einfach und passt perfekt zu dem Array
