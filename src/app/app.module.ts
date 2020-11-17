import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { PromisesComponent } from './promises/promises.component';
import { CallbacksComponent } from './callbacks/callbacks.component';
import { MhlfComponent } from './mhlf/mhlf.component';
import { JscreatorComponent } from './jscreator/jscreator.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    PromisesComponent,
    CallbacksComponent,
    MhlfComponent,
    JscreatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
