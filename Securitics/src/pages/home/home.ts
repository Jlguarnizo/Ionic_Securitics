import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,private alertCtrl: AlertController) {

  }
presentAlert() {
  let alert = this.alertCtrl.create({
    title: 'Low battery',
    subTitle: '10% of battery remaining',
    buttons: ['Dismiss']
  });
  alert.present();
}

Ayudas() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Acciones rapidas');

    alert.addInput({
      type: 'radio',
      label: 'Numero de emergencia',
      value: '1'
    });

    alert.addInput({
      type: 'radio',
      label: 'Cai mas cercano',
      value: '2'
    });

    alert.addInput({
      type: 'radio',
      label: 'Denuncias',
      value: '3'
    });

    alert.addInput({
      type: 'radio',
      label: 'Compartir Ubicación',
      value: '4'
    });

    alert.addButton('Cancelar');
    alert.addButton({
      text: 'Aceptar',
      handler: data => {
        this.testRadioOpen = false;
        this.testRadioResult = data;
      }
    });
    alert.present();
  }

}
