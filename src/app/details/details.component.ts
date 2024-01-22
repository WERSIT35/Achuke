import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BoquetingService } from '../boqueting.service';
import { Boquets } from '../boquets';
import { HeaderComponent } from '../home/header/header.component';
import { FooterComponent } from '../home/footer/footer.component';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [HeaderComponent,FooterComponent],
  template: `
  <app-header></app-header>
    <article>
      <a class="tut">
          <div class="forback">
              <div class="picture">
                  <img [src]="boquets?.photo" alt="photo of{{boquets?.name}}">
              </div>
              <div class="wraper">
                <div class="title">
                    <h2>{{boquets?.name}}</h2>
                </div>
                <div class="price">
                    <p>Price:{{boquets?.price}}$</p>
                </div>
                <div class="description">
                    <h2>{{boquets?.description}}</h2>
                </div>
              </div>
          </div>
      </a>
    </article>
    <app-footer></app-footer>
  `,
  styleUrl: './details.component.scss'
})
export class DetailsComponent {
  route:ActivatedRoute=inject(ActivatedRoute);
  boquetID=0;

  boquetsingService=inject(BoquetingService);

  boquets:Boquets | undefined;

  constructor(){
    const boquetID=Number(this.route.snapshot.params['id']);
    this.boquets=this.boquetsingService.getBoquetsID(boquetID);
  }
}
