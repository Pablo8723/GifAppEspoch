import { Component } from '@angular/core';
import { BuscarService } from 'src/app/services/buscar.service';

@Component({
  selector: 'shared-siderbar',
  templateUrl: './siderbar.component.html',
  styleUrls: ['./siderbar.component.css']
})
export class SiderbarComponent {

  constructor( private buscarService: BuscarService ){}

  get tags(){
    return this.buscarService.tagBuscado;
  }

  buscar(tag: string){
    this.buscarService.buscarGif(tag);
  }

}
