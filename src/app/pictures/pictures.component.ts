import { Component, OnInit } from '@angular/core';
import { ContentProvider } from '../filter/Contentprovider';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pictures',
  templateUrl: './pictures.component.html',
  styleUrls: ['./pictures.component.css']
})
export class PicturesComponent implements OnInit {
  contentFilter: string='all';
  content = [];
  

  constructor(private contentprovider : ContentProvider , private router : Router) {
      this.content  = this.contentprovider.getcontent();
    }

  ngOnInit(): void {  
    console.log("we are in pictures " + this.contentFilter);
  }
  buttonclicked(filter:string){
      this.router.navigate(['/gallery', filter]);
  }
}
