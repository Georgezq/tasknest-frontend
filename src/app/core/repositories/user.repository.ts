import { Observable } from "rxjs";

import { User } from "../models/user.model";

export abstract class UserRepository {
    abstract thisEmailExists(email: string): Observable<boolean>;
    abstract thisUsernameExists(username: string): Observable<boolean>;
    abstract getUserById(id: number): Observable<User>;
    abstract sendEmailVerification(email: string): Observable<void>;
    abstract getAllUsers(): Observable<User[]>;
    abstract createUser(user: User): Observable<User>;
    abstract updateUser(user: User): Observable<User>;
    abstract deleteUser(id: number): Observable<void>;
}