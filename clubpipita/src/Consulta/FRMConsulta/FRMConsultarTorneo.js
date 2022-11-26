import React from "react";
import css from './EstilosConsulta.module.css';

function FRMConsultarTorneo(props){
    return(
        <div className={css.ConsultarTorneoContainer}>
            <form className={css.ConsultarTorneo_form_label_text}>
                <label for="codigo" className={css.label}>Codigo:  </label><input className={css.ConsultarTorneo_text_id} id="codigo" type ='text' placeholder="Digite el codigo"/>
            </form>
            <table className={css.ConsultarTorneo_table}>
                <thead className={css.ConsultarTorneo_head_table}>
                    <th>Codigo</th>
                    <th>Fecha inicio</th>
                    <th>Fecha final</th>
                </thead>
            </table>
        </div>
    );
}

export{FRMConsultarTorneo}