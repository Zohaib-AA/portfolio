import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css','./mediaQueries.css']
})
export class AppComponent {
  title = 'portfolio';
  myImage ='src/assets/p1.png'

  toggleMenu(){
    const menuLinks = document.querySelector('.menu-links'); 
    const hamburgerIcon = document.querySelector('.hamburger-icon');
    menuLinks?.classList.toggle("open"); 
    hamburgerIcon?.classList.toggle("open"); 
  }
}
