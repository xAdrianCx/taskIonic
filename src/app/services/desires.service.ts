import { Injectable } from '@angular/core';
import {List} from '../models/list.model'

@Injectable({
  providedIn: 'root'
})
export class DesiresService {

  lists: List[] = [];

  constructor() {
    this.cargarStorage();
    console.log(this.lists)
  }

  crearLista (titulo: string){
    const newList = new List(titulo);
    this.lists.push(newList);
    this.guardarStorage();

    return newList.id;
  }

  borrarLista(lista: List){
    this.lists = this.lists.filter(listaData => listaData.id != lista.id);
    this.guardarStorage();
  }

  obtenerLista(id: string | number){
    id = Number(id);

    return this.lists.find( listaData => listaData.id === id);
  }

  guardarStorage(){
    localStorage.setItem('data', JSON.stringify(this.lists));
  }

  cargarStorage(){
    if(localStorage.getItem('data')){
      this.lists = JSON.parse(localStorage.getItem('data'));
    }
  }      
}
