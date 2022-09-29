import { Component } from '@angular/core';
import { GifsService } from '../Services/gifs.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent {

  get resultados(){
    return this.gifsService.resultados;
  }
  
  constructor(private gifsService: GifsService) { }

  

}
