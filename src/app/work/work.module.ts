import { NgModule } from "@angular/core";
import { WorkComponent } from "./work.component";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { Routes } from "@angular/router";
import { CommonModule } from "@angular/common";

const routes: Routes = [{ path: "", component: WorkComponent }];

@NgModule({
  declarations: [WorkComponent],
  imports: [
    RouterModule,
    FormsModule,
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class WorkModule {}
