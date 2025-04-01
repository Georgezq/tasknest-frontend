export class Rol {
    constructor(
        private _id: number,
        private _name: string,
        private _description: string,
        private _createdAt: Date,
        private _updatedAt: Date
    ) {}

    get id(): number { return this._id; }
    get name(): string { return this._name; }
    get description(): string { return this._description; }
    get createdAt(): Date { return this._createdAt; }
    get updatedAt(): Date { return this._updatedAt; }
    
    set name(value: string) { this._name = value; }
    set description(value: string) { this._description = value; }
    set createdAt(value: Date) { this._createdAt = value; } 
    set updatedAt(value: Date) { this._updatedAt = value; }
    
    clone(): Rol {
        return new Rol(
            this._id,
            this._name,
            this._description,
            new Date(this._createdAt),
            new Date(this._updatedAt)
        );
    }
}