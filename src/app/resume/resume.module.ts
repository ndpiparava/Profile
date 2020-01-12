import { NgModule } from "@angular/core";
import { ResumeComponent } from "./resume.component";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { Routes } from "@angular/router";
import { CommonModule } from "@angular/common";

const routes: Routes = [{ path: "", component: ResumeComponent }];

@NgModule({
  declarations: [ResumeComponent],
  imports: [
    RouterModule,
    FormsModule,
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ResumeModule {}
