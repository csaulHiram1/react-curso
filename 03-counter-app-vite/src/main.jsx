import React from "react";
import ReactDom from "react-dom/client";
import { CounterApp } from './CounterApp';
import { FirstApp } from './FirstApp';

// Estilos globales
import './styles.css'


ReactDom.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <CounterApp value={5}></CounterApp>
      {/*  <FirstApp title="Hola, soy vegeta" ></FirstApp> */}
    </React.StrictMode>
)