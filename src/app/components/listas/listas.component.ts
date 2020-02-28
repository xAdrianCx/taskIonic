import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { DesiresService } from 'src/app/services/desires.service';
import { Router } from '@angular/router';
import { List } from 'src/app/models/list.model';
import { AlertController, IonList } from '@ionic/angular';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {

  @ViewChild(IonList, {static: false}) lista: IonList;
  @Input() terminada = true;

  constructor(public desiresService: DesiresService,
              private router: Router,
              private alertController: AlertController) { }

  ngOnInit() {}

  listaSeleccionada(lista: List){

    if (this.terminada){
      this.router.navigateByUrl(`/tabs/tab2/agregar/${lista.id}`);
    }
    else{
      this.router.navigateByUrl(`/tabs/tab1/agregar/${lista.id}`);
    }
  }

  borrarLista(lista: List){
    console.log(lista);
    this.desiresService.borrarLista(lista);
  }

  async editarLista(list: List){
    const alert = await this.alertController.create({
      header: 'Editar lista',
      inputs:[
        {
          name: 'title',
          value: list.title,
          type: 'text',
          placeholder: 'Editar lista'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            this.lista.closeSlidingItems();
          }
        },
        {
          text: 'Editar',
          handler: (data) => {
            console.log(data);
            if (data.title.length ===0){
              return;
            }

            list.title = data.title;
            this.desiresService.guardarStorage();
            this.lista.closeSlidingItems();
          }
        }
      ]
    });

    alert.present();
  }

}
