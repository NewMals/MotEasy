import { DTOHabitaciontipo } from "./DTOhabitacion";
import { DTOfoto } from "./DTOfoto";

export class DTOEstablecimiento {
    ESTid : number;
    ESTnombre : string;
    ESTciudad : number;
    ESTtelefono : number;
    ESTdireccion : string;
    ESTfotos : Array<DTOfoto>;
    ESTlocalidad: string;
    ESThabitacionesTipos: Array<DTOHabitaciontipo>;
    ESTdistancia: string;
    ESTduracion: string;
    ESTgeolocalizacion: DTOposicion;
    ESTvalorMin: number;
}

export class DTOposicion {
    latitude: number;
    longitude: number;
}