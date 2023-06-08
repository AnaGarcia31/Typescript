export class Direccion{
    private _calle: string;
    private _numero: number;
    private _piso: number;
    private _letra: string;
    private _codigopostal: string;
    private _pobalcion: string;
    private _provincia: Provincia;

    constructor(_calle ?: string, _numero ?: number, _piso ?: number, _letra ?: string, _codigopostal ?: string, _poblacion ?: string, _provincia ?: Provincia ){
        this._calle = _calle ?? "";
        this._numero = _numero ?? -1;
        this._piso = _piso ?? -1;
        this._letra = _letra ?? "noletra";
        this._codigopostal = _codigopostal ?? "00000";
        this._pobalcion = _poblacion ?? "nopoblacion";
        this._provincia = _provincia ?? Provincia.Madrid;
    }

    get calle() {
      return this._calle
    }
    
    set calle(val: string) {
      this._calle = val
    }
    
    get numero() {
      return this._numero
    }
    
    set numero(val: number) {
      this._numero = val
    }
    
    get piso() {
      return this._piso
    }
    
    set piso(val: number) {
      this._piso = val
    }
    
    get letra() {
      return this._letra
    }
    
    set letra(val: string) {
      this._letra = val
    }
    
    get codigopostal() {
      return this._codigopostal
    }
    
    set codigopostal(val: string) {
      this._codigopostal = val
    }
    
    get pobalcion() {
      return this._pobalcion
    }
    
    set pobalcion(val: string) {
      this._pobalcion = val
    }
    
    get provincia() {
      return this._provincia
    }
    
    set provincia(val: Provincia) {
      this._provincia = val
    }
    
}

export enum Provincia{
    Madrid = "Madrid",
    Barcelona = "Barcelona",
    Valencia = "Valencia",
}