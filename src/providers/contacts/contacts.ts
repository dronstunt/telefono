import { Injectable } from '@angular/core';

/*
  Generated class for the ContactsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ContactsProvider {
  contacts:any[];
  
  constructor() {
    console.log('Hello ContactsProvider Provider');
  }

  loadcontacts(){
    this.contacts = [
      {
        img:'assets/img/han-solo.jpg',
        nombre: 'Han Solo',
        titulo: 'Cazar recompensas'
      },
      {
        img:'assets/img/rey.jpg',
        nombre: 'Rey',
        titulo: 'Recolectora'
      },
      {
        img:'assets/img/finn.jpg',
        nombre: 'Finn',
        titulo: 'Piloto'
      },
      {img:'assets/img/leia.jpg',nombre: 'Leia',titulo: 'Princesa'}

    ]
  }
}
