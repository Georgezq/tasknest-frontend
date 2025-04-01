import { Observable } from "rxjs";

import { Task } from "../models/task.model";

export abstract class TaskRepository {
    abstract getAllTasks(): Observable<Task[]>;
    abstract getTaskById(id: number): Observable<Task>;
    abstract createTask(task: Task): Observable<Task>;
    abstract updateTask(task: Task): Observable<Task>;
    abstract deleteTask(id: number): Observable<void>;
}