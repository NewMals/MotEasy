import { DTOHabitaciontipo } from "./DTOhabitacion";

export class DTOEstablecimiento {
    ESTid : number;
    ESTnombre : string;
    ESTciudad : number;
    ESTtelefono : number;
    ESTdireccion : string;
    ESTfotoPrincipal : string;
    ESTlocalidad: string;
    ESThabitacionesTipos: Array<DTOHabitaciontipo>;
}

