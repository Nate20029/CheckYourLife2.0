import React, { useState, useEffect } from "react";
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

function DateItem({data}) {

  return (
    <>
        <div className="date_item_container">
            {data}
        </div>
    </>
  );
}

export default DateItem;