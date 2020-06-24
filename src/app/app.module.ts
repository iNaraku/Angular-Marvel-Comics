import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ComicCardComponent } from './components/comic-card/comic-card.component';
import { ImagenPipe } from './pipes/imagen.pipe';
import { ComicInfoComponent } from './components/comic-info/comic-info.component';
import { LoadingComicCardComponent } from './components/templates/loading-comic-card/loading-comic-card.component';
import { LoadingComicInfoComponent } from './components/templates/loading-comic-info/loading-comic-info.component';
import { FiltroBusquedaPipe } from './pipes/filtro-busqueda.pipe';
import { BranchOfficeComponent } from './components/branch-office/branch-office.component';
import { AddComicComponent } from './components/add-comic/add-comic.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ComicCardComponent,
    ImagenPipe,
    ComicInfoComponent,
    LoadingComicCardComponent,
    LoadingComicInfoComponent,
    FiltroBusquedaPipe,
    BranchOfficeComponent,
    AddComicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
