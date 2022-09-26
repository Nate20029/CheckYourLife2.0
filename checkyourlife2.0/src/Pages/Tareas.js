/* eslint-disable no-unused-vars */
/* eslint-disable react/no-children-prop */
import React, { useEffect, useState } from 'react';
import {
  Grid, GridItem, IconButton, Input, Button, InputGroup, Text, Textarea,
} from '@chakra-ui/react';
// import { useNavigate } from 'react-router-dom';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import '../Assets/Styles/Tareas/Page.scss';
import { onAuthStateChanged } from 'firebase/auth';
import {
  doc, getDoc, updateDoc, arrayUnion, arrayRemove,
} from 'firebase/firestore';
import TaskItem from '../Components/Tareas/TaskItem';
import DateItem from '../Components/Tareas/DateItem';
import { addTask, convertDate, dayToDate, getCurrentDates, getData, handleData } from '../Services/Tareas';
import { db, auth } from '../Services/firebase';

function Tareas() {
  const dates = getCurrentDates();
  const [selectedDate, setSelectedDate] = useState(0);
  const [data, setData] = useState([]);
  const [scroll, setScroll] = useState(0);
  const [search, setSearch] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [beginDate, setBeginDate] = useState();
  const [beginDateLabel, setBeginDateLabel] = useState();
  const [endDateLabel, setEndDateLabel] = useState();
  const [endDate, setEndDate] = useState();
  const [user, setUser] = useState();

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

  useEffect(() => {
    onAuthStateChanged(auth, (u) => {
      setUser(u);
      setData(getData(u));
      verifyDoc(u.uid);
    });
  }, []);

  const checkContains = (title) => {
    let found = false;
    // eslint-disable-next-line array-callback-return
    data.map((element) => {
      if (element.title === title) {
        found = true;
      }
    });
    return found;
  };

  const selectDate = (date) => {
    setSelectedDate(date);
  };

  const scrollLeft = () => {
    if (scroll === 0) {
      setScroll(scroll);
    } else {
      setScroll(scroll - 100);
    }
  };

  const handleSearch = (event) => setSearch(event.target.value);
  const changeName = (event) => {
    if (event.target.value.length < 30) setName(event.target.value);
  };
  const changeDescription = (event) => {
    if (event.target.value.length < 120) setDescription(event.target.value);
  };
  const changeBegintDate = (event) => {
    setBeginDate(new Date(event.target.value));
    setBeginDateLabel(event.target.value);
  };
  const changeEndDate = (event) => {
    setEndDate(new Date(event.target.value));
    setEndDateLabel(event.target.value);
  };

  const getHandleData = async (newTask) => {
    setData(await handleData(user, data, newTask));
  };

  const scrollRight = () => {
    if (dates.length > 28 && scroll === 400) {
      setScroll(scroll);
    } else if (dates.length > 28 && scroll !== 400) {
      setScroll(scroll + 100);
    } else if (dates.length <= 28 && scroll === 300) {
      setScroll(scroll);
    } else {
      setScroll(scroll + 100);
    }
  };

  return (
    <Grid
      h="88vh"
      templateRows="repeat(1, 1fr)"
      templateColumns="repeat(3, 1fr)"
      gap={10}
    >
      <GridItem rowSpan={1}>
        <div className="search_task_panel">
          <div className="search_inner_container">
            <Input
              variant="unstyled"
              placeholder="Search Task"
              value={search}
              onChange={handleSearch}
            />
          </div>
          <div className="search_tasks_container">
            <div className="search_task_inner_container">
              {
                data
                  ? data.map((task) => {
                    if (search.length && ((task.title).toLowerCase()).includes(search)) {
                      return (
                        <TaskItem
                          key={task.title + Math.random().toString()}
                          data={task}
                          handleDataFunction={getHandleData}
                        />
                      );
                    } return null;
                  })
                  : null
              }
            </div>
          </div>
        </div>
      </GridItem>
      <GridItem rowSpan={2} colSpan={1}>
        <div className="task_page_general_container">
          <div className="tasks_container">
            <div className="task_header">
              <div className="dates_carousel">
                <div className="dates_inner_carousel" style={{ transform: `translateX(-${scroll}%)` }}>
                  {
                    dates.map((day) => (
                      <DateItem
                        key={day}
                        data={convertDate(day.getDay(), day.getDate())}
                        selected={selectedDate ? (selectedDate.getDay() === day.getDay()) : false}
                        onClickFunction={selectDate}
                        date={day}
                      />
                    ))
                      }
                </div>
              </div>
              <div className="arrows_container">
                <div className="left_arrow_container">
                  <IconButton
                    className="left_arrow"
                    aria-label="Search database"
                    colorScheme="blackAlpha"
                    size="sm"
                    icon={<ChevronLeftIcon />}
                    onClick={() => { scrollLeft(); }}
                  />
                </div>
                <div className="right_arrow_container">
                  <IconButton
                    className="right_arrow"
                    aria-label="Search database"
                    colorScheme="blackAlpha"
                    size="sm"
                    icon={<ChevronRightIcon />}
                    onClick={() => { scrollRight(); }}
                  />
                </div>
              </div>
            </div>
            <div className="daily_tasks_container">
              {
                  data.map((task) => {
                    const date = selectedDate;
                    if (selectedDate
                      && task.expiration.length > 0
                      && task.expiration[0]
                      && task.expiration[1]
                      && date >= new Date(task.expiration[0].seconds * 1000)
                      && date <= new Date(task.expiration[1].seconds * 1000)) {
                      return (
                        <TaskItem
                          key={task.title}
                          data={task}
                          handleDataFunction={getHandleData}
                        />
                      );
                    }
                    if (selectedDate && task.expiration.length === 0) {
                      return (
                        <TaskItem
                          key={task.title}
                          data={task}
                          handleDataFunction={getHandleData}
                        />
                      );
                    }
                    return null;
                  })
                  }
            </div>
          </div>
        </div>
      </GridItem>
      <GridItem rowSpan={1}>
        <div className="add_task_panel">
          <Grid
            h="37vh"
            templateRows="repeat(5, 1fr)"
            templateColumns="repeat(1, 1fr)"
            gap={5}
          >
            <GridItem colSpan={1} height="5vh">
              <div className="search_inner_container">
                <Input variant="unstyled" placeholder="Nombre de la Tarea" value={name} onChange={changeName} />
              </div>
            </GridItem>
            <GridItem colSpan={1} height="5vh">
              <div className="search_inner_container">
                <InputGroup>
                  <Text fontWeight="700">Inicio: </Text>
                  <Input variant="unstyled" placeholder="Date..." type="datetime-local" value={beginDateLabel} onChange={changeBegintDate} />
                </InputGroup>
              </div>
            </GridItem>
            <GridItem colSpan={1} height="5vh">
              <div className="search_inner_container">
                <InputGroup>
                  <Text fontWeight="700">Final: </Text>
                  <Input variant="unstyled" placeholder="Date..." type="datetime-local" value={endDateLabel} onChange={changeEndDate} />
                </InputGroup>
              </div>
            </GridItem>
            <GridItem colSpan={1} height="20vh">
              <div className="search_inner_container_description">
                <Textarea
                  value={description}
                  onChange={changeDescription}
                  placeholder="Descripción"
                  size="sm"
                  height="18vh"
                  border="0"
                />

              </div>
            </GridItem>
            <GridItem colSpan={1} height="9vh">
              <Button size="lg" width="100%" height="7vh" borderRadius="2vh" colorScheme="facebook" onClick={() => { addTask(user, name, description, beginDate, endDate); }}>Agregar Tarea</Button>
            </GridItem>
          </Grid>
        </div>
      </GridItem>
    </Grid>
  );
}

export default Tareas;
