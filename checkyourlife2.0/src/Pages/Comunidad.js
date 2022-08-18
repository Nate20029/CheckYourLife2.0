/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Button, ButtonGroup } from '@chakra-ui/react';
import {
  Route, Routes, useLocation, useNavigate,
} from 'react-router-dom';
import { ChatEngine } from 'react-chat-engine';
import '../Components/comunidad.css';

function Comunidad() {
  const navigate = useNavigate();

  return (
    <div className="chats-page">
      <div className="nav-bar">
        <div className="logo-tab">
          Comunidad
        </div>
      </div>
      <ChatEngine
        height="calc(100vh - 66px)"
        userName="Nate"
        userSecret="barcaroly"
        projectID="9b86604a-2321-4d5f-a287-f1275a2bbd0e"
      />
    </div>
  );
}

export default Comunidad;
