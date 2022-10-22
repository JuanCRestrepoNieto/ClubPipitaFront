import React from "react";
import css from './EstilosConsulta.module.css';

function FRMConsultarTorneo(props){
    return(
        <div>
            <form>
                <label for="codigo">Codigo:  </label><input className="" id="codigo" type ='text' placeholder="Digite el codigo"/>
            </form>
            <table>
                <thead>
                    <th>Codigo</th>
                    <th>Fecha inicio</th>
                    <th>Fecha final</th>
                </thead>
            </table>
        </div>
    );
}

export{FRMConsultarTorneo}