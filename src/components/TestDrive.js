import { useState } from "react";
import { useForm } from "react-hook-form";
import { inAxios } from "../config_axios";

const TestDrive = () => {
    const { register, handleSubmit, reset } = useForm();

    const [aviso, setAviso] = useState("");

    const salvar = async (campos) => {
        try {
            const response = await inAxios.post("testdrive", campos);
            setAviso(`Ok! Dados cadastrado com código ${response.data.id}`);
        } catch (error) {
            setAviso(`Erro... Dados não cadastrado: ${error}`);
        }
        // setTimeout: executa o comando após o tempo indicado (em milissegundos)
        setTimeout(() => {
            setAviso("");
        }, 5000);
        // limpa os campos de formulário para uma nova inclusão
        reset({ nome: "", fone: "", cidade: "", uf: "", email: "", cpf: "", curso_id: "" });
    }

    return (
        <div className="container">
            <h4 className="fst-italic mt-3">Dados para Test Drive</h4>
            <form onSubmit={handleSubmit(salvar)}>
                <div className="row mt-2">
                    <div className="col-sm-5">
                        <div className="form-group">
                            <label htmlFor="nome">Nome:</label>
                            <input type="text" className="form-control" id="nome" required
                                autoFocus  {...register("nome")} />
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="form-group">
                            <label htmlFor="fone">Telefone:</label>
                            <input type="tel" className="form-control" id="fone" required
                                {...register("fone")} />
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="form-group">
                            <label htmlFor="cidade">Cidade:</label>
                            <input type="text" className="form-control" id="cidade"
                                step="0.01" required {...register("cidade")} />
                        </div>
                    </div>
                    <div className="col-sm-1">
                        <div className="form-group">
                            <label htmlFor="uf">UF:</label>
                            <select class="form-select" type="number" id="uf" required {...register("uf")}>
                                <option>MG</option>
                                <option>RJ</option>
                                <option>SP</option>
                                <option>PR</option>
                                <option>SC</option>
                                <option>RS</option>
                                <option>MT</option>
                                <option>GO</option>
                                <option>DF</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-sm-5">
                        <div className="form-group">
                            <label htmlFor="email">E-mail:</label>
                            <input type="email" className="form-control" id="email" required
                                {...register("email")} />
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="form-group">
                            <label htmlFor="cpf">CPF:</label>
                            <input type="text" className="form-control" id="cpf" required
                                {...register("cpf")} />
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="form-group">
                            <label htmlFor="carro_id">Curso:</label>
                            <select class="form-select" type="number" id="carro_id" required {...register("carro_id")}>
                                <option value="1">Sandero</option>
                                <option value="2">Prisma</option>
                                <option value="3">Palio</option>
                                <option value="4">Ka</option>
                                <option value="5">Cruze</option>
                                <option value="6">Tracker</option>
                                <option value="7">Toro</option>
                            </select>
                        </div>
                    </div>
                </div>
                <input type="submit" className="btn btn-outline-success mt-3 col-sm-2" value="Enviar" />
                <input type="reset" className="btn btn-outline-danger mt-3 right ms-3 col-sm-2" value="Limpar" />
            </form>
            <div className={aviso.startsWith("Ok!") ? "alert alert-success" :
                aviso.startsWith("Erro") ? "alert alert-danger" :
                    ""}>{aviso}</div>
        </div>
    );
};
export default TestDrive;