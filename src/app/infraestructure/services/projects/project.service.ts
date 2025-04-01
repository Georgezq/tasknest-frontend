import { Project } from '@/app/core/models/projects.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ProjectDTO } from '../../dto/projects.dto';
import { ProjectMapper } from '@/app/core/mappers/projects.mapper';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private apiUrl = 'https://api.example.com/users';

  constructor(private http: HttpClient) { }

  getProjects(): Observable<Project[]> {
    return this.http.get<ProjectDTO[]>(this.apiUrl).pipe(map((apiProjects) => apiProjects.map(ProjectMapper.toDomain)));
  }

  getProjectById(id: number): Observable<Project> {
    return this.http.get<ProjectDTO>(`${this.apiUrl}/${id}`).pipe(map(ProjectMapper.toDomain));
  }

  createProject(project: Project): Observable<Project> {
    return this.http.post<ProjectDTO>(this.apiUrl, ProjectMapper.toDTO(project)).pipe(map(ProjectMapper.toDomain));
  }

  updateProject(project: Project): Observable<Project> {
    return this.http.put<ProjectDTO>(`${this.apiUrl}/${project.id}`, ProjectMapper.toDTO(project)).pipe(map(ProjectMapper.toDomain));
  }

  deleteProject(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  

}
