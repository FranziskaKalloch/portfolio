import { Component } from '@angular/core';

import { Header } from '../../layout/header/header';
import { Hero } from '../../sections/hero/hero';
import { Projects } from '../../sections/projects/projects';
import { References } from '../../sections/references/references';
import { Skills } from '../../sections/skills/skills';
import { WhyMe } from '../../sections/why-me/why-me';

@Component({
  selector: 'app-home',
  imports: [Hero, WhyMe, Header, Skills, Projects, References],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
