/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Router } from 'react-router-dom';
import {createMemoryHistory} from 'history';
import { shallow } from 'enzyme';
import React from 'react';
import Login from '../Pages/Login';
import {
  signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged,
  sendPasswordResetEmail, signInWithPopup, GoogleAuthProvider, GithubAuthProvider,
  FacebookAuthProvider,
} from 'firebase/auth';
import { auth } from '../Services/firebase.js';
import '@testing-library/jest-dom'

describe("<Login />", () => {
  it('render the page correctly', () => {
    <Router>
      <Login />
    </Router>;
  });

  const mockedUsedNavigate = jest.fn();

  jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUsedNavigate,
  }));

  test('render email input', () => {
    const history = createMemoryHistory();
    render(
      <Router location={history.location} navigator={history}>
        <Login />
      </Router>);

    const inputEl = screen.getByText("Username");
    expect(inputEl).toBeInTheDocument();
  });

  test('render password input', () => {
    const history = createMemoryHistory();
    render(<Router location={history.location} navigator={history}>
            <Login />
          </Router>);

    const passwordEl = screen.getByText("Password");
    expect(passwordEl).toBeInTheDocument();
  });

  test('render forget passwaord button', () => {
    const history = createMemoryHistory();
    render(<Router location={history.location} navigator={history}>
            <Login />
          </Router>);

    const passwordEl = screen.getByText("Forgot password?");
    expect(passwordEl).toBeInTheDocument();
  });

  test('onAuthChanged', () => {
    jest.mock('firebase/auth', () => { return { getAuth: () => jest.fn(), onAuthStateChanged: () => jest.fn(), }; });
  });

  jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => (jest.fn())
  }));                  

  jest.mock('firebase/app', () => {
    return {
      auth: jest.fn().mockReturnThis(),
      signInWithEmailAndPassword: jest.fn(),
    };
  });
  
  jest.mock('firebase/app', () => (
    {
      auth: jest.fn().mockReturnThis(),
      initializeApp: jest.fn(),
      createUserWithEmailAndPassword: jest.fn().mockRejectedValueOnce({
        code: 'auth/invalid-email'
      }),
    }
  ));

  jest.mock('firebase/auth', () => {
    return {
        getAuth: () => mockGetAuth,
        sendPasswordResetEmail: () => mockSendPassword
    }
  });

  test('Test SignInwithUserAndPassword', () => {

    const user = null;

    signInWithEmailAndPassword(auth, 'esteban10052002@gmail.com', '123456#')
      .then((userCredentials) => {
        user=userCredentials
      })
      .then(() => {
        expect(user).toBe('hBWpwdLtFmbWRQgqLchFVdspNp43');
      })
    })

    test('Test createUserWithEmailAndPassword', () => {

      const user = null;
  
      createUserWithEmailAndPassword(auth, 'esteban10052002@gmail.com', '123456#')
        .then((userCredentials) => {
          user=userCredentials
        })
        .then(() => {
          expect(user).toBe('hBWpwdLtFmbWRQgqLchFVdspNp43');
        });
    })

});