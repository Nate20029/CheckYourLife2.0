/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged,
  sendPasswordResetEmail, signInWithPopup, GoogleAuthProvider, GithubAuthProvider,
  FacebookAuthProvider,
} from 'firebase/auth';
import { auth } from '../Services/firebase.js';
import '../Components/Login.css';
import Check from '../Assets/Media/CheckL2.png';
import {Route, Link, Routes, useLocation} from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        /* navigation.replace("Home") */
        navigate('/Home');
      } else {
        navigate('/');
      }
    });
  }, []);

  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const { user } = userCredentials;
        console.log('Registered with:', user.email);
      })
      .catch((error) => alert(error.message));
  };

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const { user } = userCredentials;
        console.log('Logged in with:', user.email);
      })
      .catch((error) => alert(error.message));
  };

  const handleForgot = () => {
    if (email === '') {
      alert('Ingrese un correo');
    } else {
      alert(`Se ha enviado un correo a ${email} para reestablecer la contraseña`);
      sendPasswordResetEmail(auth, email);
    }
  };

  const signInWithGoogle = () => {
    signInWithPopup(auth, new GoogleAuthProvider())
      .then((userCredentials) => {
        const { user } = userCredentials;
        console.log('Logged in with:', user.email);
      })
      .catch((error) => alert(error.message));
  };

  const signInWithGithub = () => {
    signInWithPopup(auth, new GithubAuthProvider())
      .then((userCredentials) => {
        const { user } = userCredentials;
        console.log('Logged in with:', user.email);
      })
      .catch((error) => alert(error.message));
  };

  const signInWithFacebook = () => {
    signInWithPopup(auth, new FacebookAuthProvider())
      .then((userCredentials) => {
        const { user } = userCredentials;
        console.log('Logged in with:', user.email);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="main">
      <div className="sub-main">
        <div>
          <div className="imgs">
            <div className="container-image">
              <img src={Check} alt="profile" className="profile" />
            </div>
          </div>
          <div>
            <div>
              <form>
                <div className="user-box">
                  <input
                    type="email"
                    name=""
                    required=""
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label>Username</label>
                </div>
                <div className="user-box">
                  <input
                    type="password"
                    name=""
                    required=""
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <label>Password</label>
                </div>
                <a href="#" onClick={handleLogin}>
                  <span />
                  <span />
                  <span />
                  <span />
                  Login
                </a>
              </form>
            </div>
            <p className="link">
              <a href="#" onClick={handleForgot}>Forgot password?</a>
              {' '}
              Or
              {' '}
              <a href="#" onClick={handleSignUp}>Sign Up</a>
            </p>
            <p>Or log in with</p>
            <div className="columna">
              <div style={{ position: 'absolute', top: '78%', left: '45%', height: 40, width: 40, borderRadius: 40 / 2, backgroundColor: '#14279B', alignItems: 'center', justifyContent: 'center' }}>
                <button type="button" style={{ width: '10%', position: 'absolute', left: '-50%', top: '-20%', fontSize: 25, fontWeight: 'bold', color: 'white' }} onClick={signInWithFacebook}> f </button>
              </div>
              <div style={{ position: 'absolute', top: '78%', left: '49%', height: 40, width: 40, borderRadius: 40 / 2, backgroundColor: '#f44336', alignItems: 'center', justifyContent: 'center' }}>
                <button type="button" style={{ width: '10%', position: 'absolute', left: '-50%', top: '-20%', fontSize: 25, fontWeight: 'bold', color: 'white' }} onClick={signInWithGoogle}> G </button>
              </div>
              <div style={{ position: 'absolute', top: '78%', left: '53%', height: 40, width: 40, borderRadius: 40 / 2, backgroundColor: '#1565c0', alignItems: 'center', justifyContent: 'center' }}>
                <button type="button" style={{ width: '100%', position: 'absolute', left: '-50%', top: '-20%', fontSize: 20, fontWeight: 'bold', color: 'white' }} onClick={signInWithGithub}> Git </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Login;
