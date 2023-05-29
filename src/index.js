import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import News from "./news";
import Nav from "./nav";
import {BrowserRouter,Route,Link, Routes} from "react-router-dom"
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <><News  newsName="iphone"/>
  <News newsname="Tesla"/></>
  
  ,
  document.getElementById("root")
);
reportWebVitals();