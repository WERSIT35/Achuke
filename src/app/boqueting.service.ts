import { Injectable } from '@angular/core';
import { Boquets } from './boquets';

@Injectable({
  providedIn: 'root'
})
export class BoquetingService {
  protected boquetsList:Boquets[]=[
    {
      "id":1,
      "name":"boquet1",
      "color":"donno",
      "photo":"../../assets/pictures/bushtebi/bushti1.jpg",
      "units":5,
      "price":136,
      "description":"Sweet flowers",
    },
    {
      "id":2,
      "name":"boquet1",
      "color":"donno",
      "photo":"../../assets/pictures/bushtebi/bushti2.jpg",
      "units":5,
      "price":136,
      "description":"mmmm so nice",
    },
    {
      "id":3,
      "name":"boquet1",
      "color":"donno",
      "photo":"../../assets/pictures/bushtebi/bushti3.jpg",
      "units":5,
      "price":136,
      "description":"look at thaaaat",
    },
    {
      "id":4,
      "name":"boquet1",
      "color":"donno",
      "photo":"../../assets/pictures/bushtebi/bushti4.jpg",
      "units":5,
      "price":136,
      "description":"this one is my favorite",
    },
    {
      "id":5,
      "name":"boquet1",
      "color":"donno",
      "photo":"../../assets/pictures/bushtebi/bushti5.jpg",
      "units":5,
      "price":136,
      "description":"<3 lav ya",
    },
    {
      "id":6,
      "name":"boquet1",
      "color":"donno",
      "photo":"../../assets/pictures/bushtebi/bushti6.jpg",
      "units":5,
      "price":136,
      "description":"i cant hold to bye it",
    },
    {
      "id":7,
      "name":"boquet1",
      "color":"donno",
      "photo":"../../assets/pictures/bushtebi/bushti7.jpg",
      "units":5,
      "price":136,
      "description":"okay enough",
    },
    {
      "id":8,
      "name":"boquet1",
      "color":"donno",
      "photo":"../../assets/pictures/bushtebi/bushti8.jpg",
      "units":5,
      "price":136,
      "description":"hehehe boaai",
    }
  ]
  constructor() { }

  getAllBoquets():Boquets[]{
    return this.boquetsList;
  }
  getBoquetsID(id:number):Boquets|undefined{
    return this.boquetsList.find(boquets=>boquets.id===id);
  }
}
