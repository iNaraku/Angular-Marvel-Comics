import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ComicInfoComponent } from './components/comic-info/comic-info.component';
import { BranchOfficeComponent } from './components/branch-office/branch-office.component';
import { AddComicComponent } from './components/add-comic/add-comic.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'comic-info/:id', component: ComicInfoComponent },
  { path: 'branch-office', component: BranchOfficeComponent },
  { path: 'add-comic/:id', component: AddComicComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
