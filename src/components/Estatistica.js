import React, { useState, useEffect } from "react";
import { inAxios } from "../config_axios";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const Estatistica = () => {
    const [grafico, setGrafico] = useState([]);

    const getGrafico = async () => {
        const lista = await inAxios.get("testdrive/test-num");
        //    console.log(lista.data);
        setGrafico(lista.data);
    };

    // define o método que será executado após renderizar o componente
    useEffect(() => {
        getGrafico();
    }, []);


    const labels = grafico.map((carro) => carro.carro);
    const data1 = grafico.map((Test_Drive) => Test_Drive.Test_Drive);

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top",
            },
            title: {
                display: true,
                text: "Popularidade de Carros no Test Drive",
            },
        },
    };

    const data = {
        labels,
        datasets: [
            {
                label: "Test Drive",
                data: data1,
                backgroundColor: 'rgb(255, 0, 0)',
            },
        ],
    };

    return (
        <div class="d-flex justify-content-center">
            <div style={{ width: "1250px", height: "800px" }}>
                <Bar options={options} data={data} />
            </div>
        </div>
    );
};

export default Estatistica;