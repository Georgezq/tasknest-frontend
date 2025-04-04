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

  private apiUrl = 'http://localhost:5195/api/users';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<UserDTO[]>(this.apiUrl).pipe(map((apiUsers) => apiUsers.map(UserMapper.toDomain)));
  }

  thisEmailExists(email: string): Observable<boolean> {
    return this.http.get<{ exists: boolean }>(`${this.apiUrl}/exists`, {
      params: { email }
    }).pipe(
      map(response => response.exists)
    );
  }

  sendEmailVerification(email: string): Observable<void> {
    return this.http.get<void>(`${this.apiUrl}/email`, { params: {email} });  
  }
  

  thisUsernameExists(username: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiUrl}/exists/username/${username}`);
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<UserDTO>(`${this.apiUrl}/${id}`).pipe(map(UserMapper.toDomain));
  }

  createUser(user: User): Observable<User> {
    return this.http.post<UserDTO>(this.apiUrl, UserMapper.toDTO(user)).pipe(map(UserMapper.toDomain));
  }

  updateUser(user: User): Observable<User> {
    return this.http.put<UserDTO>(`${this.apiUrl}/${user.id}`, UserMapper.toDTO(user)).pipe(map(UserMapper.toDomain));
  }

  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

}
