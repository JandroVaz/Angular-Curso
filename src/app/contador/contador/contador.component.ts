import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
    <h1>{{ title }}</h1>
    <button (click)="acumular(+1)">+1</button>
    <span>{{ cont }}</span>
    <button (click)="acumular(-1)">-1</button>
  `,
})
export class ContadorComponent {
  public title: string = 'Contador App';
  public cont: number = 10;
  public cont2: number = 5;
  public base: number = 5;

  acumular(valor: number) {
    this.cont += valor;
  }

  acumular2(valor: number) {
    this.cont2 += valor;
  }
}
