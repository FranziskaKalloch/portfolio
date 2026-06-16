import { Component } from '@angular/core';

import { Header } from '../../layout/header/header';
import { Hero } from '../../sections/hero/hero';
import { Skills } from '../../sections/skills/skills';
import { WhyMe } from '../../sections/why-me/why-me';

@Component({
  selector: 'app-home',
  imports: [Hero, WhyMe, Header, Skills],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
