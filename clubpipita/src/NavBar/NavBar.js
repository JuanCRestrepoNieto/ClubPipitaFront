import React, { createContext } from "react";
import css from "./NavBar.module.css"

function NavBar(props) {
    return (
<body>
<nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <a className="navbar-brand" href="#">Club Pipita</a>
    <div className={`collapse navbar-collapse ${css.contenedorOpciones}`} id="navbarTogglerDemo03">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="#">Nosotros</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#">Consultar</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#">Actualizar</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#">Registrar</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#">Informes</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="¿Buscar?" aria-label="Search"/>
        <button className="btn btn-outline-info" type="submit">Buscar</button>
      </form>
    </div>
  </div>
</nav>
<div className={css.fondo}></div>
</body>
    );
}

export {NavBar}