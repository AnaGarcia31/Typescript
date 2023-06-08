export class Telefono{
    private _tipo: string;
    private _telefono: string;

    constructor(_telefono?:string, _tipo?:string){
        this._tipo = _tipo ?? "";
        this._telefono = _telefono ?? "";
    }

    get tipo() {
      return this._tipo
    }
    
    set tipo(val: string) {
      this._tipo = val
    }
    
    get telefono() {
      return this._telefono
    }
    
    set telefono(val: string) {
      this._telefono = val
    }
}