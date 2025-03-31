import { Observable } from "rxjs";

import { User } from "../models/user.model";

export abstract class UserRepository {
    abstract getUserById(id: number): Observable<User>;
    abstract getAllUsers(): Observable<User[]>;
    abstract createUser(user: User): Observable<User>;
    abstract updateUser(user: User): Observable<User>;
    abstract deleteUser(id: number): Observable<void>;
}