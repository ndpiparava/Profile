import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { Routes } from "@angular/router";
import { CommonModule } from "@angular/common";

const routes: Routes = [{ path: "home", component: HomeComponent }];

@NgModule({
  declarations: [HomeComponent],
  imports: [
    RouterModule,
    FormsModule,
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class HomeModule {}
