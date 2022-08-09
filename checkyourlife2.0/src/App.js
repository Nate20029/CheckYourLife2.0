import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import Home from './Pages/Home';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={<Login />}
          />
          <Route
            path="/Home"
            element={<Home />}
          />
        </Routes>
      </div>
    </ChakraProvider>
  );
}

export default App;
