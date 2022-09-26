import { fireEvent, render, screen } from '@testing-library/react';
import { shallow, configure } from 'enzyme';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../Pages/Login';
import Perfil from '../Pages/Perfil';
import setPhotoURL from '../Pages/Perfil';

describe('<Perfil />', () => {

  describe('Page: Home', () => {
    it('render the page correctly', () => {
      <Router>
        <Login />
      </Router>;
    });

    it('Sign out if signOut button is clicked', () => {
      <Router>
        <Login />
      </Router>;

      const logOutButton = screen.getByText('SignOut');

      fireEvent.click(logOutButton);

      expect(signOutSpy).toHaveBeenCalled();
    });
  });

  test('Sign Out', () => {
    const { getByText } = render(<Router>
      <Perfil />
                                 </Router>);
    const button = getByText('SignOut');
    expect(button).toBeTruthy();
  });

  test('Upload image', () => {
    const { getByText } = render(<Router>
      <Perfil />
                                 </Router>);
    const button = getByText('Upload');
    expect(button).toBeTruthy();
  });

});