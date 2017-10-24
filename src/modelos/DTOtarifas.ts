export class DTOtarifas {
    TAFid : number;
    TAFtipo : DTOtarifasTipo;
    TAFvalorEstandar : number;
    TAFvalorAdicional : number;
}

export class DTOtarifasTipo {
    TATid : number;
    TATdescripcion : string;
}

