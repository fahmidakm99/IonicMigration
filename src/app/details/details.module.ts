import { NgModule } from '@angular/core';
// import { IonicPageModule } from '@ionic/angular';
import { DetailsPage } from './details';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DetailsPageRoutingModule } from './details-routing.module';

@NgModule({
  declarations: [
    DetailsPage,
  ],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    DetailsPageRoutingModule
  ],
})
export class DetailsPageModule {}
