import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';

/**
 * Generated class for the VistaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vista',
  templateUrl: 'vista.html',
})
export class VistaPage {
personaje;
  constructor(public navCtrl: NavController, public navParams: NavParams,public viewController:ViewController) {
  this.personaje = navParams.get('personaje');
  viewController.setBackButtonText("Atras");
  console.log(this.personaje);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VistaPage');
    this.viewController.setBackButtonText("Atras");
  }

}
