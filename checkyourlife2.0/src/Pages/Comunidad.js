/* eslint-disable prefer-const */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Button, ButtonGroup } from '@chakra-ui/react';
import {
  Route, Routes, useLocation, useNavigate,
} from 'react-router-dom';
import { ChatEngine } from 'react-chat-engine';
import '../Components/comunidad.css';
import axios from 'axios';

function Comunidad({ user }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const getFile = async (url) => {
    const response = await fetch(url);
    const data = await response.blob();

    return new File([data], 'userPhoto.jpg', { type: 'image/jpeg' });
  };
  useEffect(() => {
    if (user) {
      axios.get('https://api.chatengine.io/users/me', {
        headers: {
          'project-id': '85051fa2-8830-452c-b1fa-72f7525c28db',
          'user-name': user.displayName,
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

          getFile(user.phothoURL)
            .then((avatar) => {
              formdata.append('avatar', avatar, avatar.name);

              axios.post(
                'https://api.chatengine.io/users/',
                formdata,
                { headers: { 'Private-Key': '1a44365f-8303-43a1-ae2d-9beea9c1103a' } },
              )
                .then(() => setLoading(false))
                .catch((error) => console.log(error));
            });
        });
    }
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
        projectID="85051fa2-8830-452c-b1fa-72f7525c28db"
      />
    </div>
  );
}

export default Comunidad;
