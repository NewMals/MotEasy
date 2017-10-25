import { DTOtarifas } from "./DTOtarifas";

export class DTOhabitacion {
    HABid : number;
    HABestablecimiento : number;
    HABtipo : DTOtipoHabitacion;
    HABfotoPrincipal : string;
}

export class DTOtipoHabitacion {
    TIHid : number;
    TIHdescripcion : string;
    TIHcantPersonas : number;
    TIHcantPersonasMax : number;
    TIHtarifa : Array<DTOtarifas>;
}