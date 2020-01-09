import { Routes, RouterModule } from "@angular/router";
import { ResumeComponent } from "./resume/resume.component";
import { HomeComponent } from "./home/home.component";
import { WorkComponent } from "./work/work.component";
import { ContactComponent } from "./contact/contact.component";
import { NgModule } from "@angular/core";

const appRoutes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "work", component: WorkComponent },
  { path: "resume", component: ResumeComponent },
  { path: "contact", component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
