import { Component, Input } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

import { Project } from '../project.interface';

@Component({
  selector: 'app-project-details',
  imports: [TranslatePipe],
  templateUrl: './project-details.html',
  styleUrl: './project-details.scss',
})
export class ProjectDetails {
  // der Klasse muss activeProject übergeben werden - es bekommt also ein Projekt von außen
  @Input() project?: Project;
}
