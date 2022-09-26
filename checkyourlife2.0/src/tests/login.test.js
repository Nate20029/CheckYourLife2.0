import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Router } from 'react-router-dom';
import {createMemoryHistory} from 'history';
import { shallow } from 'enzyme';
import React from 'react';
  
import firebase from 'firebase/app';
import handleLogin from '../Pages/Login'
 
import Login from '../Pages/Login';
 
describe("<Login />", () => {

  it('render the page correctly', () => {
    <Router>
      <Login />
    </Router>;
  });
 
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
  
  describe('61352544', () => {
    it('should pass', async () => {
      const email = 'example@gmail.com';
      const password = '123';
      await Login.authenticate(email, password);
      expect(firebase.auth().signInWithEmailAndPassword).toBeCalledWith(email, password);
    });
  });

});