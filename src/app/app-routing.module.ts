import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CallbacksComponent } from './callbacks/callbacks.component';
import { JscreatorComponent } from './jscreator/jscreator.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MhlfComponent } from './mhlf/mhlf.component';
import { PromisesComponent } from './promises/promises.component';

const routes: Routes = [
  {
    // where the url should go
    path:'main',
    // what the url should display
    component: MainPageComponent
  },
  {
    path: 'callbacks',
    component: CallbacksComponent
  },
  {
    path: 'jscreator',
    component: JscreatorComponent
  },
  {
    path: 'mhlf',
    component: MhlfComponent
  },
  {
    path: 'promises',
    component: PromisesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
