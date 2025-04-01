import { TaskMapper } from '@/app/core/mappers/task.mapper';
import { Task } from '@/app/core/models/task.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { TaskDTO } from '../../dto/task.dto';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  
  private apiUrl = 'https://api.example.com/users';

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.http.get<TaskDTO[]>(this.apiUrl).pipe(map((apiTasks) => apiTasks.map(TaskMapper.toDomain)));
  }

  getTaskById(id: number): Observable<Task> {
    return this.http.get<TaskDTO>(`${this.apiUrl}/${id}`).pipe(map(TaskMapper.toDomain));
  }

  createTask(task: Task): Observable<Task> {
    return this.http.post<TaskDTO>(this.apiUrl, TaskMapper.toDTO(task)).pipe(map(TaskMapper.toDomain));
  }

  updateTask(task: Task): Observable<Task> {
    return this.http.put<TaskDTO>(`${this.apiUrl}/${task.id}`, TaskMapper.toDTO(task)).pipe(map(TaskMapper.toDomain));
  }

  deleteTask(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

}
