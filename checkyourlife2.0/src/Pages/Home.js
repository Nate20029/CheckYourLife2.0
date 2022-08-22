/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Tabs, TabList, TabPanels, Tab, TabPanel,
} from '@chakra-ui/react';
import Comunidad from './[id]';
import Tareas from './Tareas';
import Finanzas from './Finanzas';
import Cronometro from './Cronometro';
import Perfil from './Perfil';

function Home({ user }) {
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate('/');
    }
  }, []);
  return (
    <Tabs isFitted variant="enclosed">
      <TabList mb="1em">
        <Tab>Comunidad</Tab>
        <Tab>Tareas</Tab>
        <Tab>Finanzas</Tab>
        <Tab>Cronometro</Tab>
        <Tab>Perfil</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <Comunidad user={user} />
        </TabPanel>
        <TabPanel>
          <Tareas />
        </TabPanel>
        <TabPanel>
          <Finanzas />
        </TabPanel>
        <TabPanel>
          <Cronometro />
        </TabPanel>
        <TabPanel>
          <Perfil />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

export default Home;
