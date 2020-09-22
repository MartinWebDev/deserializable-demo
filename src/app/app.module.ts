import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { HomeModule } from "./modules/home/home.module";
import { AppComponent } from "./app.component";

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, HomeModule, AppRoutingModule, HttpClientModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
