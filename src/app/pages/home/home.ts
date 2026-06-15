import { Component } from '@angular/core';

import { Header } from '../../layout/header/header';
import { Hero } from '../../sections/hero/hero';
import { WhyMe } from '../../sections/why-me/why-me';

@Component({
  selector: 'app-home',
  imports: [Hero, WhyMe, Header],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
