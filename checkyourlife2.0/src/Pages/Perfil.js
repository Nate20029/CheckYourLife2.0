/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Button, ButtonGroup } from '@chakra-ui/react';
import {
  Route, Routes, useLocation, useNavigate,
} from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { auth, upload, useAuth } from '../Services/firebase.js';
import '../Components/Perfil.css';
import fondo from '../Assets/Media/fondoa.jpg';

function Perfil() {
  const navigate = useNavigate();
  // Manejar imagen del usuario
  const currentUser = useAuth();
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(false);
  const [photoURL, setPhotoURL] = useState('https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png');
  // Salir de cuenta
  /* istanbul ignore next */
  async function handleSignOut() {
    /* istanbul ignore next */
    signOut(auth);
    /* istanbul ignore next */
    navigate('/');
  }

  /* istanbul ignore next */
  function handleChange(e) {
    if (e.target.files[0]) {
      setPhoto(e.target.files[0]);
    }
  }
  /* istanbul ignore next */
  function handleClick() {
    upload(photo, currentUser, setLoading);
  }
  /* istanbul ignore next */
  useEffect(() => {
    if (currentUser?.photoURL) {
      setPhotoURL(currentUser.photoURL);
    }
  }, [currentUser]);

  return (
    <div className="content-profile-page">
      <div className="profile-user-page card">
        <div className="img-user-profile">
          <img className="profile-bgHome" src={fondo} alt="profile-bgHome" />
          <div className="fields">
            <input className="inputb" type="file" onChange={handleChange} />
            <button className="but" type="button" disabled={loading || !photo} onClick={handleClick}>Upload</button>
            <img src={photoURL} alt="Avatar" className="avatar" />
          </div>
        </div>
        <div className="user-profile-data">
          <h1>
            {auth.currentUser?.email}
          </h1>
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
          <button className="out" type="button" onClick={handleSignOut}>SignOut</button>
        </div>
      </div>
    </div>
  );
}

export default Perfil;
