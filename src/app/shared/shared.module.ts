import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { FixedPluginComponent } from './fixed-plugin/fixed-plugin.component';



@NgModule({
  declarations: [
    NavComponent,
    FooterComponent,
    SideBarComponent,
    FixedPluginComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SideBarComponent,
    FooterComponent,
    NavComponent,
    FixedPluginComponent
  ]
})
export class SharedModule { }
