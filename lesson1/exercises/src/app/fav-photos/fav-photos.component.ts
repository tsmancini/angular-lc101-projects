import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Favorite Pictures';
  image1 = 'https://th.bing.com/th/id/OIP.x2KM-BswaqD_KkM94gE4dQAAAA?w=266&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7';
  image2 = 'https://th.bing.com/th/id/OIP.EGzZLunxo0QQ6_GawS1mvwHaFG?w=270&h=186&c=7&r=0&o=5&dpr=1.5&pid=1.7';
  image3 = 'https://th.bing.com/th/id/OIP.v-E4Afmv29tSsL9aapB1mgHaFj?w=248&h=186&c=7&r=0&o=5&dpr=1.5&pid=1.7';

  constructor() { }

  ngOnInit() {
  }

}