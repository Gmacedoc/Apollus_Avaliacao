import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'list-users',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public users: [];

  constructor(public router: Router){
    this.users = JSON.parse(localStorage.getItem("USERS"));
  }

  public editVisit(id: number){
    const params: NavigationExtras  = {
      queryParams: {
        ID: id
      }
    };
    this.router.navigate(['/create'], params);
  }


  public deleteUser(id: number){
    if(id == 0){
      window.alert("Não é possível excluir o usuário Admin!")
    }
    else {
      var users = JSON.parse(localStorage.getItem("USERS"));
      users = users.filter(function(el) { return el.ID != id; }); 
      this.users = users;
      localStorage.setItem("USERS", users);
    }
  }

}
