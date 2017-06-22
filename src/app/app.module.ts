import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { FormsModule }   from '@angular/forms';
import { HeroDetailComponent } from './hero-detail.component';
import { AppComponent } from './app.component';
import { HeroService } from './hero.service';
import { HeroesComponent} from './heroes.component'
import { DashboardComponent } from './dashboard.component'

const routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
