/* eslint-disable no-unused-vars */
/* istanbul ignore file */
import {
  signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged,
  sendPasswordResetEmail, signInWithPopup, GoogleAuthProvider, GithubAuthProvider,
  FacebookAuthProvider,
} from 'firebase/auth';
import { auth } from './firebase.js';
import {email, password} from '../Pages/Login'
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const { user } = userCredentials;
        console.log('Registered with:', user.email);
      })
      .catch((error) => alert(error.message));
  };

export const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => {
        const { user } = userCredentials;
        console.log('Logged in with:', user.email);
        })
        .catch((error) => alert(error.message));
    };

export const handleForgot = () => {
    if (email === '') {
        alert('Ingrese un correo');
    } else {
        alert(`Se ha enviado un correo a ${email} para reestablecer la contraseña`);
        sendPasswordResetEmail(auth, email);
    }
    };

export const signInWithGoogle = () => {
    signInWithPopup(auth, new GoogleAuthProvider())
        .then((userCredentials) => {
        const { user } = userCredentials;
        console.log('Logged in with:', user.email);
        })
        .catch((error) => alert(error.message));
    };

export const signInWithGithub = () => {
    signInWithPopup(auth, new GithubAuthProvider())
        .then((userCredentials) => {
        const { user } = userCredentials;
        console.log('Logged in with:', user.email);
        })
        .catch((error) => alert(error.message));
    };

export const signInWithFacebook = () => {
    signInWithPopup(auth, new FacebookAuthProvider())
        .then((userCredentials) => {
        const { user } = userCredentials;
        console.log('Logged in with:', user.email);
        })
        .catch((error) => alert(error.message));
    };