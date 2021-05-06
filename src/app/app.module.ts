import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { TrackedAppsComponent } from './tracked-apps/tracked-apps.component';
import { TrackedAppCardComponent } from './tracked-apps/tracked-app-card/tracked-app-card.component';
import {MatCardModule} from '@angular/material/card';
import { TrackedAppsListComponent } from './tracked-apps/tracked-apps-list/tracked-apps-list.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { SkeletonLoaderComponent } from './skeleton-loader/skeleton-loader.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    TrackedAppsComponent,
    TrackedAppCardComponent,
    TrackedAppsListComponent,
    SkeletonLoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
