import React, { useState, useEffect } from "react";
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

function DateItem({data, selected, onClickFunction}) {
  data = data.split(' ');


  return (
    <>
        <div className={'date_item_container' + (selected? ' selected_date': '')} onClick={()=> {onClickFunction(data[1])}}>
            {data[0]} <br /> {data[1]}
        </div>
    </>
  );
}

export default DateItem;