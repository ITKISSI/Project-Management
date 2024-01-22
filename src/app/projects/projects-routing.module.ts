import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProjectComponent } from './add-project/add-project.component';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { ProjectsUpdateComponent } from './projects-update/projects-update.component';

const routes: Routes = [
  {path: "add" , component: AddProjectComponent},
  {path: "list" , component: ProjectsListComponent},
  {path: "update/:id" , component: ProjectsUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
