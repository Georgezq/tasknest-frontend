import { ProjectRepository } from '@/app/core/repositories/projects.repository';
import { Injectable } from '@angular/core';
import { ProjectService } from '../services/projects/project.service';
import { Project } from '@/app/core/models/projects.model';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})

export class ProjectRepositoryImpl implements ProjectRepository{
    constructor(private projectService: ProjectService){}

    getAllProjects(): Observable<Project[]> {
     return this.projectService.getProjects();   
    }

    getProjectById(id: number): Observable<Project> {
        return this.projectService.getProjectById(id);
    }

    createProject(project: Project): Observable<Project> {
        return this.projectService.createProject(project);
    }

    updateProject(project: Project): Observable<Project> {
        return this.projectService.updateProject(project);
    }

    deleteProject(id: number): Observable<void> {
        return this.projectService.deleteProject(id);
    }
}
