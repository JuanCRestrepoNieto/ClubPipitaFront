import React from "react"
import { Img } from '../Img/Img.js'
import css from './InicioSesion.module.css'

function InicioSesion(props) {
    return (
        <div
            className={css.fondo}>
            <div
                className={css.contenedorInicioSesion}>
                <div
                    className={css.TituloInicioSesion}>
                    Iniciar Sesión
                </div>
                <div
                    className={css.InfoSesion}>
                    <div
                        className={css.Usuario}>
                        Usuario
                    </div>
                    <div
                        className={css.InputUsuario}>
                        <input>
                        </input>
                    </div>
                    <div
                        className={css.Contrasena}>
                        Contraseña
                    </div>
                    <div
                        className={css.InputContrasena}>
                        <input>
                        </input>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { InicioSesion }