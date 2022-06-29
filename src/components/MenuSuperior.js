import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./MenuSuperior.css";

import { UsuarioContext } from "../UsuarioContext";

const MenuSuperior = () => {

    const navigate = useNavigate();

    const usuario = useContext(UsuarioContext);

    const loginLogout = () => {
        usuario.setDados({ usuario_id: null, usuario_nome: "", token: "" });
        navigate("/login")
    }

    return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <Link className="navbar-brand" to="/">
                <img
                    src="logo.png"
                    alt="Logo da Revenda"
                    width="600"
                    className="float-start mr-2"
                />
                <h3>Carros em Destaques</h3>
                <h5>Os Melhores Veículos você encontra aqui...</h5>
            </Link>

            <ul className="navbar-nav ms-auto">
                <li className="nav-item me-3">
                    <Link className="nav-link" to="/estatistica">
                        <i class="bi bi-ui-checks me-2 text-danger"></i>
                        Estatística
                    </Link>
                </li>
                <li className="nav-item">
                    <span className="nav-link" onClick={loginLogout}>
                        <i class="bi bi-person-circle me-2 text-danger"></i>
                        {usuario.dados.usuario_nome ? usuario.dados.usuario_nome + " (sair)" :
                            "(identifique-se)"}
                    </span>
                </li>
            </ul>
        </nav>
    );
};

export default MenuSuperior;