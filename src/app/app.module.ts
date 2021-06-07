import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToolbarComponent} from './toolbar/toolbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {TrackedAppsComponent} from './tracked-apps/tracked-apps.component';
import {TrackedAppCardComponent} from './tracked-apps/tracked-app-card/tracked-app-card.component';
import {MatCardModule} from '@angular/material/card';
import {TrackedAppsListComponent} from './tracked-apps/tracked-apps-list/tracked-apps-list.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {SkeletonLoaderComponent} from './skeleton-loader/skeleton-loader.component';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './api/in-memory-data.service';
import { TrackedAppRenameDialogComponent } from './tracked-apps/tracked-app-rename-dialog/tracked-app-rename-dialog.component';
import { TrackedAppDeleteDialogComponent } from './tracked-apps/tracked-app-delete-dialog/tracked-app-delete-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TrackedAppCardAddComponent } from './tracked-apps/tracked-app-card/tracked-app-card-add/tracked-app-card-add.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { SearchComponent } from './search/search.component';
import { SearchToolbarComponent } from './search/search-toolbar/search-toolbar.component';
import { SearchResultsComponent } from './search/search-results/search-results.component';
import { ManualAdditionModalComponent } from './search/manual-addition-modal/manual-addition-modal.component';
import { SearchResultCardComponent } from './search/search-results/search-result-card/search-result-card.component';
import {MatChipsModule} from '@angular/material/chips';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    TrackedAppsComponent,
    TrackedAppCardComponent,
    TrackedAppsListComponent,
    SkeletonLoaderComponent,
    TrackedAppRenameDialogComponent,
    TrackedAppDeleteDialogComponent,
    PageNotFoundComponent,
    TrackedAppCardAddComponent,
    SearchComponent,
    SearchToolbarComponent,
    SearchResultsComponent,
    ManualAdditionModalComponent,
    SearchResultCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    // please, remove this when real api will be ready
    // HttpClientInMemoryWebApiModule.forRoot(
    //   InMemoryDataService, { dataEncapsulation: false, delay: 2000 }
    // ),
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatTooltipModule,
    MatChipsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
