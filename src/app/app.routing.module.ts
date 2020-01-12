import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
import { NgModule } from "@angular/core";

const appRoutes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },

  //lazy loading
  { path: "home", loadChildren: "./home/home.module#HomeModule" },

  { path: "work", loadChildren: "./work/work.module#WorkModule" },
  { path: "resume", loadChildren: "./resume/resume.module#ResumeModule" },
  { path: "contact", loadChildren: "./contact/contact.module#ContactModule" }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
