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
  ngOnInit(){
    
  }

  reload(){
   window.location.reload();
}
}
