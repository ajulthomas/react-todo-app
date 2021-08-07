import React from 'react';
import './style.css';
import Todo from './components/Todo/Todo';
import Form from './components/Form/Form.js';

export default function App() {
  return (
    <>
      <Form />
      <Todo taskName="Learn React" />
    </>
  );
}
