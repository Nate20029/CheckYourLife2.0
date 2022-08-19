/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Button, ButtonGroup } from '@chakra-ui/react';
import {
  Route, Routes, useLocation, useNavigate,
} from 'react-router-dom';
import { ChatEngine } from 'react-chat-engine';
import '../Components/comunidad.css';
import { auth } from '../Services/firebase.js';

function Comunidad() {
  const navigate = useNavigate();
  const  user  = auth.onAuthStateChanged;
  const [loading, setLoading] = useState(true);
  
  console.log(user.email)

  useEffect(() => {
    axios.get('https://api.chatengine.io/users/me', {
      headers: {
        'project-id': 'e36c972f-3bfd-4279-a705-944d4faf3557',
        'user-name': user.email,
        'user-secret': user.uid,
      },
    })
      .then(() => {
        setLoading(false);
      })
      .catch(() => {
        let formdata = new FormData();
        formdata.append('email', user.email);
        formdata.append('username', user.displayName);
        formdata.append('secret', user.uid);
      });
  }, [user]);

  return (
    <div className="chats-page">
      <div className="nav-bar">
        <div className="logo-tab">
          Comunidad
        </div>
      </div>
      <ChatEngine
        height="calc(100vh - 66px)"
        userName={user.email}
        userSecret={user.uid}
        projectID="e36c972f-3bfd-4279-a705-944d4faf3557"
      />
    </div>
  );
}

export default Comunidad;
