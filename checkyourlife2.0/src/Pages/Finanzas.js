/* eslint-disable react/no-children-prop */
/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, PureComponent } from 'react';
import {
  Button, ButtonGroup, Grid, GridItem, IconButton, Input, InputGroup, InputLeftAddon,
} from '@chakra-ui/react';
import {
  Route, Routes, useLocation, useNavigate,
} from 'react-router-dom';

// eslint-disable-next-line import/no-unresolved
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
// eslint-disable-next-line import/no-unresolved
import '../Assets/Styles/Finanzas/Page.scss';

// CHARTS
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  PieChart, Pie, Sector,
} from 'recharts';
// FIREBASE
import { onAuthStateChanged } from 'firebase/auth';
import {
  doc,
  getDoc,
  collection,
  setDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
} from 'firebase/firestore';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { auth, db } from '../firebase';

function Finanzas() {
  const navigate = useNavigate();

  const [gastos, setGastos] = useState([
    { date: '2022-05-20', gasto: 210.00 },
  ]);

  const [ingresos, setIngresos] = useState([
    { date: '2022-04-21', ingreso: 100.00 },
  ]);

  const [ingresosData, setIngresosData] = useState(ingresos.map((ingreso) => ingreso.ingreso));
  const [gastosData, setGastosData] = useState(gastos.map((gasto) => gasto.gasto));

  const [sumIngreso, setSumIngreso] = useState(ingresos.map((ingreso) => ingreso.ingreso)
    .reduce((previous, current) => previous + current, 0));

  const [sumGasto, setSumGasto] = useState(gastos.map((gasto) => gasto.gasto)
    .reduce((previous, current) => previous + current, 0));

  const [uid, setUid] = useState();

  const [numberI, setNumberI] = useState(0);
  const [numberG, setNumberG] = useState(0);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUid(user.uid);
        // eslint-disable-next-line no-use-before-define
        verifyDoc(user.uid);
        // eslint-disable-next-line no-use-before-define
        getData(user.uid);
      } else {
        // eslint-disable-next-line no-console
        console.log('ERROR');
      }
    });
  }, ['']);

  const verifyDoc = async (id) => {
    const docRef = doc(db, 'users', id);
    const docSnap = await getDoc(docRef);
    if (!docSnap.exists()) {
      const docData = {
        tasks: [
          {
            title: 'ejemplo',
            description: 'descripcion',
            expiration: [],
            important: true,
            completed: false,
          },
        ],
        ingresos: [

        ],
        gastos: [

        ],
      };
      await setDoc(doc(db, 'users', id), docData);
    }
  };

  const getData = async (id) => {
    const docRef = doc(db, 'users', id);
    const docSnap = await getDoc(docRef);
    setIngresos((docSnap.data()).ingresos);
    setGastos((docSnap.data()).gastos);
  };

  const guardarGasto = (number) => {
    if (number && number > 0) {
      const today = new Date();
      const date = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;
      // eslint-disable-next-line no-param-reassign
      number = parseFloat(number);

      const gasto = { date, gasto: number };
      // eslint-disable-next-line no-console
      console.log(gasto);

      gastos.push(gasto);
      // eslint-disable-next-line no-shadow
      setGastosData(gastos.map((gasto) => gasto.gasto));
      // eslint-disable-next-line no-shadow
      setSumGasto(gastosData.map((gasto) => gasto)
        .reduce((previous, current) => previous + current, 0));
      setNumberG(0);

      console.log(gastos);

      onAuthStateChanged(auth, (user) => {
        const docRef = doc(db, 'users', user.uid);
        updateDoc(docRef, {
          gastos: arrayUnion(gasto),
        });
      });
    }
  };

  const guardarIngreso = (number) => {
    if (number && number > 0) {
      const today = new Date();
      const date = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;
      // eslint-disable-next-line no-param-reassign
      number = parseFloat(number);

      const ingreso = { date, ingreso: number };
      // eslint-disable-next-line no-console
      console.log(ingreso);

      ingresos.push(ingreso);
      // eslint-disable-next-line no-shadow
      setIngresosData(ingresos.map((ingreso) => ingreso.ingreso));
      // eslint-disable-next-line no-shadow
      setSumIngreso(ingresosData.map((ingreso) => ingreso)
        .reduce((previous, current) => previous + current, 0));
      setNumberI(0);

      onAuthStateChanged(auth, (user) => {
        const docRef = doc(db, 'users', user.uid);
        updateDoc(docRef, {
          ingresos: arrayUnion(ingreso),
        });
      });
    }
  };

  const data = [
    {
      name: 'dinero',
      gastos: sumGasto,
      ingresos: sumIngreso,
    },
  ];

  const data2 = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
    { name: 'Group E', value: 278 },
    { name: 'Group F', value: 189 },
  ];

  return (
    <div className="container">
      <Grid
        h="85vh"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={4}
      >
        <GridItem className="padding" rowSpan={2} colSpan={1} bg="rgb(0,0,0,0.2)">
          <div>
            <h1 className="titulo">Finanzas</h1>
            <InputGroup size="md">
              <InputLeftAddon children="Q" />
              <Input _placeholder={{ opacity: 1, color: 'black' }} placeholder="Ingrese un gasto" type="number" onChange={(newnumber) => setNumberG(newnumber)} />
            </InputGroup>
            <Button onClick={() => guardarGasto(130)} className="boton">Agregar Gastos</Button>
            <InputGroup size="md">
              <InputLeftAddon children="Q" />
              <Input _placeholder={{ opacity: 1, color: 'black' }} placeholder="Ingrese un ingreso" type="number" onChange={(newnumber) => setNumberI(newnumber)} />
            </InputGroup>
            <Button onClick={() => guardarIngreso(90)} className="boton">Agregar Ingreos</Button>
          </div>
        </GridItem>
        <GridItem className="padding" colSpan={2} bg="rgb(0,0,0,0.2)">
          <div className="auto-height">
            <h1>Grafica de Barras</h1>
            <div className="chart_container">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  width={500}
                  height={300}
                  data={data}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="gastos" fill="#f47140" />
                  <Bar dataKey="ingresos" fill="#36a7d9" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </GridItem>
        <GridItem className="padding" colSpan={2} bg="rgb(0,0,0,0.2)">
          <div>
            <h1>Grafica de pie</h1>
            <div className="chart_container">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart width={400} height={400}>
                  <Pie
                    dataKey="value"
                    startAngle={180}
                    endAngle={0}
                    data={data2}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    label
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </GridItem>
        <GridItem className="padding" colSpan={4} bg="rgb(0,0,0,0.2)">
          <div>
            Tabla scrolleable
          </div>
        </GridItem>
      </Grid>
    </div>
  );
}

export default Finanzas;
