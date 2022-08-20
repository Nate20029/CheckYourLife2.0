/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Button, ButtonGroup } from '@chakra-ui/react';
import {
  Route, Routes, useLocation, useNavigate,
} from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../Services/firebase.js';

function Perfil() {
  const navigate = useNavigate();

  // Salir de cuenta
  async function handleSignOut() {
    signOut(auth);
    navigate('/');
  }
  return (
    <div className="Sign-Out">
      <button type="button" onClick={handleSignOut}>SignOut</button>
    </div>
  );
}

export default Perfil;
