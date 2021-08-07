import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import './TodoStyles.css';

export default function Todo(props) {
  const [checked, setChecked] = useState(false);
  const [taskClassName, setTaskClassName] = useState('task');
  const taskCompleted = event => {
    console.log(event.target.checked);
    setChecked(event.target.checked);
    setTaskClassName(event.target.checked ? "task complete" : "task");
  };
  return (
    <Card className="todo-item">
      <Paper elevation={3} />
      <Checkbox
        checked={checked}
        onChange={taskCompleted}
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
      <span className={taskClassName}> {props?.taskName} </span>
      <span className="spacer" />
      <Button className="button" variant="contained" color="primary" disabled={checked}>
        <EditOutlinedIcon />
      </Button>
      <Button className="button" variant="contained" color="secondary">
        <DeleteForeverOutlinedIcon />
      </Button>
    </Card>
  );
}
