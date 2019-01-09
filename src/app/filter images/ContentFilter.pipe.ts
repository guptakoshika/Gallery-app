import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'contentFilter'
  })

  export class ContentFilterPipe implements PipeTransform
   {
    transform(items: any[], criteria: string):
     any {
         console.log("im in content filter pipe "  + items);
        if(criteria === 'all'){ 
            return items 
          } else
      return items.filter(item =>
        {
        return item.name === criteria;
      });
    }
  }