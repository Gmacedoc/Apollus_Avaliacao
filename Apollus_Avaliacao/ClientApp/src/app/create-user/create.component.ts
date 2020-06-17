import { Component, OnInit } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'create-users',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  private edit: boolean = false;
  public idEdit: number;
  public admin: boolean;
  public name: string;
  public email: string;
  public password: string;

  constructor(public route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      if (params && params.ID > 0) {
        var users = JSON.parse(localStorage.getItem("USERS"));
        var user = users.filter(function(el) { return el.ID == params.ID; })[0]; 
        this.idEdit = user.ID;
        this.name = user.name;
        this.email = user.email;
        this.password = user.password;
        this.edit = true;
      }
    });
   }

  public createUser() {
    if(!this.edit){ 
      var id = JSON.parse(localStorage.getItem("IDs")) + 1;
      const newUser = {"ID": id, "name": this.name, "email": this.email, "password": this.password};
      localStorage.setItem("IDs", JSON.stringify(id));
      var users = JSON.parse(localStorage.getItem("USERS"));
      
      users.push(newUser);
      
      localStorage.setItem("USERS", JSON.stringify(users));
      
      window.alert("Registrado com sucesso");
    }
    else{
      debugger;
      const idToEdit = this.idEdit;
      var usersStorage = JSON.parse(localStorage.getItem("USERS"));
      var users = usersStorage.filter(function(el) { return el.ID != idToEdit; });
      const userUpdated = {"ID": this.idEdit, "name": this.name, "email": this.email, "password": this.password};
      users.push(userUpdated);
      localStorage.setItem("USERS", JSON.stringify(users));

      window.alert("Alterado com sucesso");
    }
  }


}
