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
        <GridItem rowSpan={2} colSpan={1} bg="tomato" />
        <GridItem colSpan={2} bg="papayawhip" />
        <GridItem colSpan={2} bg="papayawhip" />
        <GridItem colSpan={4} bg="tomato" />
      </Grid>
    </div>
  );
}

export default Finanzas;
