/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Button, ButtonGroup } from '@chakra-ui/react';
import {
  Route, Routes, useLocation, useNavigate,
} from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const userLogInSuccess = () => {
    navigate('/Home');
  };

  return (
    <Button colorScheme="teal" size="lg" onClick={() => { userLogInSuccess(); }}>
      Button
    </Button>
  );
}

export default Login;
