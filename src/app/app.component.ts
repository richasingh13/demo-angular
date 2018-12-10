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
      city: "Indore"
    },
    {
      name: "Shreya Vishwakarma", 
      city: "Indore"
    }, 
    {
      name: "Richa Singh", 
      city: "Indore"
    },
    {
      name: "Ravi Singh", 
      city: "Indore"
    }
  ]
}