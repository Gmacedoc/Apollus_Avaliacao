import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app';

  constructor(){
    localStorage.setItem("IDs", JSON.stringify(0));
    const admin = {"ID": 0, "name": "ADMIN", "email": "gmacedocosta@hotmail.com", "password": "ADMIN"};

    localStorage.setItem("USERS", JSON.stringify([admin]));
  }

}

