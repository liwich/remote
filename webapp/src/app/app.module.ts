import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthorizationCallbackComponent } from './authorization-callback/authorization-callback.component';

const appRoutes: Routes = [
  { path: 'callback', component: AuthorizationCallbackComponent },
  { path: '**', component: AuthorizationComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AuthorizationComponent,
    AuthorizationCallbackComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
