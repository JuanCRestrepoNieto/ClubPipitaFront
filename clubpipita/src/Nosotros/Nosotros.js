import React from "react";
import css from './Nosotros.module.css'

function Nosotros (props){
    return(
        <div>
            <div
                className={css.TituloNosotros}>
                    Nosotros
                </div>
                
                <div
                className={css.Mision}>
                    Mision
                </div>
                <div
                className={css.Vision}>
                    Vision
                </div>
                <div
                className={css.QuienesSomos}>
                    Quienes somos
                </div>
        </div>
    );
}

export {Nosotros}