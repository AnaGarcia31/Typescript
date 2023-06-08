export class Mail{
    private _tipo: string;
    private _direccion: string;

    constructor(_direccion?:string, _tipo?:string){
        this._tipo = _tipo ?? "";
        this._direccion = _direccion ?? "";
    }

    get tipo() {
      return this._tipo
    }
    
    set tipo(val: string) {
      this._tipo = val
    }
    
    get direccion() {
      return this._direccion
    }
    
    set direccion(val: string) {
      this._direccion = val
    }
}