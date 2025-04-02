export class Board {
    // un proyecto puede tener varios tableros, esto estara en el sidebar donde se listaran los proyectos del usuario y estos proyectos pueden desplegar distintos tableros
    constructor(
        private _id: number,
        private _proyectoId: number,
        private _nombre: string,
        private _descripcion: string,
        private _fechaCreacion: Date,
        private _fechaActualizacion: Date,
        private _estado: string,
        private _creadoPor: number,
        private _actualizadoPor: number,
        private _fechaInicio: Date,
        private _fechaFin: Date,
        private _fechaInicioPlanificada: Date,
        private _fechaFinPlanificada: Date,
        private _fechaInicioReal: Date,
        private _fechaFinReal: Date,
        // private fechaInicioEsperada: Date,
        // private fechaFinEsperada: Date,
        // private fechaInicioEsperadaPlanificada: Date,
        // private fechaFinEsperadaPlanificada: Date,
        // private fechaInicioEsperadaReal: Date,   
    ){}

    get id(): number { return this._id; }
    get proyectoId(): number { return this._proyectoId; }
    get nombre(): string { return this._nombre; }
    get descripcion(): string { return this._descripcion; }
    get fechaCreacion(): Date { return this._fechaCreacion; }
    get fechaActualizacion(): Date { return this._fechaActualizacion; }
    get estado(): string { return this._estado; }
    get creadoPor(): number { return this._creadoPor; }
    get actualizadoPor(): number { return this._actualizadoPor; }
    get fechaInicio(): Date { return this._fechaInicio; }
    get fechaFin(): Date { return this._fechaFin; }
    get fechaInicioPlanificada(): Date { return this._fechaInicioPlanificada; }
    get fechaFinPlanificada(): Date { return this._fechaFinPlanificada; }
    get fechaInicioReal(): Date { return this._fechaInicioReal; }
    get fechaFinReal(): Date { return this._fechaFinReal; }

    set proyectoId(value: number) { this._proyectoId = value; }
    set nombre(value: string) { this._nombre = value; }
    set descripcion(value: string) { this._descripcion = value; }
    set fechaCreacion(value: Date) { this._fechaCreacion = value; }
    set fechaActualizacion(value: Date) { this._fechaActualizacion = value; }
    set estado(value: string) { this._estado = value; }
    set creadoPor(value: number) { this._creadoPor = value; }
    set actualizadoPor(value: number) { this._actualizadoPor = value; }
    set fechaInicio(value: Date) { this._fechaInicio = value; }
    set fechaFin(value: Date) { this._fechaFin = value; }
    set fechaInicioPlanificada(value: Date) { this._fechaInicioPlanificada = value; }
    set fechaFinPlanificada(value: Date) { this._fechaFinPlanificada = value; }
    set fechaInicioReal(value: Date) { this._fechaInicioReal = value; }
    set fechaFinReal(value: Date) { this._fechaFinReal = value; }

    clone(): Board {
        return new Board(
            this._id,
            this._proyectoId,
            this._nombre,
            this._descripcion,
            new Date(this._fechaCreacion),
            new Date(this._fechaActualizacion),
            this._estado,
            this._creadoPor,
            this._actualizadoPor,
            new Date(this._fechaInicio),
            new Date(this._fechaFin),
            new Date(this._fechaInicioPlanificada),
            new Date(this._fechaFinPlanificada),
            new Date(this._fechaInicioReal),
            new Date(this._fechaFinReal)
        );
    }
}