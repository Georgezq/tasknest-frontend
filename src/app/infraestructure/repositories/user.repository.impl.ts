import { UserRepository } from '@/app/core/repositories/user.repository';
import { Injectable } from '@angular/core';
import { UserService } from '../services/users/user.service';
import { User} from '@/app/core/models/user.model';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})

export class UserRepositoryImpl implements UserRepository{

    constructor(private userService: UserService){}

    getAllUsers(): Observable<User[]> {
     return this.userService.getUsers();   
    }

    authenticate(email: string, password: string): Observable<User> {
        return this.userService.authenticate(email, password);
    }

    thisEmailExists(email: string): Observable<boolean> {
        return this.userService.thisEmailExists(email);
    }

    thisUsernameExists(username: string): Observable<boolean> {
        return this.userService.thisUsernameExists(username);
    }

    sendEmailVerification(email: string): Observable<void> {
        return this.userService.sendEmailVerification(email);
    }

    getUserById(id: number): Observable<User> {
        return this.userService.getUserById(id);
    }

    createUser(user: User): Observable<User> {
        return this.userService.createUser(user);
    }

    updateUser(user: User): Observable<User> {
        return this.userService.updateUser(user);
    }

    deleteUser(id: number): Observable<void> {
        return this.userService.deleteUser(id);
    }
}