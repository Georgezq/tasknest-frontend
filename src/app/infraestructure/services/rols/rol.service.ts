import { RolMapper } from '@/app/core/mappers/rol.mapper';
import { Rol } from '@/app/core/models/rol.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { RolDTO } from '../../dto/rol.dto';

@Injectable({
  providedIn: 'root'
})
export class RolService {

  private apiUrl = 'https://api.example.com/users';

  constructor(private http: HttpClient) { }


  getRols(): Observable<Rol[]> {
    return this.http.get<RolDTO[]>(this.apiUrl).pipe(map((apiRols) => apiRols.map(RolMapper.toDomain)));
  }

  getRolById(id: number): Observable<Rol> {
    return this.http.get<RolDTO>(`${this.apiUrl}/${id}`).pipe(map(RolMapper.toDomain));
  }

  createRol(rol: Rol): Observable<Rol> {
    return this.http.post<RolDTO>(this.apiUrl, RolMapper.toDTO(rol)).pipe(map(RolMapper.toDomain));
  }

  updateRol(rol: Rol): Observable<Rol> {
    return this.http.put<RolDTO>(`${this.apiUrl}/${rol.id}`, RolMapper.toDTO(rol)).pipe(map(RolMapper.toDomain));
  }

  deleteRol(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
  
  
}
