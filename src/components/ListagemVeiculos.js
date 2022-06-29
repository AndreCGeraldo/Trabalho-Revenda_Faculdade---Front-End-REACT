import React, { useState, useEffect, useContext } from "react";
import { inAxios } from "../config_axios";
import { UsuarioContext } from "../UsuarioContext";

import "./ListagemVeiculos.css";

import ItemLista from "./ItemLista";

const ListagemVeiculos = () => {
    const [carros, setCarros] = useState([]);
    const usuario = useContext(UsuarioContext);

    const getCarros = async () => {
        const lista = await inAxios.get("carros");
        // console.log(lista);
        setCarros(lista.data);
    };

    // define o método que será executado após renderizar o componente
    useEffect(() => {
        getCarros();
    }, []);

    const usuarioTestDrive = async (id, index) => {

        let voto = {
            usuario_id: usuario.dados.usuario_id,
            carro_id: id,
            testdrive: 1,
        };

        const config = {
            headers: { Authorization: `Bearer ${usuario.dados.token}` },
        };

        await inAxios.post("testdrive", voto, config);

        // atualiza o array
        let newCarros = [...carros];
        newCarros[index].testdrive = carros[index].testdrive + 1;
        setCarros(newCarros);

        alert("Ok! Obrigado pela sua participação... Aguarde contato para o Agendamento do Test Drive");
    };


    const setBusca = (data) => {
        const cardPai = document.querySelector(".row");
        let cards = cardPai.querySelectorAll('.cardListagem');
        let expressao = new RegExp(data, "i");
        for (let i = 0; i < cards.length; i++) {
            if (expressao.test(cards[i].querySelector('h4').innerHTML)) {
                cards[i].style.display = 'flex';
            } else {
                cards[i].style.display = 'none';
            }
        }
    }

    return (
        <div className="col-sm-12">
            <div className="container">
                <div className="row">
                    <div className="input-group my-3 ml-1 mr-1">
                        <input
                            type="busca"
                            className="form-control"
                            placeholder="Pesquisar Carros"
                            onChange={(ev) => setBusca(ev.target.value)}
                        />
                    </div>
                    {carros.map((carro, index) => (
                        <ItemLista
                            modelo={carro.modelo}
                            foto={carro.foto}
                            ano={carro.ano}
                            preco={carro.preco}
                            marca={carro.marca}
                            key={carro.id}
                            TestDriveClick={() => usuarioTestDrive(carro.id, index)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ListagemVeiculos;