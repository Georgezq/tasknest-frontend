import { Observable } from "rxjs";

import { Rol } from "../models/rol.model";

export abstract class RolRepository {
    abstract getAllRoles(): Observable<Rol[]>;
    abstract getRoleById(id: number): Observable<Rol>;
    abstract createRole(rol: Rol): Observable<Rol>;
    abstract updateRole(rol: Rol): Observable<Rol>;
    abstract deleteRole(id: number): Observable<void>;
}