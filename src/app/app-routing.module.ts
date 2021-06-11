import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from './pages/page-not-found/page-not-found.component';
import {TrackedAppsComponent} from './pages/tracked-apps/tracked-apps.component';
import {SearchComponent} from './pages/search/search.component';
import {LoginComponent} from './pages/login/login.component';
import {AuthGuard} from './guards/auth.guard';
import {TestComponent} from './pages/test/test.component';

const routes: Routes = [
  {path: '', redirectTo: '/tracked', pathMatch: 'full'},
  {path: 'tracked', component: TrackedAppsComponent, canActivate: [AuthGuard], data: {title: 'Отслеживаемые'}},
  {
    path: 'search', component: SearchComponent, canActivate: [AuthGuard],
    data: {title: 'Добавить в отслеживаемое', toolbarShow: false}
  },
  {path: 'settings', component: PageNotFoundComponent, canActivate: [AuthGuard], data: {title: 'Настройки'}},
  {path: 'login', component: LoginComponent, data: {title: 'Вход'}},
  {path: 'register', component: PageNotFoundComponent, data: {title: 'Регистрация'}},
  {path: 'landing', component: PageNotFoundComponent, data: {title: 'Лендинг'}},
  {path: 'test', component: TestComponent, data: {title: 'TEST'}},
  {path: '**', component: PageNotFoundComponent, data: {title: 'Error'}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
