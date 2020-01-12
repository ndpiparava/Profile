import { NgModule } from "@angular/core";
import { ContactComponent } from "./contact.component";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { Routes } from "@angular/router";
import { CommonModule } from "@angular/common";

const routes: Routes = [{ path: "", component: ContactComponent }];

@NgModule({
  declarations: [ContactComponent],
  imports: [
    RouterModule,
    FormsModule,
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ContactModule {}
