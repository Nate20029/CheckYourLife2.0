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

function Finanzas() {
  const navigate = useNavigate();

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
            Grafica de pie
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
