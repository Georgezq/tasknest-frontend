export class Project {
    constructor(
        private _id: number,
        private _name: string,
        private _description: string,
        private _status: string,
        private _startDate: Date,
        private _endDate: Date,
        private _createdBy: number,
        private _createdAt: Date,
        private _updatedAt: Date
    ) {}

    get id(): number { return this._id; }
    get name(): string { return this._name; }
    get description(): string { return this._description; }
    get status(): string { return this._status; }
    get startDate(): Date { return this._startDate; }
    get endDate(): Date { return this._endDate; }
    get createdBy(): number { return this._createdBy; }
    get createdAt(): Date { return this._createdAt; }
    get updatedAt(): Date { return this._updatedAt; }
    
    set name(value: string) { this._name = value; }
    set description(value: string) { this._description = value; }
    set status(value: string) { this._status = value; }
    set startDate(value: Date) { this._startDate = value; }
    set endDate(value: Date) { this._endDate = value; }
    set createdBy(value: number) { this._createdBy = value; }
    set createdAt(value: Date) { this._createdAt = value; }
    set updatedAt(value: Date) { this._updatedAt = value; }
    
    clone(): Project {
        return new Project(
            this._id,
            this._name,
            this._description,
            this._status,
            new Date(this._startDate),
            new Date(this._endDate),
            this._createdBy,
            new Date(this._createdAt),
            new Date(this._updatedAt)
        );
    }
}