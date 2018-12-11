import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

 title = 'test-app';

  students = [
    {
      name: "Kanchan Kotiya", 
      contact: "1234567890",
      email: "kanchan@gmail.com",
      city: "Indore"
    },
    {
      name: "Shreya Vishwakarma",
      contact: "1234567890",
      email: "shreya@gmail.com", 
      city: "Indore"
    }, 
    {
      name: "Richa Singh", 
      contact: "1234567890",
      email: "richa@gmail.com",
      city: "Indore"
    },
    {
      name: "Naveen Malviya", 
      contact: "1234567890",
      email: "naveen@gmail.com",
      city: "Indore"
    },
    {
      name: "Pawan Singh", 
      contact: "1234567890",
      email: "pawan@gmail.com",
      city: "Bhopal"
    },
    {
      name: "Ravi Singh",
      contact: "1234567890",
      email: "ravi@gmail.com", 
      city: "Indore"
    }
  ]
}