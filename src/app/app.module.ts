import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ItemsComponent } from './items/items.component';
import { SharedModule } from './shared/shared.module';
import { ItemDetailsComponent } from './item-details/item-details.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ItemsComponent,
    ItemDetailsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, SharedModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
