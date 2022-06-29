import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { inAxios } from "../config_axios";
import { UsuarioContext } from "../UsuarioContext";

import "./UserLogin.css";

const UserLogin = () => {

    const { register, handleSubmit } = useForm();

    const navigate = useNavigate();

    const usuario = useContext(UsuarioContext);

    const onSubmit = async (data) => {
        const login = await inAxios.post("login", data);
        if (login.data.usuario_id) {
            usuario.setDados({
                usuario_id: login.data.usuario_id,
                usuario_nome: login.data.usuario_nome,
                token: login.data.token,
            });
            navigate("/") // recarrega o componente vinculado a rota raiz
        } else {
            console.log("Erro... Inválido");
        }
    };

    return (
        <div className="row mt-5">
            <div className="col-md-5 col-sm-8 col-11 mx-auto">
                <form className="form-signin" onSubmit={handleSubmit(onSubmit)}>
                    <div className="text-center mb-4">
                        <h1 className="h3 mb-3 font-weight-normal text-danger">Login do Cliente</h1>
                        <p>Participe do Test Drive de nossos Veículos</p>
                    </div>
                    <div className="form-label-group">
                        <input
                            type="email"
                            id="email"
                            className="form-control"
                            placeholder="E-mail do Cliente"
                            required
                            autoFocus
                            {...register("email")}
                        />
                        <label htmlFor="email">E-mail do Cliente</label>
                    </div>
                    <div className="form-label-group">
                        <input
                            type="password"
                            id="senha"
                            className="form-control"
                            placeholder="Senha de Acesso"
                            required
                            {...register("senha")}
                        />
                        <label htmlFor="senha">Senha de Acesso</label>
                    </div>
                    <button className="btn btn-lg btn-danger btn-block" type="submit">
                        Entrar
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UserLogin;