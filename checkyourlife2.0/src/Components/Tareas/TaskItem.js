import React from 'react';

function TaskItem({ data }) {
  return (
    <div className="task_item_container">
      {data}
    </div>
  );
}

export default TaskItem;
