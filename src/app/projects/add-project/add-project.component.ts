import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../service/project.service';
import { Project } from '../models/project';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit{
  constructor(private projetSevice:ProjectService,private router:Router){
    this.projet= new Project();
  }
projet:Project;
  ngOnInit(): void {
    // this.projetSevice.getAll().subscribe(
    //   {
    //     next : () => {
    //       alert("Project Added Successfully");
    //     },
    //     error : () => {
    //       alert("Project Added Failed");
    //     }
    //   }
    // );
  }

  add(){
    this.projetSevice.add(this.projet).subscribe(
       {
        next : () => {
          this.router.navigateByUrl("projects/list");
        },
        error : () => {
          alert("Project Added Failed");
        }
      }
    );
  }

}


