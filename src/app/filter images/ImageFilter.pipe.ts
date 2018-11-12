import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'imageFilter'
  })

  export class ImageFilterPipe implements PipeTransform{
    transform(value: any[], method:string) {
      if(method === 'all'){ 
        return value;
      } else
      return value.filter(item =>
        {
        return item.category === method;
      });
    }

  }
