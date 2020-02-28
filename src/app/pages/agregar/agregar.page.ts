import { Component, OnInit } from '@angular/core';
import { DesiresService } from 'src/app/services/desires.service';
import { ActivatedRoute } from '@angular/router';
import { List } from 'src/app/models/list.model';
import { ListItem } from 'src/app/models/list-item.model';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {

  lista: List;
  nombreItem = '';

  constructor(private desireServie: DesiresService,
              private router: ActivatedRoute) { 
    const listaId = this.router.snapshot.paramMap.get('listId')
    this.lista = this.desireServie.obtenerLista(listaId);
  }

  ngOnInit() {
  }

  agregarItem(){
    if (this.nombreItem.length === 0){
      return;
    }

    const nuevoItem = new ListItem(this.nombreItem);
    this.lista.items.push(nuevoItem);

    this.nombreItem = '';
    this.desireServie.guardarStorage()
  }

  cambioCheck(item: List){

    const pendientes = this.lista.items.filter(itemData => !itemData.completed).length;

    if (pendientes === 0){
      this.lista.finishedDate = new Date();
      this.lista.completed = true;
    }
    else{
      this.lista.finishedDate = null;
      this.lista.completed = false;
    }

    this.desireServie.guardarStorage();

    this.desireServie.guardarStorage();
  }

  borrarItem(i:number){
    this.lista.items.splice(i,1);
    this.desireServie.guardarStorage();
  }
}
