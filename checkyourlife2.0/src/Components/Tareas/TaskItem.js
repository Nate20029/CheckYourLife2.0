/* eslint-disable no-unused-vars */
import React from 'react';
import {
  Grid, GridItem, Checkbox, Badge,
} from '@chakra-ui/react';

function TaskItem({ data, handleDataFunction }) {
  return (
    <div className="task_item_container">
      <Grid templateColumns="repeat(6, 1fr)" templateRows="repeat(4, 1fr)" gap={0}>
        <GridItem rowSpan={4} colSpan={1} w="100%" h="100%">
          <div className="sides_item_container">
            <Checkbox
              size="lg"
              colorScheme="green"
              isChecked={data.completed}
              onChange={() => {
                handleDataFunction({
                  completed: !data.completed,
                  description: data.description,
                  expiration: data.expiration,
                  important: data.important,
                  title: data.title,
                });
              }}
            />
          </div>
        </GridItem>
        <GridItem rowSpan={2} colSpan={4} w="100%" h="100%">
          <div className="central_item_container_top">
            {data.title}
          </div>
        </GridItem>
        <GridItem rowSpan={4} colSpan={1} col w="100%" h="100%">
          <div className="sides_item_container_right">
            <Grid templateRows="repeat(2, 1fr)" gap={0}>
              <GridItem w="100%" h="5vh" display="flex" alignItems="end">
                {data.expiration[0] ? <Badge colorScheme="green">{new Date(data.expiration[0].seconds * 1000).toDateString().substring(3, 10)}</Badge> : null}
              </GridItem>
              <GridItem w="100%" h="5vh">
                {data.expiration[1] ? <Badge colorScheme="red">{new Date(data.expiration[1].seconds * 1000).toDateString().substring(3, 10)}</Badge> : null}
              </GridItem>
            </Grid>
          </div>
        </GridItem>
        <GridItem rowSpan={2} colSpan={4} w="100%" h="100%">
          <div className="central_item_container_bottom">
            {data.description}
          </div>
        </GridItem>
      </Grid>
    </div>
  );
}

export default TaskItem;
