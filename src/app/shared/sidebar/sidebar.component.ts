import { Component } from '@angular/core';
import { GifsService } from '../../gifs/Services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent{

  get historial (){
    return this.gisfsService.historial;
  }

  constructor(private gisfsService: GifsService){}

  buscar(termino: string){
          this.gisfsService.buscarGifs(termino)
    };
  }



