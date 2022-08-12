import React, { useState } from 'react';
import { Grid, GridItem, IconButton } from '@chakra-ui/react';
// import { useNavigate } from 'react-router-dom';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import '../Assets/Styles/Tareas/Page.scss';
import TaskItem from '../Components/Tareas/TaskItem';
import DateItem from '../Components/Tareas/DateItem';
import { convertDate, getCurrentDates } from '../Services/Tareas';

function Tareas() {
  const dates = getCurrentDates();
  const [selectedDate, setSelectedDate] = useState(0);
  const [data, setData] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]);
  const [scroll, setScroll] = useState(0);
  // const navigate = useNavigate();

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

  const scrollRight = () => {
    if (dates.length > 28 && scroll === 400) {
      setScroll(scroll);
    } else if (dates.length > 28 && scroll !== 400) {
      setScroll(scroll + 100);
    } else if (dates.length <= 28 && scroll === 300) {
      setScroll(scroll);
    } else {
      etScroll(scroll + 100);
    }
  };

  return (
    <Grid
      h="100%"
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(2, 1fr)"
      gap={10}
    >
      <GridItem rowSpan={1}>
        <div className="search_task_panel" />
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
                        selected={selectedDate === day.getDate()}
                        onClickFunction={selectDate}
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
                  data.map((task) => (
                    <TaskItem key={task} data={task} />
                  ))
                  }
            </div>
          </div>
        </div>
      </GridItem>
      <GridItem rowSpan={1}>
        <div className="add_task_panel" />
      </GridItem>
    </Grid>
  );
}

export default Tareas;
