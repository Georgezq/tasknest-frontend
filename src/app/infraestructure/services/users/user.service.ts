import { User } from '@/app/core/models/user.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { UserDTO } from '../../dto/user.dto';
import { UserMapper } from '@/app/core/mappers/user.mapper';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'https://api.example.com/users';

  constructor(private http: HttpClient) { }

  thisEmailExists(email: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiUrl}/exists/email/${email}`);
  }

  thisUsernameExists(username: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiUrl}/exists/username/${username}`);
  }

  getUsers(): Observable<User[]> {
    return this.http.get<UserDTO[]>(this.apiUrl).pipe(map((apiUsers) => apiUsers.map(UserMapper.fromDomaininToApi)));
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<UserDTO>(`${this.apiUrl}/${id}`).pipe(map(UserMapper.fromDomaininToApi));
  }

  createUser(user: User): Observable<User> {
    return this.http.post<UserDTO>(this.apiUrl, UserMapper.toDomain(user)).pipe(map(UserMapper.fromDomaininToApi));
  }

  updateUser(user: User): Observable<User> {
    return this.http.put<UserDTO>(`${this.apiUrl}/${user.id}`, UserMapper.toDomain(user)).pipe(map(UserMapper.fromDomaininToApi));
  }

  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

}
