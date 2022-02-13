import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {
  nombre:string='Ironman';
  edad:number=45;

  obtenerNombre():string{
    return `${this.nombre} -  ${this.edad}`;
  }

  get getNombre(){
    return this.nombre;
  }

  cambiarNombre():void{
    this.nombre = 'Spiderman';
  }

  constructor() { }

  ngOnInit(): void {
    
  }

}
