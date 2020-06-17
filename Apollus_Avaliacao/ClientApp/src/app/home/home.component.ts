import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  constructor(public dialog: MatDialog) { 
    if(!window.sessionStorage.getItem('logged')){
      dialog.open(LoginComponent, {
        width: '460px',
        disableClose: true,
        closeOnNavigation: true
      });
    }
  }
}
