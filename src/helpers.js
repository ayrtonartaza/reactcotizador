
export function calcularTotal(cantidad,plazo){
    let porcentajeCantidad;
    if(cantidad>0 && cantidad <=1000){
        porcentajeCantidad= cantidad * 0.20;
    }else if(cantidad>1000 && cantidad <=5000){
        porcentajeCantidad= cantidad * 0.15;
    }else if(cantidad>5000){
        porcentajeCantidad= cantidad * 0.10;
    }

    let porcentajePlazo;
    switch (plazo) {
        case 3:
            porcentajePlazo =plazo*0.20
            break;
        case 6:
            porcentajePlazo = plazo*0.15
            break;
        case 12:
            porcentajePlazo = plazo*0.10
            break;
        case 24:
            porcentajePlazo = plazo*0.5
            break;
        default:
            break;
    }
    let totalGlobal= cantidad + porcentajeCantidad + porcentajePlazo;
    /* returna lo que tomara setTotal */
    return totalGlobal
}