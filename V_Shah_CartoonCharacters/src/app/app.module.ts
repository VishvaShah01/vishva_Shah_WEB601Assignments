import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentListComponent } from './content-list/content-list.component';
import { ContentCardComponent } from './content-card/content-card.component';
import { CartoonsPipe } from './cartoons.pipe';
import { HighlightImportantDataDirective } from './highlight-important-data.directive';
import { ContentDataComponent } from './content-data/content-data.component';
import { ContentDetailComponent } from './content-detail/content-detail.component';
import { ContentSearchComponent } from './content-search/content-search.component';
import { InvalidLinkComponent } from './invalid-link/invalid-link.component';
import { NavBarDataComponent } from './nav-bar-data/nav-bar-data.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentListComponent,
    ContentCardComponent,
    CartoonsPipe,
    HighlightImportantDataDirective,
    ContentDataComponent,
    ContentDetailComponent,
    ContentSearchComponent,
    InvalidLinkComponent,
    NavBarDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
