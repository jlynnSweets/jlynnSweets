import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'jlynnssweetsandtreats';
  showFiller = false;
  theme = true;
  ngOnInit(){
    if(localStorage.getItem('theme')){
        this.theme = (localStorage.getItem('theme') == "true" ? true : false);
    }
  }
   changeTheme(){
     this.theme = !this.theme;
     localStorage.setItem('theme', JSON.stringify(this.theme));
   }

  reload(){
   window.location.reload();
}
}
