import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { imageInterface } from './Images.interface';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private url:string = "assets/data/imagesarray.json";

  constructor(private http : HttpClient) { }
 
  getImages()  : Observable<imageInterface[]> {

    return this.http.get<imageInterface[]>(this.url);
  }
}