import {Product} from './product.model';

import { Component, EventEmitter, Injectable} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable()
export class ProductServices
{

    products : Product[] =[];

    constructor(private http:HttpClient)
    {

    }
  

    getProduct()
    {
        return this.products.slice();
    }


    fetchData()
    {
        this.http.get<{[key:string]:Product}>("http://localhost:3004/api/product")
    .pipe(map(responseData => {
        const postArray =[];
        for (const key in responseData)
        {
            if(responseData.hasOwnProperty(key))
            {
                postArray.push({...responseData[key],id:key})
            }
        }

        return postArray;

           
    })).subscribe(posts =>{
        console.log("array"+posts);
  
       this.products = posts;
     })
   
    ;
    }

    

}