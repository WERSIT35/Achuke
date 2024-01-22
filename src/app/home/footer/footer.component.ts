import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  template:`
    <div class="foot">
        <div class="contain">
            <div class="cont cont1">
                <a href="">
                    <h1><span class="qartuli">აჩუქე </span>● Achuke</h1>
                </a>
            </div>
            <div class="cont cont2">
                <a class="title" href="">Gifts</a>
                <a class="list" href="">Boquets</a>
                <a class="list" href="">Jewelery</a>
                <a class="list" href="">Some Text</a>
                <a class="list" href="">Some Text</a>
            </div>
            <div class="cont cont3">
                <a class="title" href="">Some Title</a>
                <a class="list" href="">Some Text</a>
                <a class="list" href="">Some Text</a>
                <a class="list" href="">Some Text</a>
                <a class="list" href="">Some Text</a>
            </div>
            <div class="cont cont4">
                <a class="title" href="">Some Title</a>
                <a class="list" href="">Some Text</a>
                <a class="list" href="">Some Text</a>
                <a class="list" href="">Some Text</a>
                <a class="list" href="">Some Text</a>
            </div>
        </div>
    </div>
  `,
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
