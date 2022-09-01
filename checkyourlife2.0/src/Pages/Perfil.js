/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Button, ButtonGroup } from '@chakra-ui/react';
import {
  Route, Routes, useLocation, useNavigate,
} from 'react-router-dom';
import { signOut } from 'firebase/auth';
import Avatar from '@mui/material/Avatar';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { auth } from '../Services/firebase.js';
import '../Components/Perfil.css';

function Perfil() {
  const navigate = useNavigate();

  // Salir de cuenta
  async function handleSignOut() {
    signOut(auth);
    navigate('/');
  }

  const [image, setImage] = useState(null);
  const [url, setUrl] = useState(null);

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = () => {
    const imageRef = ref(storage, 'image');
    uploadBytes(imageRef, image)
      .then(() => {
        getDownloadURL(imageRef)
          .then((url) => {
            setUrl(url);
          })
          .catch((error) => {
            console.log(error.message, 'error getting the image url');
          });
        setImage(null);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <>
      <div className="content-profile-page">
        <div className="profile-user-page card">
          <div className="img-user-profile">
            <img className="profile-bgHome" src="https://37.media.tumblr.com/88cbce9265c55a70a753beb0d6ecc2cd/tumblr_n8gxzn78qH1st5lhmo1_1280.jpg" alt="profile-bgHome" />
            <img className="avatar" src="http://gravatar.com/avatar/288ce55a011c709f4e17aef7e3c86c64?s=200" alt="jofpin" />
            <Avatar src={url} sx={{ width: 150, height: 150 }} />
            <input type="file" onChange={handleImageChange} />
            <button type="button" onClick={handleSubmit}>Submit</button>
          </div>
          <div className="user-profile-data">
            <h1>Esteban Aldana</h1>
            <p>github.com/jofpin</p>
          </div>
          <div className="description-profile">
            Front-end | Security Researcher | CSS Warrior |
            <a href="https://twitter.com/bullgit" title="bullgit"><strong>@bullgit</strong></a>
            {' '}
            | I love to create small things for the internet!
          </div>
          <ul className="data-user">
            <li>
              <a>
                <strong>3390</strong>
                <p1>Amigos</p1>
              </a>
            </li>
            <li>
              <a>
                <strong>718</strong>
                <p2>Grupos</p2>
              </a>
            </li>
          </ul>
          <div className="Sign-Out">
            <button type="button" onClick={handleSignOut}>SignOut</button>
          </div>
        </div>
      </div>
      <footer>
        <h4>
          Realease 1.0.
          <a href="https://twitter.com/jofpin" target="_blank" title="José Pino" rel="noreferrer">@Check-Your-Life</a>
        </h4>
      </footer>
    </>
  );
}

export default Perfil;
