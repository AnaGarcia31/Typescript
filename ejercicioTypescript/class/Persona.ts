import { Direccion } from "./Direccion";
import { Mail } from "./Mail";
import { Telefono } from "./Telefono";

export class Persona {
    private _nombre: string;
    private _apellidos: string;
    private _dni: string;
    private _nacimiento: Date;
    private _color: string;
    private _sexo: Sexo;
    private _direcciones: Direccion[];
    private _mails: Mail[];
    private _telefonos: Telefono[];
    private _notas: string[];

    constructor(_nombre?: string, _apellidos?: string, _dni?: string, _nacimiento?: Date,_color?: string, _sexo?: Sexo, _direcciones?: Direccion[], _mails?: Mail[], _telefonos?: Telefono[], _notas?: string[]){
        this._nombre = _nombre ?? "";
        this._apellidos = _apellidos ?? "";
        this._dni = _dni ?? "";
        this._nacimiento = _nacimiento ?? new Date("1970-01-01");
        this._color = _color ?? "";
        this._sexo = _sexo ?? Sexo.hombre;
        this._direcciones = _direcciones ?? [];
        this._mails = _mails ?? [];
        this._telefonos = _telefonos ?? [];
        this._notas = _notas ?? [];
    }

    get nombre() {
      return this._nombre
    }
    
    set nombre(val: string) {
      this._nombre = val
    }
    
    get apellidos() {
      return this._apellidos
    }
    
    set apellidos(val: string) {
      this._apellidos = val
    }
    
    get edad() {
        let resta = Math.abs(new Date().getTime() - this._nacimiento.getTime());
        return Math.floor(resta / (1000 * 60 * 60 * 24 * 365))
    }
    
    get dni() {
      return this._dni
    }
    
    set dni(val: string) {
      this._dni = val
    }
    
    get nacimiento() {
      return this._nacimiento
    }
    
    set nacimiento(val: Date) {
      this._nacimiento = val
    }
    
    get color() {
      return this._color
    }
    
    set color(val: string) {
      this._color = val
    }
    
    get sexo() {
      return this._sexo
    }
    
    set sexo(val: Sexo) {
      this._sexo = val
    }
    
    get direcciones() {
      return this._direcciones
    }
    
    set direcciones(val: Direccion[]) {
      this._direcciones = val
    }
    
    get mails() {
      return this._mails
    }
    
    set mails(val: Mail[]) {
      this._mails = val
    }
    
    get telefonos() {
      return this._telefonos
    }
    
    set telefonos(val: Telefono[]) {
      this._telefonos = val
    }
    
    get notas() {
      return this._notas
    }
    
    set notas(val: string[]) {
      this._notas = val
    }

}

export enum Sexo {
    hombre = "hombre",
    mujer = "mujer"
}