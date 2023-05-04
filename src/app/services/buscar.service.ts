import { Injectable } from '@angular/core';
import { BuscarGIF, Gif } from '../gifs/interfaces/buscarGif-interface';
import { HttpClient, HttpParams } from '@angular/common/http';

let url = 'https://api.giphy.com/v1/gifs/search'

@Injectable({
  providedIn: 'root'
})
export class BuscarService {

  constructor( private http: HttpClient) {
    this.lecturaLocalStorege()
  }

  private _tagBuscado: string[] = [];
  private _listGif:Gif[] = [];


  get tagBuscado(){
    return [...this._tagBuscado];
  }

  get listaGifs(){
    return this._listGif;
  }

  private arreglarTags(tag: string){

    if(this._tagBuscado.includes(tag)){
      this._tagBuscado = this._tagBuscado.filter( (tagOld) => tagOld !== tag)
    }

    this._tagBuscado.unshift( tag );
    this._tagBuscado = this._tagBuscado.slice(0,10);
    this.guardarLocalStorege();
  }


  buscarGif( tag: string ){

    if(!tag) return;
    this.arreglarTags( tag );

    const params = new HttpParams()
      .set('api_key', 'w7vh3d6bs3vT76fycy4ZJgx3lUvhq3cd')
      .set('q', tag)
      .set('limit', '10')

    return this.http.get<BuscarGIF>(`${url}`, {params})
      .subscribe( resp => {
        this._listGif = resp.data;
      })
  }

  guardarLocalStorege(){
    localStorage.setItem('menu', JSON.stringify(this._tagBuscado))
  }

  lecturaLocalStorege(){
    this._tagBuscado = JSON.parse(localStorage.getItem('menu') || '')
  }
}
