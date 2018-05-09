import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ContactsProvider } from '../../providers/contacts/contacts';
import { VistaPage } from '../vista/vista';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public contactsService: ContactsProvider) {

  }

  ionViewDidLoad(){
    this.contactsService.loadcontacts();
  }

  buttonClick(contact){
    this.navCtrl.push(VistaPage,
    {personaje: contact
    });
  }


}
