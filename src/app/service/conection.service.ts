import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.prod';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
  
})
export class conectionService {

  baseURL: string = environment.apiUrl  
  constructor(private http:HttpClient) { }

 getPantallaLogisticaView(){
    return this.http.get(this.baseURL+'PantallaLogisticaView');
 }


  obtenerSesion(){
    const sesionString=localStorage.getItem("usuarioSesion");
    const sesionRole=localStorage.getItem("usuarioRole");
    const usuarioSesion = JSON.parse(sesionString!);
    console.log('name',usuarioSesion,'rol',sesionRole);
    return usuarioSesion;
  }

  obtenerRol(){
    const sesionString=localStorage.getItem("usuarioRol");
    const usuarioSesion = JSON.parse(sesionString!);
    return usuarioSesion;

  }

  eliminarSesion(){
    localStorage.removeItem("usuarioSesion");
  }
}