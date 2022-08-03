import { Injectable } from '@angular/core';

//importar en service al storage de angular
import {Storage} from '@ionic/storage';
Storage


@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private storage: Storage) { 
    this.init();
  }


  //crear el storage
  async init()
  {
    await this.storage.create();
  }


//ingresar datos
async agregarConKey(key: string, valor: string)
{
  await this.storage.set(key,valor);

}
async agregar(valor:any)
{
  let id = await this.storage.length() + 1;
  await this.storage.set(id.toString(),valor);
}

  async rescatar(key:string)
  {
    return await this.storage.get(key);
  }
  listar()
  {
    let listado = []
    this.storage.forEach((v,k)=> {listado.push(v);})
    return listado;
  }
  eliminar(key:string)
  {
    this.storage.remove(key);
  }
}