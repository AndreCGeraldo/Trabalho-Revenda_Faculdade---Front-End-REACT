import { Fragment, useState } from "react";
import { Routes, Route } from "react-router-dom";

import MenuSuperior from "./components/MenuSuperior";
import ListagemVeiculos from "./components/ListagemVeiculos";
import UserLogin from "./components/UserLogin";
import Estatistica from "./components/Estatistica";
import TestDrive from "./components/TestDrive";

import { UsuarioContext } from "./UsuarioContext.js";

function App() {

    const [dados, setDados] = useState({})

    return (
        <UsuarioContext.Provider value={{ dados, setDados }}>
            <Fragment>
                <MenuSuperior />
                <Routes>
                    <Route path="/" element={<ListagemVeiculos />} />
                    <Route path="login" element={<UserLogin />} />
                    <Route path="estatistica" element={<Estatistica />} />
                    <Route path="TestDrive" element={<TestDrive />} />
                </Routes>
            </Fragment>
        </UsuarioContext.Provider>
    );
}

export default App;
