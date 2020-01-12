import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { AppRoutingModule } from "./app.routing.module";
import { FooterComponent } from "./footer/footer.component";
import { ContactModule } from "./contact/contact.module";
import { ResumeModule } from "./resume/resume.module";
import { WorkModule } from "./work/work.module";
import { HomeModule } from "./home/home.module";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent],
  imports: [
    ContactModule,
    ResumeModule,
    WorkModule,
    HomeModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
