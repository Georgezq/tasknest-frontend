export class Task {
    constructor(
        private _id: number,
        private _columndId: number,
        private _title: string,
        private _description: string,
        private _priority: string,
        private _asignedTo: number,
        private _limitDate: Date,
        private _label: string,
        private _position: number,
        private _status: string,
        private _createdAt: Date,
        private _updatedAt: Date
    ) {}

    get id(): number { return this._id; }
    get columnId(): number { return this._columndId; }
    get title(): string { return this._title; }
    get description(): string { return this._description; }
    get priority(): string { return this._priority; }
    get asignedTo(): number { return this._asignedTo; }
    get limitDate(): Date { return this._limitDate; }
    get label(): string { return this._label; }
    get position(): number { return this._position; }
    get status(): string { return this._status; }
    get createdAt(): Date { return this._createdAt; }
    get updatedAt(): Date { return this._updatedAt; }

    set columnId(value: number) { this._columndId = value; }
    set title(value: string) { this._title = value; }
    set description(value: string) { this._description = value; }
    set priority(value: string) { this._priority = value; }
    set asignedTo(value: number) { this._asignedTo = value; }
    set limitDate(value: Date) { this._limitDate = value; }
    set label(value: string) { this._label = value; }
    set position(value: number) { this._position = value; }
    set status(value: string) { this._status = value; }
    set createdAt(value: Date) { this._createdAt = value; }
    set updatedAt(value: Date) { this._updatedAt = value; }
    
    clone(): Task {
        return new Task(
            this._id,
            this._columndId,
            this._title,
            this._description,
            this._priority,
            this._asignedTo,
            new Date(this._limitDate),
            this._label,
            this._position,
            this._status,
            new Date(this._createdAt),
            new Date(this._updatedAt)
        );
    }
}