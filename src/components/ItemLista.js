import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { UsuarioContext } from "../UsuarioContext";

const ItemLista = (props) => {

    const usuario = useContext(UsuarioContext);

    let TestDriveButtons;

    if (usuario.dados.usuario_id) {
        TestDriveButtons = (
            <>
                <Link className="float-end" to="/TestDrive">
                    <button className="btn btn-danger btn-block" type="submit">
                        <b>Teste Drive</b>
                    </button>
                </Link>
            </>
        );
    }

    return (
        <div className="card col-sm-4 col-6 mt-2 cardListagem">
            <img className="card-img-top" src={props.foto} alt="Carros em Destaque" style={{ height: "300px" }} />
            <div className="card-body">
                <h4 className="card-title text-center bg-danger">
                    {props.modelo}
                </h4>
                <p className="card-text">
                    <b>Marca:</b> {props.marca}
                    <br />
                    <b>Ano:</b> {props.ano}
                    <br />
                    <b>Preço R$:</b> &nbsp;{Number(props.preco).toLocaleString("pt-br", { minimumFractionDigits: 2, })}
                </p>
                {TestDriveButtons}
            </div>
        </div>
    );
};

export default ItemLista;