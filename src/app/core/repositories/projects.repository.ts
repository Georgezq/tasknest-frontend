import { Observable } from "rxjs";

import { Project } from "../models/projects.model";

export abstract class ProjectRepository {
    abstract getAllProjects(): Observable<Project[]>;
    abstract getProjectById(id: number): Observable<Project>;
    abstract createProject(project: Project): Observable<Project>;
    abstract updateProject(project: Project): Observable<Project>;
    abstract deleteProject(id: number): Observable<void>;
}