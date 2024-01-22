import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from '../service/project.service';
import { Project } from '../models/project';
import { map } from 'rxjs';

@Component({
  selector: 'app-projects-update',
  templateUrl: './projects-update.component.html',
  styleUrls: ['./projects-update.component.css']
})
export class ProjectsUpdateComponent implements OnInit{
  
  constructor(private ActivateRoutes: ActivatedRoute,private projectService: ProjectService, private router: Router) {
    
    this.projet=new Project();
  }
projet:Project;
  ngOnInit(): void {
    let id=this.ActivateRoutes.snapshot.params["id"];
    this.projectService.getById(id)
    .pipe(
        map(p => {
            p.DateDebut = p.DateDebut.toString().split("T")[0];
            p.DateFin = p.DateFin.toString().split("T")[0];
            return p;
        } 
        )
    )
    .subscribe (
      {
      next : (data) => {
      this.projet = data;
      },
      error : () => {},
      complete : () => {}
      }
    );
  }

  update() {
    this.projectService.update(this.projet)
    .subscribe (
      {
      next : () => {
      this.router.navigateByUrl('/projects/list');
      },
      error : () => {},
      complete : () => {}
      }
    );
  }

}
