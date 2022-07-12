import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContentListComponent } from './content-list/content-list.component';
import { ContentDetailComponent } from './content-detail/content-detail.component';
import { ContentSearchComponent } from './content-search/content-search.component';
import { InvalidLinkComponent } from './invalid-link/invalid-link.component';
import { ChangeContentComponent } from './change-content/change-content.component';

const routes: Routes = [
  //defualt
  {
    path: '',
    redirectTo: "list",
    //component: ContentListComponent
    pathMatch: "full"
  },
  //only for list
  {
    path: "list",
    component: ContentListComponent,
  },
  //only for perticular detail with id
   {
    path: "detail/:id",
    component: ContentDetailComponent
  }, 
  {
    path: "search",
    component: ContentSearchComponent
  },
  {
    path: "addContent",
    component: ChangeContentComponent
  },
  {
    path: "updateContent/:id",
    component: ChangeContentComponent
  },
  {
    path: "**",
    component: InvalidLinkComponent
  } 

];

@NgModule({
  declarations: [],
  imports: [
    //CommonModule
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
