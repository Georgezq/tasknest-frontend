export class Columns{
    constructor(
        private _id: number,
        private _boardId: number,
        private _name: string,
        private _position: number,
        private _description: string,
    ){}

    get id(): number { return this._id; }
    get boardId(): number { return this._boardId; }
    get name(): string { return this._name; }
    get position(): number { return this._position; }
    get description(): string { return this._description; }
    
    set boardId(value: number) { this._boardId = value; }
    set name(value: string) { this._name = value; }
    set position(value: number) { this._position = value; }
    set description(value: string) { this._description = value; }
    
    clone(): Columns {
        return new Columns(
            this._id,
            this._boardId,
            this._name,
            this._position,
            this._description
        );
    }    

}