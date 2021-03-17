import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import styles from "./Desktop1.scss";
import Desktop1 from './Desktop1';

import './main.css'
//var BackgroundBase = require("./BackgroundBase.png")

function App() {
  return (
      <body>
        <div class="app-wrap">
          <main>
            <section class="location">
              <div class="hello">Good Morning Hoda.</div>
              <div class="city">San Francisco, CA</div>
              <div class="date">Monday | Mar 15 | 10:15 AM</div>
            </section>
            <div class="current">
              <div class="temp">15<span>°F</span></div>
              <div class="weather">Cloudy</div>
              <div class="hi-low">44°F / 33°F</div>
            </div>
            <section class="weekly">
              <div class="mon">15<span>°F</span></div>
              <div class="mon_weather">Cloudy</div>
              <div class="mon_hi-low">44°F / 33°F</div>
            </section>
          </main>
        </div>
      </body>
  );
}

export default App;
