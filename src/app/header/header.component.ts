import { Component, OnChanges, OnInit } from '@angular/core';
import { ImageService } from '../filter/image.service';
import { ContentProvider } from '../filter/Contentprovider';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  filterBy;
  visibleImages  = []; 

  contentFilter: string='all';
  content = [];
  

  constructor(private imageService : ImageService , 
    private contentprovider : ContentProvider , private router : Router , 
    private activated_router : ActivatedRoute ) {
      this.activated_router.paramMap.subscribe((params:ParamMap)=>
      {
        this.filterBy = params.get('filter');
      });
      this.content  = this.contentprovider.getcontent();
    }

    gotohome(){
        this.router.navigate(['/gallery']);
    }
    changepics( filter ){
      this.filterBy = filter;
      this.router.navigate(['/gallery' , filter]);
    }
  ngOnInit(): void {
    this.imageService.getImages().subscribe(data => this.visibleImages = data);   
    console.log("we are in header " + this.contentFilter);
  }
}
