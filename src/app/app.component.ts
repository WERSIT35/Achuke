import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-root',
    standalone: true,
    template: `
    <router-outlet></router-outlet>

    `,
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, HomeComponent, RouterModule]
})
export class AppComponent {
  title = 'ngular';
}
