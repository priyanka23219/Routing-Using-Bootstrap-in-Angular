import {RouterModule, Routes} from '@angular/router'; 
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsComponent} from './about-us/about-us.component';
import {AccordianComponent } from './accordian/accordian.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import {FAQComponent} from './faq/faq.component';
import {HelpComponent} from './help/help.component';
import { SliderComponent } from './slider/slider.component';
import { InfoComponent} from './info/info.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

  {
    path:"About_Us",
    component: AboutUsComponent
  },

  {
    path:"Contact_Us",
    component: ContactUsComponent
  },
  
  {
    path:"Accordian",
    component: AccordianComponent
  },
  {
    path:"FAQ",
    component: FAQComponent
  },
  {
    path:"info",
    component: InfoComponent
  },
  {
    path:"slider",
    component: SliderComponent
  },
  
  {
    path:"home",
    component: HomeComponent
  },
  
  {
    path:"Help",
    component: HelpComponent
  }



];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
  
})
export class AppRoutingModule { }
