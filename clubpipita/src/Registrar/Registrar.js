import React from "react";
import {NavLink} from "react-router-dom";
import css from "./Registrar.module.css"

function Registrar(props) {
    return (
        <div>
        <div className={css.titulo}>Registrar</div>
        <div className={css.ContenedorBotones}>
            <nav className={css.nav}>
                <ul className={css.listaBotones}>
                    <NavLink to='/RegistrarTorneo' activeclassname="active" className={`btn btn-success ${css.lista}`} aria-current="page">
                    <li className={css.textoComponenteLista}>Torneo</li>
                    </NavLink >
                    <NavLink to='/RegistrarEquipo' activeclassname="active" className={`btn btn-success ${css.lista}`} aria-current="page">
                    <li className={css.textoComponenteLista}>Equipo</li>
                    </NavLink>
                    <NavLink to='/RegistrarJugador' activeclassname="active" className={`btn btn-success ${css.lista}`} aria-current="page">
                    <li className={css.textoComponenteLista}>Jugador</li>
                    </NavLink>
                </ul>
                <ul className={css.listaBotones}>
                <NavLink to='/RegistrarDatosPersonales' activeclassname="active" className={`btn btn-success ${css.lista}`} aria-current="page">
                    <li className={css.textoComponenteLista}>Datos personales</li>
                    </NavLink>
                    <NavLink to='/RegistrarEstadisticas' activeclassname="active" className={`btn btn-success ${css.lista}`} aria-current="page">
                    <li className={css.textoComponenteLista}>Estadisticas</li>
                    </NavLink>
                    <NavLink to='/RegistrarPartido' activeclassname="active" className={`btn btn-success ${css.lista}`} aria-current="page">
                    <li className={css.textoComponenteLista}>Partidos</li>
                    </NavLink>
                </ul>
            </nav>
        </div>
    </div>
    )
}

export {Registrar}