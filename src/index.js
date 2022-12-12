import React from 'react';
import ReactDOM from 'react-dom/client';
import './functionBased/index.css';
import { BrowserRouter as Router } from "react-router-dom";

//component file
import TodoContainer from "./functionBased/components/TodoContainer"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router >
      <TodoContainer />
    </Router >
  </React.StrictMode>
);
