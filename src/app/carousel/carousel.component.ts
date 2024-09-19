import { Component, OnDestroy, OnInit } from '@angular/core';
import { conectionService } from '../service/conection.service';
import { Socket } from 'dgram';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent implements OnInit{
  title = 'prueba2';
  products: any;


  constructor(private conection:conectionService){

   
  }


 
  ngOnInit(): void {

    
     
   this.concultaLista(); 

  }

 

  concultaLista(){
    this.conection.getPantallaLogisticaView().subscribe(res=>{
      this.products=res
      console.log('Lista',this.products.length);
    });

  }

 


}
