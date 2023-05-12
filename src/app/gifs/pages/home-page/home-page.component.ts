import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../Services/gifs.service';
import { Gif } from '../../interface/gifs.interface';

@Component({
  selector: 'gifs-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private gifsService: GifsService) { }

  get gifs(): Gif[]{
    return this.gifsService.resultados;
  }

  ngOnInit(): void {
  }

}
