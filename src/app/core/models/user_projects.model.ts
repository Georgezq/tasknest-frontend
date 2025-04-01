export class UserProjects {
    constructor(
        private _id: number,
        private _projectId: number,
        private _userId: number,
        private _asigned_In: Date,
    ){}

    get id(): number { return this._id; }
    get projectId(): number { return this._projectId; }
    get userId(): number { return this._userId; }
    get asigned_In(): Date { return this._asigned_In; }
    
    set projectId(value: number) { this._projectId = value; }
    set userId(value: number) { this._userId = value; }
    set asigned_In(value: Date) { this._asigned_In = value; }

    clone(): UserProjects{
        return new UserProjects(
            this._id,
            this._projectId,
            this._userId,
            new Date(this._asigned_In),
        );
    }
}