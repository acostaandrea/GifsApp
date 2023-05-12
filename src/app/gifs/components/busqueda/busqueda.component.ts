import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../Services/gifs.service';

@Component({
  selector: 'gif-search-box',
  templateUrl: './busqueda.component.html',

})
export class BusquedaComponent {

  @ViewChild ('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement> ;

  constructor(private gifsService: GifsService){}

  buscar(termino: string){

    const valor = this.txtBuscar.nativeElement.value

    if(valor.trim().length===0){
      return
    }

    this.gifsService.buscarGifs(valor)

    this.txtBuscar.nativeElement.value = ''
  }

}
