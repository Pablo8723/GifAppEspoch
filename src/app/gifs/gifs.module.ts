import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalComponent } from './pages/principal/principal.component';
import { CardComponent } from './pages/card/card.component';



@NgModule({
  declarations: [
    PrincipalComponent,
    CardComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    PrincipalComponent
  ]
})
export class GifsModule { }
