import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeModule } from "./modules/home/home.module";

const routes: Routes = [
  // { path: "skills", component: SkillsModule },
  // { path: "", component: HomeModule },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
