import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { FooterComponent } from './components/footer/footer.component';
import { WhatsappButtonComponent } from './components/whatsapp-button/whatsapp-button.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { DeliveryComponent } from './pages/delivery/delivery.component';
import { FaqComponent } from './pages/faq/faq.component';
import { ReferencesComponent } from './pages/references/references.component';
import { LayoutComponent } from './layout/layout.component';
import { ProcessComponent } from './pages/process/process.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { DoorAnimationComponent } from './components/door-animation/door-animation.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    NavigationComponent,
    HeroSectionComponent,
    FooterComponent,
    WhatsappButtonComponent,
    HomeComponent,
    ProductsComponent,
    ContactComponent,
    AboutComponent,
    DeliveryComponent,
    FaqComponent,
    ReferencesComponent,
    ProcessComponent,
    ProductDetailComponent,
    DoorAnimationComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
