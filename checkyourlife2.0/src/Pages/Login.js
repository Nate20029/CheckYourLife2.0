import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged,
  sendPasswordResetEmail,
} from 'firebase/auth';
import { auth } from '../Services/firebase.js';
import '../Components/Login.css';
import profile from '../Assets/Media/a.png';
import mail from '../Assets/Media/email.jpg';
import pass from '../Assets/Media/pass.png';

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

  return (
    <div className="main">
      <div className="sub-main">
        <div>
          <div className="imgs">
            <div className="container-image">
              <img src={profile} alt="profile" className="profile" />

            </div>

          </div>
          <div>
            <h1>Login Page</h1>
            <div>
              <img src={mail} alt="email" className="email" />
              <form>
                <label>
                  username:
                  <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </label>
              </form>
            </div>
            <div className="second-input">
              <img src={pass} alt="pass" className="email" />
              <form>
                <label>
                  password:
                  <input
                    type="text"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </label>
              </form>
            </div>
            <div className="login-button">
              <button type="button" onClick={handleLogin}>Login</button>
            </div>

            <p className="link">
              <a href="#" onClick={handleForgot}>Forgot password ?</a>
              {' '}
              Or
              <a href="#" onClick={handleSignUp}>Sign Up</a>
            </p>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Login;
