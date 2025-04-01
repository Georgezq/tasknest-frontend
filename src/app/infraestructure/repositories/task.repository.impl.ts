import { TaskRepository } from '@/app/core/repositories/task.repository';
import { Injectable } from '@angular/core';
import { TaskService } from '../services/tasks/task.service';
import { Task } from '@/app/core/models/task.model';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})

export class TaskRepositoryImpl implements TaskRepository{
    constructor(private taskService: TaskService){}

    getAllTasks(): Observable<Task[]> {
     return this.taskService.getTasks();   
    }

    getTaskById(id: number): Observable<Task> {
        return this.taskService.getTaskById(id);
    }

    createTask(task: Task): Observable<Task> {
        return this.taskService.createTask(task);
    }

    updateTask(task: Task): Observable<Task> {
        return this.taskService.updateTask(task);
    }

    deleteTask(id: number): Observable<void> {
        return this.taskService.deleteTask(id);
    }
}