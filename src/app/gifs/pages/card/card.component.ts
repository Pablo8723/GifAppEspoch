import { Component } from '@angular/core';
import { BuscarService } from 'src/app/services/buscar.service';

@Component({
  selector: 'gifs-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  constructor( private buscarService: BuscarService ){}

  get gifs(){
    return this.buscarService.listaGifs;
  }

}
