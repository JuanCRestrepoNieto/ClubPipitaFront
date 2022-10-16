import React from "react";
import css from './LandingPage.module.css';

function LandingPage(props) {
    return (
        <div
            className={css.contenedor}>
            Bienvenido {props.usuario}
        </div>
    )
}

export {LandingPage}