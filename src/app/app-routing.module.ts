import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { ContactComponent } from './contact/contact.component';
import { OrderComponent } from './order/order.component';
import { AboutComponent } from './about/about.component';
const routes: Routes = [
  {path: 'menu', component: MenuComponent},
  {path: 'about', component: AboutComponent},
  {path: 'order', component: OrderComponent},
  {path: 'contact', component: ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
