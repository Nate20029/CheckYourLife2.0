import { render, screen } from '@testing-library/react';
import { Router, BrowserRouter } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { waitFor, fireEvent } from '@testing-library/dom';
import { act } from 'react-dom/test-utils'
import Login from '../Pages/Login';

describe('<Login />', () => {

  test('render email input', () => {
    const history = createMemoryHistory();
    render(
      <Router location={history.location} navigator={history}>
        <Login />
      </Router>,
    );

    const inputEl = screen.getByText('Username');
    expect(inputEl).toBeInTheDocument();
  });

  test('render password input', () => {
    const history = createMemoryHistory();
    render(<Router location={history.location} navigator={history}>
      <Login />
           </Router>);
    const passwordEl = screen.getByText('Password');
    expect(passwordEl).toBeInTheDocument();
  });

  test('render forget passwaord button', () => {
    const history = createMemoryHistory();
    render(<Router location={history.location} navigator={history}>
      <Login />
    </Router>);
    const passwordEl = screen.getByText('Forgot password?');
    expect(passwordEl).toBeInTheDocument();
  });

  test('render signInWithEmailAndPassword', async () => {
    const result = await signInWithEmailAndPassword() // (i.e. your method that calls firebase.auth().getRedirectResult)
    expect(result).toEqual({
      user: {
        displayName: 'redirectResultTestDisplayName',
        email: 'redirectTest@test.com',
        emailVerified: true
      }
    })
    expect(firebase.auth).toHaveBeenCalled()
    expect(getRedirectResult).toHaveBeenCalled()
  })

});
