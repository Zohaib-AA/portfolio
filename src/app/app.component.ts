import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './mediaQueries.css'],
})
export class AppComponent implements OnInit {
  title = 'portfolio';
  myImage = 'src/assets/p1.png';
  frontendSkills!: { title: string; level: string }[];
  backendSkills!: { title: string; level: string }[];

  ngOnInit(): void {
    this.frontendSkills = [
      {
        title: 'Angular',
        level: 'Experienced',
      },
      {
        title: 'HTML',
        level: 'Experienced',
      },
      {
        title: 'TypeScript',
        level: 'Intermediate',
      },
      {
        title: 'Jasmine',
        level: 'Experienced',
      },
      {
        title: 'CSS',
        level: 'Intermediate',
      },
      {
        title: 'VS Code',
        level: 'Experienced',
      },
    ];
    this.backendSkills = [
      {
        title: 'Node.js',
        level: 'Experienced',
      },
      {
        title: 'Express',
        level: 'Intermediate',
      },
      {
        title: 'JavaScript',
        level: 'Intermediate',
      },
      {
        title: 'MongoDB',
        level: 'Beginner',
      },
      {
        title: 'AWS',
        level: 'Intermediate',
      },
      {
        title: 'Git',
        level: 'Intermediate',
      },
    ];
  }
  toggleMenu() {
    const menuLinks = document.querySelector('.menu-links');
    const hamburgerIcon = document.querySelector('.hamburger-icon');
    menuLinks?.classList.toggle('open');
    hamburgerIcon?.classList.toggle('open');
  }
}
