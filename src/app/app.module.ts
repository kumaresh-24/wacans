import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {DataTableModule} from "angular2-datatable";

import { ApiService } from './api.service';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { SearchPipe } from './search.pipe';

const routes: Routes = [
  { path: 'register', component: FormComponent },
  { path: 'list', component: ListComponent },
  { path: '**', redirectTo: 'form', pathMatch: 'full' }
];

@NgModule({
  declarations: [AppComponent, FormComponent, ListComponent, SearchPipe],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DataTableModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {}
