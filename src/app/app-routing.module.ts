import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { WishListComponent } from "./pages/wish-list/wish-list.component";
import { MovieDetailComponent } from "./pages/home/components/movie-detail/movie-detail.component";

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent,
  },
  {
    path: "wishlist",
    component: WishListComponent,
  },
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
  { path: "movies/:id", component: MovieDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
