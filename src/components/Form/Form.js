import React from 'react';
import TextField from '@material-ui/core/TextField';

import Button from '@material-ui/core/Button';
import './FormStyles.css';

export default function Form(props) {
  return (
    <div className="form-container">
      <TextField className="text-field" label="Add Task" variant="outlined" />
      <Button className="add-button" variant="contained" color="primary">
        Add Task
      </Button>
    </div>
  );
}
