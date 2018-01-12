import { DTOfoto } from "./DTOfoto";
import { DTOentretenimiento, DTOcomplemento } from "./DTOcomplementos";

export class DTOhabitacion {
    HABidentificacion : string;
    HABtipo : DTOHabitaciontipo;   
}

export class DTOHabitaciontipo {
    HTIid : number;
    HTIdescripcion : string;
    HTIcantPersonasMax : number;
    HTItarifaEstandar : number;
    HTItarifaAdicional : number;
    HTIfoto : string; 
    HTIfotos : Array<DTOfoto>;
    HTIentretenimiento : Array<DTOentretenimiento>;
    HTIcomplemento : Array<DTOcomplemento>;
}

