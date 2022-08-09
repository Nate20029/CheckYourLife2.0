import React, { useState, useEffect } from "react";
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

function TaskItem({data}) {
    const navigate = useNavigate();



  return (
    <>
        <div className="task_item_container">
            {data}
        </div>
    </>
  );
}

export default TaskItem;