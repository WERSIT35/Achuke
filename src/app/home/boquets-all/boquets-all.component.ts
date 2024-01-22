import { Component ,Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Boquets } from '../../boquets';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-boquets-all',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template:`
    <a class="tut" [routerLink]="['/details',boquets.id]">
        <div class="forback">
            <div class="picture">
                <img [src]="boquets.photo" alt="photo of{{boquets.name}}">
            </div>
            <div class="title">
                <h2>{{boquets.name}}</h2>
            </div>
            <div class="price">
                <p>Price:{{boquets.price}}$</p>
            </div>
        </div>
    </a>
  `,
  styleUrl: './boquets-all.component.scss'
})
export class BoquetsAllComponent {
  @Input() boquets!:Boquets;
}
