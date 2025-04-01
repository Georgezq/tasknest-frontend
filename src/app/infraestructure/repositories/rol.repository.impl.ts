import { RolRepository } from '@/app/core/repositories/rol.repository';
import { Injectable } from '@angular/core';
import { RolService } from '../services/rols/rol.service';
import { Rol } from '@/app/core/models/rol.model';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})

export class RolRepositoryImpl implements RolRepository{

    
    constructor(private rolService: RolService){}

    getAllRoles(): Observable<Rol[]> {
     return this.rolService.getRols();   
    }

    getRoleById(id: number): Observable<Rol> {
        return this.rolService.getRolById(id);
    }

    createRole(rol: Rol): Observable<Rol> {
        return this.rolService.createRol(rol);
    }

    updateRole(rol: Rol): Observable<Rol> {
        return this.rolService.updateRol(rol);
    }

    deleteRole(id: number): Observable<void> {
        return this.rolService.deleteRol(id);
    }

    
}