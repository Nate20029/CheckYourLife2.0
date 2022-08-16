/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import {
  Button, ButtonGroup, Grid, GridItem, IconButton,
} from '@chakra-ui/react';
import {
  Route, Routes, useLocation, useNavigate,
} from 'react-router-dom';

// eslint-disable-next-line import/no-unresolved
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
// eslint-disable-next-line import/no-unresolved
import '../Assets/Styles/Finanzas/Page.scss';
import {
  Chart as ChartJS, ArcElement, Tooltip, Legend,
} from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

function Finanzas() {
  const navigate = useNavigate();

  ChartJS.register(ArcElement, Tooltip, Legend);

  const options = {
    responsive: true,
    maintainAspectRatio: true,
  };
  const data = {
    labels: ['Red', 'Grey', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(0, 0, 0, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(0, 0, 0, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="container">
      <Grid
        h="85vh"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={4}
      >
        <GridItem className="padding" rowSpan={2} colSpan={1} bg="#f47140">
          <div>
            <h1 className="titulo">Titulo de finanzas</h1>
            <p>Botones bonitos para agregar y eliminar gastos e ingresos</p>
          </div>
        </GridItem>
        <GridItem className="padding" colSpan={2} bg="#36a7d9">
          <div>
            Grafica de barras
          </div>
        </GridItem>
        <GridItem className="padding" colSpan={2} bg="#36a7d9">
          <div>
            <h1>Grafica de pie</h1>
            <div className="chart_container">
              <Pie data={data} options={options} />
            </div>
          </div>
        </GridItem>
        <GridItem className="padding" colSpan={4} bg="rgb(0,0,0,0.2)">
          <div>
            Tabla scrolleable
          </div>
        </GridItem>
      </Grid>
    </div>
  );
}

export default Finanzas;
