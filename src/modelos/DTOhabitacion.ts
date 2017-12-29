import { DTOfoto } from "./DTOfoto";
import { DTOentretenimiento } from "./DTOcomplementos";

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
    HTIfotos : Array<DTOfoto>;
    HTIentretenimiento : Array<DTOentretenimiento>;
}

