import { Component, ElementRef, ViewChild } from '@angular/core';
import { BuscarService } from 'src/app/services/buscar.service';

@Component({
  selector: 'gifs-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {

  @ViewChild('txtTag')
  public tags!: ElementRef<HTMLInputElement>

  constructor( private buscarService: BuscarService ){}

  buscarGif(){
    const tag = this.tags.nativeElement.value;
    this.buscarService.buscarGif(tag);
    this.tags.nativeElement.value = '';
  }

}
