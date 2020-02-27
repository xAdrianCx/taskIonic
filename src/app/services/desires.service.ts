import { Injectable } from '@angular/core';
import {List} from '../models/list.model'

@Injectable({
  providedIn: 'root'
})
export class DesiresService {

  lists: List[] = [];

  constructor() {

    const lista1 = new List('Recolectar piedras del infinito');
    const lista2 = new List('Héroes a desaparecer');

    this.lists.push(lista1, lista2);

    console.log(this.lists)
  }

  crearLista (titulo: string){
    const newList = new List(titulo);
    this.lists.push(newList)
  }
}
