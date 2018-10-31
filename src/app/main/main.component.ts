import { Component } from '@angular/core';
import { Imageproviders } from '../filter images/Imageproviders';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent  {

  images:any[];
  filterby:string = 'all';
  visibleImages:any[] = [] ;

  constructor(private image : Imageproviders) { 
     this.visibleImages = this.image.getImage();
  }
}
