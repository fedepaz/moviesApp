import { NgModule } from "@angular/core";
import {
  BrowserModule,
  provideClientHydration,
} from "@angular/platform-browser";

import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatMenuModule } from "@angular/material/menu";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatListModule } from "@angular/material/list";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatTableModule } from "@angular/material/table";
import { MatBadgeModule } from "@angular/material/badge";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { HeaderComponent } from "./components/header/header.component";
import { HomeComponent } from "./pages/home/home.component";
import { MoviesHeaderComponent } from "./pages/home/components/movies-header/movies-header.component";
import { FiltersComponent } from "./pages/home/components/filters/filters.component";
import { MoviesBoxComponent } from "./pages/home/components/movies-box/movies-box.component";
import { WishListComponent } from "./pages/wish-list/wish-list.component";
import { WishlistService } from "./services/wishlist.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    MoviesHeaderComponent,
    FiltersComponent,
    MoviesBoxComponent,
    WishListComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    MatGridListModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatExpansionModule,
    MatListModule,
    MatToolbarModule,
    MatTableModule,
    MatBadgeModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
  ],
  providers: [provideClientHydration(), WishlistService],
  bootstrap: [AppComponent],
})
export class AppModule {}
