import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Auto } from '../../clases/auto';

@Component({
  selector: 'app-auto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './auto.component.html',
  styleUrl: './auto.component.css'
})
export class AutoComponent {

  @Input()
  public auto: Auto =new Auto();
  @Output() reservaEvent: EventEmitter<string> = new EventEmitter<string>();
  @Output() sinNaftaEvent: EventEmitter<string> = new EventEmitter<string>();


  

  constructor() {

  }


  public recorrer() {
    if (this.auto.automatico && this.auto.nafta <= 6)
      this.cargar();
    else {
      let km = Math.floor(Math.random() * 9 + 1);
      this.auto.kmRecorrido += km;
      this.auto.nafta -= km / this.auto.autonomia;
      if (this.auto.nafta < 10)
        this.reservaEvent.emit();

      if (this.auto.nafta <= 0)
        this.sinNaftaEvent.emit();

    }

  }

  public cargar() {
    this.auto.nafta = 50;
  }

}
