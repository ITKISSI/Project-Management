import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ProjectsRoutingModule } from './projects-routing.module';
import { AddProjectComponent } from './add-project/add-project.component';
import { FormsModule } from '@angular/forms';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { ProjectsUpdateComponent } from './projects-update/projects-update.component';


@NgModule({
  declarations: [
    AddProjectComponent,
    ProjectsListComponent,
    ProjectsUpdateComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    HttpClientModule,
    FormsModule
  ]
})
export class ProjectsModule { }
