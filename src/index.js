import React from "react";
import ReactDOM from "react-dom";
import Todo from "./Todo";
import "./reset.css";
import "./style.css";



const wrap = document.querySelector(".container");


ReactDOM.render (
    <Todo/>,
    wrap
);