import { Component } from '@angular/core';
import { DesiresService } from '../../services/desires.service'
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { List } from 'src/app/models/list.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor( public desiresService: DesiresService,
               private router: Router,
               public alertController: AlertController) {
    
  }

  async agregarLista(){
    const alert = await this.alertController.create({
      header: 'Nueva lista',
      inputs:[
        {
          name: 'titulo',
          type: 'text',
          placeholder: 'nueva lista'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('cancelar');
          }
        },
        {
          text: 'Crear',
          handler: (data) => {
            console.log(data);
            if (data.titulo.length ===0){
              return;
            }

            const listaId = this.desiresService.crearLista(data.titulo);

            this.router.navigateByUrl(`/tabs/tab1/agregar/${listaId}`)
          }
        }
      ]
    });

    alert.present();
  }

  listaSeleccionada(lista: List){
    this.router.navigateByUrl(`/tabs/tab1/agregar/${lista.id}`)
  }

}
