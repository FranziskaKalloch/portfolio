import { Component, Input } from '@angular/core';

import { Project } from '../project.interface';

@Component({
  selector: 'app-project-details',
  imports: [],
  templateUrl: './project-details.html',
  styleUrl: './project-details.scss',
})
export class ProjectDetails {
  // der Klasse muss activeProject übergeben werden - es bekommt also ein Projekt von außen
  @Input() project?: Project;
}
