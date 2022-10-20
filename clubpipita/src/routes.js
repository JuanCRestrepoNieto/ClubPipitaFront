import { Actualizar } from "./Actualizar/Actualizar.js";
import { FRMTorneo } from "./Actualizar/FRMActualizar/FRMTorneo.js";
import { Consulta } from "./Consulta/Consulta.js";
import { Informes } from "./Informes/Informes.js";
import { LandingPage } from "./LandingPage/LandingPage";
import { Nosotros } from "./Nosotros/Nosotros.js";
import { Registrar } from "./Registrar/Registrar.js";


const rutas = [
        /*RUTAS INICIALES*/
    { path: '/', component: LandingPage },
    { path: '/Inicio', component: LandingPage, exact: true },
    { path: '*', component: LandingPage },
    { path: '/Consulta', component: Consulta, exact: true },
    { path: '/Actualizar', component: Actualizar, exact: true },
    { path: '/Registrar', component: Registrar, exact: true },
    { path: '/Informes', component: Informes, exact: true },
    { path: '/Nosotros', component: Nosotros, exact: true },


    /*RUTAS DEL ACTUALIZAR*/
    {path: '/ActualizarTorneo', component: FRMTorneo, exact: true},
    {},
    {},
    {},
    {},
    {}
    
];

export {rutas}