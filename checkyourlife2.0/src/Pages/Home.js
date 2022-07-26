/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import {
  Tabs, TabList, TabPanels, Tab, TabPanel,
} from '@chakra-ui/react';
import Chat from './Chat';
import Tareas from './Tareas';
import Finanzas from './Finanzas';
import Cronometro from './Cronometro';
import Perfil from './Perfil';

function Home() {
  return (
    <Tabs isFitted variant="enclosed">
      <TabList mb="1em">
        <Tab>Chat</Tab>
        <Tab>Tareas</Tab>
        <Tab>Finanzas</Tab>
        <Tab>Cronometro</Tab>
        <Tab>Perfil</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <Chat />
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
