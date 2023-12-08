import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand text-dark" href="#">iBUS</a>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link text-dark active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark active" href="#">Atendimento</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle text-dark active" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Serviços
              </a>
              <ul className="dropdown-menu dropdown-menu-light" aria-labelledby="navbarDarkDropdownMenuLink">
                <li><a className="dropdown-item text-dark" href="#">Viajar</a></li>
                <li><a className="dropdown-item text-dark" href="#">Acompanhar Agendamento</a></li>
                <li><a className="dropdown-item text-dark" href="#">Noticias</a></li>
              </ul>
            </li>
          </ul>
          <form className="d-flex">
            <button className="btn btn-outline-success" type="submit">LOGIN</button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
