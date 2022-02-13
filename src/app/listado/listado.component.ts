import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  heroes:string[] = ['Spiderman', 'IronMan', 'Hulk'];
  heroeRemove:string="";
  

  borrarHeroes(){
    this.heroeRemove=this.heroes.pop()||'';
  }

  constructor() { }
  ngOnInit(): void {
  }

}
