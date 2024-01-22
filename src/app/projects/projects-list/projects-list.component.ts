import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../service/project.service';
import { Project } from '../models/project';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent implements OnInit {
  projects:Project[]= [];
  constructor (private projetSevice:ProjectService){}
  ngOnInit(): void {
    this.projetSevice.getAll().subscribe(
      {
        next : (data) => {
          this.projects = data;
        },
        error : () => {
          alert("Project Added Failed");
        }
      }
    );
  }  

  remove(id:number){
    if(confirm("Etes vous sur de vouloir supprimer le projet"))
    {
      this. projetSevice.remove(id).subscribe (
        {
        next : () => {
        this. projects = this.projects.filter(p => p.Id != id);
        },
        error : () => {},
        complete : () => {}
        }
      );
    }
  }

}


