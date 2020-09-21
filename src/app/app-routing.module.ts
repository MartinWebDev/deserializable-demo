import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: "skills", loadChildren: () => import("./modules/skills/skills.module").then(x => x.SkillsModule) },
  { path: "", redirectTo: "/start", pathMatch: "full" },
  { path: "**", redirectTo: "/start", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
