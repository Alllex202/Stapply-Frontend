import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {TrackedAppsComponent} from './tracked-apps/tracked-apps.component';

const routes: Routes = [
  {path: 'tracked', component: TrackedAppsComponent, data: {title: 'Отслеживаемые'}},
  {path: '', redirectTo: '/tracked', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent, data: {title: 'Error', toolbarShow: true}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
