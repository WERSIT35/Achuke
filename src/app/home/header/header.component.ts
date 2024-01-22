import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  template:`
    <header>
      <div class="logo">
        <a href="">
          <h1><span class="qartuli">აჩუქე </span>● Achuke</h1>
        </a>
      </div>
      <nav class="navi">
        <ul class="list">
          <li><a href="home"><!--<span class="material-symbols-outlined">home</span>--><span class="bord">Home</span></a></li>
          <li><a href="shop"><!--<span class="material-symbols-outlined">shopping_bag</span>--><span class="bord">Shop</span></a></li>
          <li><a href="about"><!--<span class="material-symbols-outlined">info</span>--><span class="bord">About</span></a></li>
        </ul>
      </nav>
      <div class="cart">
        <ul class="list1">
          <li><a href="https://google.com"><span class="material-symbols-outlined">shopping_cart</span><!--<span class="bord">Cart</span>--></a></li>
          <button (click)="darkMode()"><span class="material-symbols-outlined mode">dark_mode</span></button>
        </ul>
      </div>
    </header>
  `,
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  darkMode(): boolean {
    const body = document.getElementsByTagName('body')[0];
    body.classList.toggle('darkModeMain');
  
    const header = document.getElementsByTagName('header')[0];
    header.classList.toggle('divTransparentDark');
  
    const forbackDivs = document.querySelectorAll('div.forback');
    forbackDivs.forEach(element => {
      element.classList.toggle('divTransparentDark');
    });
    
    const foot = document.querySelectorAll('div.foot');
    foot.forEach(element => {
      element.classList.toggle('divTransparentDark');
    });
  
    const logo =document.querySelectorAll('div.logo')[0];
    logo.classList.toggle('darklogo');
  
  
    const icons = document.querySelectorAll('span.mode');
    icons.forEach(icon => {
      const currentText = icon.textContent;
      if (currentText === "light_mode") {
        icon.textContent="dark_mode";
      } else {
        icon.textContent = "light_mode";
      }
    });
  
    const elementsToToggle: HTMLElement[] = [
      ...Array.from(document.getElementsByTagName('h1')),
      ...Array.from(document.getElementsByTagName('h2')),
      ...Array.from(document.getElementsByTagName('p')),
      ...Array.from(document.getElementsByTagName('a')),
      ...Array.from(document.getElementsByTagName('span')),
    ];
  
    elementsToToggle.forEach(element => {
      element.classList.toggle('darkModeText');
    });
  
    return true;
  }
}
