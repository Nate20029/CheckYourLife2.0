import React, { useState, useEffect } from "react";
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { IconButton } from '@chakra-ui/react'
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import '../Assets/Styles/Tareas/Page.scss'
import TaskItem from "../Components/Tareas/TaskItem";
import DateItem from "../Components/Tareas/DateItem";
import { getCurrentDates } from "../Services/Tareas";

function Tareas() {
  const dates = getCurrentDates();
  const [data, setData] = useState([1,2,3,4,5,6,7,8,9,10]);
  const [scroll, setScroll] = useState(0);
  const navigate = useNavigate();


  return (
    <>
        <div className="task_page_general_container">
          <div className="tasks_container">
            <div className="task_header">
              <div className="dates_carousel" >
                <div className="dates_inner_carousel"  style={{ transform: `translateX(-${scroll}%)`}}>
                {
                  dates.map((day) => (
                    <DateItem key={day} data={day.getDate()}></DateItem>
                  ))
                }
                </div>
              </div>
              <div className="arrows_container">
                <div className="left_arrow_container">
                  <IconButton className="left_arrow" aria-label='Search database' colorScheme='blackAlpha' size='sm' icon={<ChevronLeftIcon />} onClick={() => {dates.length > 28? scroll === 0 ? setScroll(scroll) : setScroll(scroll-100) : scroll === 0? setScroll(0) : setScroll(scroll-100) }}/>
                </div>
                <div className="right_arrow_container">
                  <IconButton className="right_arrow" aria-label='Search database' colorScheme='blackAlpha' size='sm' icon={<ChevronRightIcon />} onClick={() => {dates.length > 28? scroll === 500? setScroll(scroll) : setScroll(scroll+100) : scroll === 400? setScroll(scroll) : setScroll((scroll+100)%400) }} />
                </div>
              </div>
            </div>
            {
              data.map((task) => (
                <TaskItem key={task} data={task} />
              ))
            }
          </div>
        </div>
    </>
  );
}

export default Tareas;
