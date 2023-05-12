import { Component, Input } from '@angular/core';
import { GifsService } from '../../Services/gifs.service';
import { Gif } from '../../interface/gifs.interface';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent {

  @Input() resultados: Gif[] = [];

  // get resultados(){
  //   return this.gifsService.resultados;
  // }

  // constructor(private gifsService: GifsService) { }



}
