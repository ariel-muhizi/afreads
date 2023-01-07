import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const books = [
      {
        Title: "Things Fall apart",
        Author: "Chinua Achebe",
        Year: 1958,
        Bookstore: "Kigali Public Library KN 8 Ave Kigali",
        Online: "Kigali Public Library",
        Category: "Lifestyle",
        PopularAuthor: true,
        PopularReads: false
      },
      {
        Title: "Long Walk to freedom",
        Author: "Nelson Mandela",
        Year: 1994,
        Bookstore: "Nuria Store The One Building Ground Floor Shop 12. Along Moi Avenue Nairobi",
        Online: "Nuria",
        Category: "History",
        PopularAuthor: true,
        PopularReads: false
      },
      {
        Title: "Half of a Yellow Sun",
        Author: "Chimamanda Ngozi",
        Year: 2006,
        Bookstore: "Patabah Books Ltd B18 Adeniran Ogunsanya Shopping Mall Adeniran Ogunsanya St Surulere Lagos Nigeria",
        Online: "Patabah",
        Category: "Lifestyle",
        PopularAuthor: true,
        PopularReads: true
      },
      {
        Title: "The Girl Who Smiled Beads: A Story of War and What Comes After",
        Author: "Clemantine Wamariya",
        Year: 2018,
        Bookstore: "Librairie Ikirezi Bookshop KG 5Avenue N° 15 - Kimihurura - Kigali",
        Online: "Ikirezi",
        Category: "History",
        PopularAuthor: false,
        PopularReads: true
      },
      {
        Title: "Decolonising the Mind: The Politics of Language in African Literature",
        Author: "Ngugi wa Thiongo",
        Year: 1986,
        Bookstore: "Text Book Centre Multiple Branches around Kenya",
        Online: "TextBookCentre",
        Category: "Culture",
        PopularAuthor: false,
        PopularReads: true
      },
      {
        Title: "We Need New Names",
        Author: "NoViolet Bulawayo",
        Year: 2013,
        Bookstore: "The House of Books Harare Zimbabwe",
        Online: "The House of Books",
        Category: "Culture",
        PopularAuthor: true,
        PopularReads: false
      },
      {
        Title: "The Lion Awakes",
        Author: "Ashish Thakar",
        Year: 2015,
        Bookstore: "Librairie Ikirezi Bookshop KG 5Avenue N° 15 - Kimihurura - Kigali",
        Online: "Ikirezi",
        Category: "Business",
        PopularAuthor: false,
        PopularReads: true
      },
      {
        Title: "The Unaccountables",
        Author: "Hennie van VuurenMamello ",
        Year: 2022,
        Bookstore: "The Book Lounge",
        Online: "The Book Lounge",
        Category: "Business",
        PopularAuthor: false,
        PopularReads: false
      },
      {
        Title: "No Longer at Ease ",
        Author: "Chinua Achebe",
        Year: 1960,
        Bookstore: "Kigali Public Library KN 8 Ave Kigali",
        Online: "Kigali Public Library",
        Category: "Lifestyle",
        PopularAuthor: true,
        PopularReads: false
      },
      {
        Title: "Conversations With Myself",
        Author: "Nelson Mandela",
        Year: 2010,
        Bookstore: "Librairie Ikirezi Bookshop KG 5Avenue N° 15 - Kimihurura - Kigali",
        Online: "Ikirezi",
        Category: "History",
        PopularAuthor: true,
        PopularReads: false
      },
      {
        Title: "Purple Hibiscus ",
        Author: "Chimamanda Ngozi",
        Year: 2003,
        Bookstore: "Patabah Books Ltd B18 Adeniran Ogunsanya Shopping Mall Adeniran Ogunsanya St Surulere Lagos Nigeria",
        Online: "Patabah",
        Category: "Lifestyle",
        PopularAuthor: true,
        PopularReads: false
      },
      {
        Title: "Glory",
        Author: "NoViolet Bulawayo",
        Year: 2022,
        Bookstore: "The House of Books Harare Zimbabwe",
        Online: "The House of Books",
        Category: "Culture",
        PopularAuthor: true,
        PopularReads: false
      },
      {
        Title: "Unlocking Africa’s business potential ",
        Author: "Landry Signé",
        Year: 2020,
        Bookstore: "Charisma Bookstore - Kigali KG 7 Ave 00250 Heights",
        Online: "",
        Category: "Business",
        PopularAuthor: false,
        PopularReads: false
      }
    ];
    
    return { books };
  }
}