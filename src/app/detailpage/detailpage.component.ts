import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ImageService } from '../filter/image.service';

@Component({
  selector: 'app-detailpage',
  templateUrl: './detailpage.component.html',
  styleUrls: ['./detailpage.component.css']
})

export class DetailpageComponent implements OnInit {
  selected_id ;
image;
  constructor(private imageService: ImageService,
    private route: ActivatedRoute) { }

  ngOnInit(){
  this.route.paramMap.subscribe((params:ParamMap)=>
  {
    let id = parseInt(params.get('id'));
    this.selected_id = id ;
  });
  this.imageService.getImages().subscribe(data => { 
    this.image = data.find(p => p.id == this.selected_id);
  });
  
}
}
