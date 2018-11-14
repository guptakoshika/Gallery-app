import { Component, OnChanges, OnInit } from '@angular/core';
import { ImageService } from '../filter/image.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  filterBy: string = 'all'
  visibleImages  = []; 

  constructor(private imageService : ImageService) {}

  ngOnInit(): void {
    this.imageService.getImages().subscribe(data => this.visibleImages = data);
  }
}
