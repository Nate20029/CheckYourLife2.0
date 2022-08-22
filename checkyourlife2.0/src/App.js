import React, { useState } from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import Home from './Pages/Home';

function App() {
  const [user, setUser] = useState();
  const userloginaccess = (u) => { setUser(u); };
  return (
    <ChakraProvider theme={theme}>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={<Login setUserfunction={userloginaccess} />}
          />
          <Route
            path="/Home"
            element={<Home user={user} />}
          />
        </Routes>
      </div>
    </ChakraProvider>
  );
}

export default App;
