import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from '../models/project';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'any'
})
export class ProjectService {
  url: string = "https://mani-api.ma/api/Projets";

  constructor(private http:HttpClient) { }

  getAll():Observable<Project[]>
  {
    return this.http.get<Project[]>(this.url);
  }
  getById(id:number):Observable<Project>
  {
  return this.http.get<Project>(this.url + "/" + id);
  }
  add(projet:Project)
  {
    return  this.http.post(this.url, projet);
  }
  
  update (projet:Project){
    return this.http.put(this.url + "/" + projet.Id, projet);
  }

  remove (id: number){
    return this.http.delete(this.url + "/" + id); 
  }


}
