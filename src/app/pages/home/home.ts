import { Component } from '@angular/core';

import { Footer } from '../../layout/footer/footer';
import { Header } from '../../layout/header/header';
import { Contact } from '../../sections/contact/contact';
import { Hero } from '../../sections/hero/hero';
import { Projects } from '../../sections/projects/projects';
import { References } from '../../sections/references/references';
import { Skills } from '../../sections/skills/skills';
import { WhyMe } from '../../sections/why-me/why-me';

@Component({
  selector: 'app-home',
  imports: [Hero, WhyMe, Header, Skills, Projects, References, Contact, Footer],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
