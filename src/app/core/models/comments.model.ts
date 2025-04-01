export class Comments{
    constructor(
        private _id: number,
        private _taskId: number,
        private _userId: number,
        private _text: string,
        private _createdAt: Date,
        private _updatedAt: Date,
        private _deletedAt: Date,
    ){}

    get id(): number { return this._id; }
    get taskId(): number { return this._taskId; }
    get userId(): number { return this._userId; }
    get text(): string { return this._text; }
    get createdAt(): Date { return this._createdAt; }
    get updatedAt(): Date { return this._updatedAt; }
    get deletedAt(): Date { return this._deletedAt; }
    
    set taskId(value: number) { this._taskId = value; }
    set userId(value: number) { this._userId = value; }
    set text(value: string) { this._text = value; }
    set createdAt(value: Date) { this._createdAt = value; }
    set updatedAt(value: Date) { this._updatedAt = value; }
    set deletedAt(value: Date) { this._deletedAt = value; }
    
    clone(): Comments{
        return new Comments(
            this._id,
            this._taskId,
            this._userId,
            this._text,
            new Date(this._createdAt),
            new Date(this._updatedAt),
            new Date(this._deletedAt),
        );
    }
}