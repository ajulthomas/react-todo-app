import React from 'react';
import './style.css';
import Form from './components/Form/Form.js';
import ListTasks from './components/ListTasks/ListTasks.js';
import Navbar from './components/Navbar/Navbar.js';

export default function App() {
  return (
    <>
      <Navbar />
      <Form />
      <ListTasks />
    </>
  );
}
