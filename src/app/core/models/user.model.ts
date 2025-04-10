export class User {
    constructor(
        private _id: number,
        private _name?: string,
        private _email?: string,
        private _password?: string,
        private _role?: string,
        private _createdAt?: Date,
        private _updatedAt?: Date
    ) {}

    get id(): number { return this._id; }
    get name(): string | undefined { return this._name; }
    get email(): string | undefined { return this._email; }
    get password(): string | undefined { return this._password; }
    get role(): string | undefined { return this._role; }
    get createdAt(): Date | undefined { return this._createdAt; }
    get updatedAt(): Date | undefined { return this._updatedAt; }

    set name(value: string) { this._name = value; }
    set email(value: string) { this._email = value; }
    set password(value: string) { this._password = value; }
    set role(value: string) { this._role = value; }
    set createdAt(value: Date) { this._createdAt = value; }
    set updatedAt(value: Date) { this._updatedAt = value; }

    clone(): User{
        return new User(
            this._id,
            this._name,
            this._email,
            this._password,
            this._role,
            new Date(this._createdAt?.getTime() || new Date()),
            new Date(this._updatedAt?.getTime() || new Date())
        );
    }

}