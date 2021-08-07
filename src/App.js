import React from 'react';
import './style.css';
import Todo from './components/Todo/Todo';
import Form from './components/Form/Form.js';
import ListTasks from './components/ListTasks/ListTasks.js';

export default function App() {
  return (
    <>
      <Form />
      <ListTasks />
      <Todo taskName="Learn React" />
    </>
  );
}
