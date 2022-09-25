import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { waitFor, fireEvent } from '@testing-library/dom';
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

});
