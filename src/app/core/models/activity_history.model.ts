export class ActivityHistory{
    constructor(
        private _id: number,
        private _taskId: number,
        private _userId: number,
        private _accion: string,
        private _details: string,
        private _fechaCreacion: Date,
        private _fechaActualizacion: Date,
    ){}

    get id(): number { return this._id; }
    get taskId(): number { return this._taskId; }
    get userId(): number { return this._userId; }
    get accion(): string { return this._accion; }
    get details(): string { return this._details; }
    get fechaCreacion(): Date { return this._fechaCreacion; }
    get fechaActualizacion(): Date { return this._fechaActualizacion; }
    
    set taskId(value: number) { this._taskId = value; }
    set userId(value: number) { this._userId = value; }
    set accion(value: string) { this._accion = value; }
    set details(value: string) { this._details = value; }
    set fechaCreacion(value: Date) { this._fechaCreacion = value; }
    set fechaActualizacion(value: Date) { this._fechaActualizacion = value; }
    
    clone(): ActivityHistory{
        return new ActivityHistory(
            this._id,
            this._taskId,
            this._userId,
            this._accion,
            this._details,
            new Date(this._fechaCreacion),
            new Date(this._fechaActualizacion),
        );
    }
}