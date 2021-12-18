import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { ProductServices } from '../product.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user : User;

  constructor(private productServi :ProductServices, private router: Router,private http:HttpClient) { }

  ngOnInit(): void {
  }

  onCreatePost(postData: { name: string; lastname:string ; email: string; password: string, address: string; })
  {

    console.log(postData);

    this.http .post('http://localhost:3004/api/signup',postData).subscribe(responseData => {
        console.log(responseData);
        alert("Welcome account is created")
        this.router.navigate(['/main']);
      });
     
  }

}
