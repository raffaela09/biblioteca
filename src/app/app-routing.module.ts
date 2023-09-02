import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { LoginnComponent } from './components/loginn/loginn.component';

const routes: Routes = [
  {path:'loginn', component:LoginnComponent},

  {path: 'menu', component: MenuComponent},

  {path:'**', redirectTo:'loginn'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
