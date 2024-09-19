import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { conectionService } from './service/conection.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
  
})
export class AppComponent implements OnInit{
  title = 'prueba2';
  products: any=[];
  tamano:any;
  time:any
 size:any

  

  constructor(private conection:conectionService){
    this.conection.getPantallaLogisticaView().subscribe(res=>{
      this.products=res
      //console.log('Lista',this.products);
      this.tamano=this.products.length
    
    if(res){
      this.time=6
      this.size=this.time
    }
    });
    
  }
  ngOnInit(): void {
  let size
    this.conection.getPantallaLogisticaView().subscribe(res=>{
      this.products=res
      //console.log('Lista',this.products);
      this.tamano=this.products.length
    size=this.products.length
    
    if(res){
      this.time=6
    }
    });
  
    
    
  
    
     
    
  }


}
