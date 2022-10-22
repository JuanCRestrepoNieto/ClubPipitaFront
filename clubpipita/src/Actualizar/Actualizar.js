import React from "react";
import {NavLink} from "react-router-dom";
import css from "./Actualizar.module.css"

function Actualizar (props){
    return(
        <div>
        <div className={css.titulo}>Actualizar</div>
        <div className={css.ContenedorBotones}>
            <nav className={css.nav}>
                <ul className={css.listaBotones}>
                    <NavLink to='/ActualizarTorneo' activeclassname="active" className={`btn btn-success ${css.lista}`} aria-current="page">
                    <li className={css.textoComponenteLista}>Torneo</li>
                    </NavLink >
                    <NavLink to='/Nosotros' activeclassname="active" className={`btn btn-success ${css.lista}`} aria-current="page">
                    <li className={css.textoComponenteLista}>Equipo</li>
                    </NavLink>
                    <NavLink to='/Nosotros' activeclassname="active" className={`btn btn-success ${css.lista}`} aria-current="page">
                    <li className={css.textoComponenteLista}>Jugador</li>
                    </NavLink>
                </ul>
                <ul className={css.listaBotones}>
                <NavLink to='/Nosotros' activeclassname="active" className={`btn btn-success ${css.lista}`} aria-current="page">
                    <li className={css.textoComponenteLista}>Datos personales</li>
                    </NavLink>
                    <NavLink to='/Nosotros' activeclassname="active" className={`btn btn-success ${css.lista}`} aria-current="page">
                    <li className={css.textoComponenteLista}>Estadisticas</li>
                    </NavLink>
                    <NavLink to='/Nosotros' activeclassname="active" className={`btn btn-success ${css.lista}`} aria-current="page">
                    <li className={css.textoComponenteLista}>Partidos</li>
                    </NavLink>
                </ul>
            </nav>
        </div>
    </div>
    );
}
export {Actualizar}