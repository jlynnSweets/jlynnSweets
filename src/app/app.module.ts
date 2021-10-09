import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MenuComponent  } from './menu/menu.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { OrderComponent } from './order/order.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule  } from './material.module';
import { RouterModule } from '@angular/router'; 
import { ReactiveFormsModule } from '@angular/forms';  
import { HttpClientModule } from "@angular/common/http";
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from "@angular/material/input";
import { GalleryModule } from 'ng-gallery';
import { GALLERY_CONFIG } from 'ng-gallery';
import { GalleryComponent } from './gallery/gallery.component'

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ContactComponent,
    AboutComponent,
    OrderComponent,
    GalleryComponent  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatInputModule,
    GalleryModule
  ],
  providers: [    {
    provide: GALLERY_CONFIG,
    useValue: {
      dots: true,
      imageSize: 'cover'
    }
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
