/* eslint-disable eqeqeq */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/no-children-prop */
/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, PureComponent } from 'react';
import {
  Button, ButtonGroup, Grid, GridItem, IconButton, Input, InputGroup, InputLeftAddon, Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react';
import {
  Route, Routes, useLocation, useNavigate,
} from 'react-router-dom';

// eslint-disable-next-line import/no-unresolved
import '../Components/finanzas.css';

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
    {},
  ]);

  const [ingresos, setIngresos] = useState([
    {},
  ]);

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
  }, [ingresos, gastos]);

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
    try {
      setIngresos((docSnap.data()).ingresos);
      console.log('ingresos son: ', ingresos);
    } catch (error) {
      console.log(error);
    }
    try {
      setGastos((docSnap.data()).gastos);
      console.log('gastos son: ', gastos);
    } catch (error) {
      console.log(error);
    }
    if (gastos.length == 0) {
      setSumGasto(0);
    }
    if (ingresos.length == 0) {
      setSumIngreso(0);
    }
    setSumGasto(gastos.map((gasto) => gasto.gasto)
      .reduce((previous, current) => previous + current, 0));
    setSumIngreso(ingresos.map((ingreso) => ingreso.ingreso)
      .reduce((previous, current) => previous + current, 0));
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
      setSumGasto(gastos.map((gasto) => gasto.gasto)
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
      setSumIngreso(ingresos.map((ingreso) => ingreso.ingreso)
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
  const COLORS = ['#f47140'];
  const data2 = [
    { name: 'Gastos', value: sumGasto },
    { name: 'Ingresos', value: sumIngreso },
  ];

  const handleChangeG = (event) => {
    setNumberG(event.target.value);
  };

  const handleChangeI = (event) => {
    setNumberI(event.target.value);
  };

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
              <Input _placeholder={{ opacity: 1, color: 'black' }} placeholder="Ingrese un gasto" type="number" onChange={handleChangeG} value={numberG} />
            </InputGroup>
            <Button onClick={() => guardarGasto(numberG)} className="botonorange">Agregar Gastos</Button>
            <InputGroup size="md">
              <InputLeftAddon children="Q" />
              <Input _placeholder={{ opacity: 1, color: 'black' }} placeholder="Ingrese un ingreso" type="number" onChange={handleChangeI} value={numberI} />
            </InputGroup>
            <Button onClick={() => guardarIngreso(numberI)} className="botonblue">Agregar Ingresos</Button>
          </div>
        </GridItem>
        <GridItem className="padding h-350" colSpan={2} bg="rgb(0,0,0,0.2)">
          <div className="auto-height">
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
        <GridItem className="padding h-350" colSpan={2} bg="rgb(0,0,0,0.2)">
          <div className="auto-height">
            <div className="chart_container">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart width={400} height={400}>
                  <Pie
                    dataKey="value"
                    isAnimationActive={false}
                    data={data2}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#36a7d9"
                    label
                  >
                    {
                      data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]} />)
                    }
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </GridItem>
        <GridItem className="padding " colSpan={4} bg="rgb(0,0,0,0.2)">
          <Grid
            h="100%"
            templateRows="repeat(1, 1fr)"
            templateColumns="repeat(2, 1fr)"
            gap={4}
          >
            <GridItem className="padding h-scroll" rowSpan={1} colSpan={1} bg="rgb(0,0,0,0.2)">
              <TableContainer>
                <Table variant="striped">
                  <Thead>
                    <Tr>
                      <Th className="white">Gastos</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {gastos.map((gasto) => <Tr><Th className="white">Q {gasto.gasto}</Th></Tr>)}
                    <Tr>
                      <Th>
                        <Tr className="white">Total de Ingresos: Q{(gastos.map((gasto) => gasto.gasto)
                          .reduce((previous, current) => previous + current, 0))}
                        </Tr>
                      </Th>
                    </Tr>
                  </Tbody>
                </Table>
              </TableContainer>
            </GridItem>
            <GridItem className="padding h-scroll" rowSpan={1} colSpan={1} bg="rgb(0,0,0,0.2)">
              <TableContainer>
                <Table variant="striped">
                  <Thead>
                    <Tr>
                      <Th className="white">Ingreso</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {ingresos.map((ingreso) => <Tr><Th className="white">Q {ingreso.ingreso}</Th></Tr>)}
                    <Tr>
                      <Th>
                        <Tr className="white">Total de Ingresos: Q{(ingresos.map((ingreso) => ingreso.ingreso)
                          .reduce((previous, current) => previous + current, 0))}
                        </Tr>
                      </Th>
                    </Tr>
                  </Tbody>
                </Table>
              </TableContainer>
            </GridItem>
          </Grid>
        </GridItem>
      </Grid>
    </div>
  );
}

export default Finanzas;
