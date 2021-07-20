import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DestinationDetailsComponent } from './destination-details/destination-details.component';
import { DestinationListComponent } from './destination-list/destination-list.component';
import { CartComponent } from './cart/cart.component';
import { BlogComponent } from './blog/blog.component';
import { ReviewsComponent } from './reviews/reviews.component';
const routes: Routes = [
  {
    path: "", component: DestinationListComponent
  }, {
    path: 'destinations/:Id', component: DestinationDetailsComponent
  }, {
    path: 'cart', component: CartComponent
  }, {
    path: 'blog', component: BlogComponent
  }, {
    path: 'reviews', component: ReviewsComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }