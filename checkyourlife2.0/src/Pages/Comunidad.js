/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Button, ButtonGroup, Flex } from '@chakra-ui/react';
import {
  Route, Routes, useLocation, useNavigate,
} from 'react-router-dom';
import Sidebar from '../Components/Sidebar';

function Comunidad() {
  const navigate = useNavigate();

  return (
    <Flex>

      <Sidebar />

    </Flex>
  );
}

export default Comunidad;
