import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  products : Product[];

  constructor(private http:HttpClient) { }
 
  ngOnInit(): void {

    this.http.get<{[key:string]:Product}>("http://localhost:3004/api/product").pipe(map(responseData =>{
        const postArray =[];
        for (const key in responseData)
        {
            if(responseData.hasOwnProperty(key))    
            {
                postArray.push({...responseData[key],id:key})
            }
        }

          return postArray;

           
    })).subscribe(postArray =>{
  
       this.products = postArray;
     });

    

  }

}
