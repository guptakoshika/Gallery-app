import { Injectable } from "@angular/core";

@Injectable()
export class ContentProvider {
  returndata = [] ; 
  
    getcontent(){
        return this.returndata = data.slice(0);
    }
}
export const data = [
    {name : "boats" , content:"A boat is a watercraft of a large range of type and size. Ships are generally distinguished from boats based on their larger size, shape, and cargo or passenger capacity.Small boats are typically found on inland waterways such as rivers and lakes,or in protected coastal areas.However, some boats, such as the whaleboat, were intended for use in an offshore environment. In modern naval terms, a boat is a vessel small enough to be carried aboard a ship. Anomalous definitions exist, as bulk freighters 1,000 feet (300 m) long on the Great Lakes being known as oreboats."},
    {name : "camping" , content:"Camping is an outdoor activity involving overnight stays away from home in a shelter, such as a tent. Generally participants leave developed areas to spend time outdoors in more natural ones in pursuit of activities providing them enjoyment. To be regarded as 'camping'  a minimum of one night is spent outdoors, distinguishing it from day-tripping, picnicking, and other similarly short-term recreational activities. Camping can be enjoyed through all four seasons."},
    {name : "library" , content:"Library at Melk Abbey in Austria The Halifax Central Library, a modern city library.A library is a collection of sources of information and similar resources, made accessible to a defined community for reference or borrowing.It provides physical or digital access to material, and may be a physical building or room, or a virtual space, or both.A library's collection can include books, periodicals, newspapers, manuscripts, films, maps, prints, documents, microform, CDs, cassettes, videotapes, DVDs, Blu-ray Discs, e-books, audiobooks, databases, and other formats. Libraries range in size from a few shelves of books to several million items. "}
  ]