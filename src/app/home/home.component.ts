import { Component, inject} from '@angular/core';
import { HeaderComponent} from "./header/header.component";
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { Boquets } from '../boquets';
import { BoquetsAllComponent } from "./boquets-all/boquets-all.component";
import { BoquetingService } from '../boqueting.service';

@Component({
    selector: 'app-home',
    standalone: true,
    template: `
    <app-header></app-header>
    <article>
    <img class="coveri" src="../../assets/coveri.png" alt="yvavilebi">
    <!-- <h1 class="title">ACHUKE</h1> -->
    </article>
    <div class="minishop">
      <div class="items">
        <app-boquets-all *ngFor="let boqu of boquetsList" [boquets]="boqu"></app-boquets-all>
      </div>
    </div>
    <app-footer></app-footer>
    `,
    styleUrl: './home.component.scss',
    imports: [HeaderComponent, FooterComponent, BoquetsAllComponent, CommonModule]
})
export class HomeComponent {
  boquetsList:Boquets[]=[]
  boquetingService:BoquetingService=inject(BoquetingService);

  constructor() {
    this.boquetsList=this.boquetingService.getAllBoquets();
  }
}
