import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styles: ['./login.component.css']
})
export class LoginComponent {
  public email: string;
  public password: string;

  constructor(public router: Router, public dialogRef: MatDialogRef<LoginComponent>) { }

  onSubmit() {
    debugger;
    var login = this.email;
    var senha = this.password;
    var users = JSON.parse(localStorage.getItem("USERS"));
    var user = users.filter(function(el) { return (el.email == login && el.password == senha); }); 
    if(user)
    {
      window.sessionStorage.setItem('logged', 'true');
      this.dialogRef.close();
    }
    else{
      window.alert("Não há nenhum usuário com tais credenciais!");
    }
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
