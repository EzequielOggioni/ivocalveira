import { Component } from '@angular/core';
import { AutoComponent } from '../auto/auto.component';
import { Auto } from '../../clases/auto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carrera',
  standalone: true,
  imports: [AutoComponent,CommonModule],
  templateUrl: './carrera.component.html',
  styleUrl: './carrera.component.css'
})
export class CarreraComponent {
public autos:Array<Auto> = new Array<Auto>();
/**
 *
 */
constructor() {
  this.autos.push(new Auto());
  let automatico = new Auto();
  automatico.automatico= true;
  this.autos.push(automatico);
}

  cargar(){}
  correr(){}
}
