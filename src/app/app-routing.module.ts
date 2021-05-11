import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {TrackedAppsComponent} from './tracked-apps/tracked-apps.component';
import {SearchComponent} from './search/search.component';

const routes: Routes = [
  {path: 'tracked', component: TrackedAppsComponent, data: {title: 'Отслеживаемые', toolbarShow: true}},
  {path: 'search', component: SearchComponent, data: {title: 'Добавить в отслеживаемое', toolbarShow: false}},
  {path: '', redirectTo: '/tracked', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent, data: {title: 'Error', toolbarShow: true}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
