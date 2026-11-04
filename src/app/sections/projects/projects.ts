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
      title: 'Join',
      mobileTitle: '1. Projekt',
      duration: '5 Wochen',
      aboutText:
        'Join ist eine Kanban-basierte Task-Management-Anwendung, die als Teamprojekt während meiner Webentwicklungs-Ausbildung entstanden ist. Nutzer können Aufgaben mithilfe einer intuitiven Drag-and-Drop-Funktion erstellen, organisieren und verwalten. Die Anwendung umfasst eine Benutzerauthentifizierung, Aufgabenzuweisungen und Unteraufgaben. Das Projekt wurde mit Angular und Supabase entwickelt und legt den Fokus auf eine saubere Architektur, wartbaren Code und eine benutzerfreundliche Bedienung.',
      organisationText:
        'Ich habe meine Arbeit mit einem strukturierten Git-Workflow, Feature-Branches, Pull Requests und Code-Reviews organisiert. Neue Features habe ich vor der Umsetzung geplant, auf sauberen und wiederverwendbaren Code geachtet und jede Funktion sorgfältig getestet, bevor sie in den Hauptbranch übernommen wurde.',
      learnedTitle: 'Meine Gruppenerfahrung',
      learnedText:
        'Die Arbeit in einem Entwicklungsteam hat meine Kommunikations- und Teamfähigkeiten gestärkt. Wir arbeiteten mit GitHub, Feature-Branches, Pull Requests und Code-Reviews und unterstützten uns gegenseitig beim Debugging und der Lösungsfindung. Diese Erfahrung hat sowohl meine technischen Fähigkeiten als auch meine Fähigkeit zur erfolgreichen Zusammenarbeit in einem agilen Team verbessert.',
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
      liveTestLink: 'https://join.franziska-kalloch.de',
      githubLink: 'https://github.com/FranziskaKalloch/join',
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
      liveTestLink: 'https://elpolloloco.franziska-kalloch.de',
      githubLink: 'https://github.com/FranziskaKalloch/El-Pollo-Loco',
    },

    {
      title: 'Pokedex',
      mobileTitle: '3. Projekt',
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
      liveTestLink: 'https://pokedex.franziska-kalloch.de',
      githubLink: 'https://github.com/FranziskaKalloch/Pokedex',
    },
    {
      title: 'Coderr',
      mobileTitle: '4. Projekt',
      duration: '2 Wochen',
      aboutText: 'Coderr ist ein Marktplatz für Dienstleistungen, auf dem Anbieter Angebote veröffentlichen und Kunden Bestellungen aufgeben sowie Bewertungen hinterlassen können. Ich habe das Backend mit Django und Django REST Framework entwickelt – einschließlich Token-Authentifizierung, Benutzerprofilen und rollenbasierten Berechtigungen. Das vorgegebene Frontend greift auf meine REST-API zu.',
      organisationText: 'Ich habe das Backend in separate Django-Apps für Authentifizierung, Profile, Angebote, Bestellungen und Bewertungen aufgeteilt. Die Endpunkte habe ich anhand der API-Vorgaben umgesetzt und ihr Verhalten sowie die Berechtigungen mit automatisierten Tests geprüft. Anschließend habe ich das vorgegebene Frontend angebunden und die Anwendung auf einen Server bereitgestellt.',
      learnedTitle: 'Was ich gelernt habe',
      learnedText: 'Ich habe mein Verständnis für REST-APIs, Serializer, relationale Datenmodelle und rollenbasierte Berechtigungen vertieft. Durch die Frontend-Anbindung konnte ich CORS und Token-Authentifizierung praktisch nachvollziehen. Beim Deployment habe ich gelernt, eine Python-Anwendung einzurichten, Abhängigkeiten bereitzustellen und Django für den Produktivbetrieb zu konfigurieren.',
      technologies: [
        {
          icon: './assets/icons/skill/Django.png',
          name: 'Django',
        },
        {
          icon: './assets/icons/skill/Django-REST-Framework.png',
          name: 'DRF',
        },
        {icon: './assets/icons/skill/Python.png',
          name: 'Python',
        }
      ],
      image: './assets/img/Coderr-preview.jpg',
      liveTestLink: 'https://coderr.franziska-kalloch.de/',
      githubLink: 'https://github.com/FranziskaKalloch/Coderr',
    },
  ];

  englishProjects: Project[] = [
    {
      title: 'Join',
      mobileTitle: '1. Project',
      duration: '5 weeks',
      aboutText:
        'Join is a Kanban-based task management application developed as a team project during my web development training. It enables users to create, organize, and manage tasks through an intuitive drag-and-drop interface. The application includes user authentication, task assignment and subtasks. The project was built with Angular and Supabase, focusing on clean architecture, maintainable code, and a user-friendly experience.',
      organisationText:
        'I organized my work using a structured Git workflow with feature branches, pull requests, and code reviews. I planned features before implementation, focused on clean and reusable code, and tested each feature carefully before merging it into the main branch.',
      learnedTitle: 'My team experience',
      learnedText:
        'Working in a development team strengthened my communication and collaboration skills. We worked with GitHub, feature branches, pull requests, and code reviews while supporting each other with debugging and finding solutions. This experience improved both my technical skills and my ability to work effectively in an agile team.',
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
      liveTestLink: 'https://join.franziska-kalloch.de',
      githubLink: 'https://github.com/FranziskaKalloch/join',
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
      liveTestLink: 'https://elpolloloco.franziska-kalloch.de',
      githubLink: 'https://github.com/FranziskaKalloch/El-Pollo-Loco',
    },
    {
      title: 'Pokedex',
      mobileTitle: '3. Project',
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
      liveTestLink: 'https://pokedex.franziska-kalloch.de',
      githubLink: 'https://github.com/FranziskaKalloch/Pokedex',
    },
    {
      title: 'Coderr',
      mobileTitle: '4. Project',
      duration: '2 Weeks',
      aboutText: 'Coderr is a freelance marketplace where business users publish service offers and customers place orders and leave reviews. I developed the backend with Django and Django REST Framework, including token authentication, user profiles and role-based permissions. The provided frontend connects to my REST API.',
      organisationText: 'I divided the backend into separate Django apps for authentication, profiles, offers, orders and reviews. I implemented the endpoints according to the API specification and tested their behaviour and permissions with automated tests. Finally, I connected the provided frontend and deployed the application on Netcup.',
      learnedTitle: 'What I have learnt',
      learnedText: 'I deepened my understanding of REST API design, serializers, relational data models and role-based permissions. Connecting the frontend helped me understand CORS and token authentication in practice. Deploying the project taught me how to configure a Python application, manage dependencies and adapt Django settings for production.',
      technologies: [
        {
          icon: './assets/icons/skill/Django.png',
          name: 'Django',
        },
        {
          icon: './assets/icons/skill/Django-REST-Framework.png',
          name: 'DRF',
        },
        {icon: './assets/icons/skill/Python.png',
          name: 'Python',
        }
      ],
      image: './assets/img/Coderr-preview.jpg',
      liveTestLink: 'https://coderr.franziska-kalloch.de/',
      githubLink: 'https://github.com/FranziskaKalloch/Coderr',
    },
  ];
}
