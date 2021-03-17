import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import styles from "./Desktop1.scss";
import Desktop1 from './Desktop1';

import './main.css'
//var BackgroundBase = require("./BackgroundBase.png")

function App() {
  return (
        <div class="app-wrap">
          <main>

            {/* <div class="location">
              <div class="hello">Good Morning Hoda.</div>
              <div class="city">San Francisco, CA</div>
              <div class="date">Monday | Mar 15 | 10:15 AM</div>
            </div> */}
              <div class="hello"> Good Morning User! </div>

              <div class="city">San Francisco, CA</div>
            <div class="current">
              
              {/* <br></br> */}
              
              <div class="date">Monday | Mar 15 | 10:15 AM</div>
              <div class="temp">15<span>°F</span></div>
              
              <div class="weather">Cloudy</div>
              <div class="hi-low">44°F / 33°F</div>
            </div>

            <section class="weekly">
              {/* <div class="mon">15<span>°F</span></div>
              <div class="mon_weather">Cloudy</div>
              <div class="mon_hi-low">44°F / 33°F</div> */}
              <div class="week_view">This Week</div>
            
                <div class="divTable weeklyView">
                <div class="divTableHeading">
                <div class="divTableRow">
                <div class="divTableHead">Tues</div>
                <div class="divTableHead">Wed</div>
                <div class="divTableHead">Thur</div>
                <div class="divTableHead">Fri</div>
                <div class="divTableHead">Sat</div>
                <div class="divTableHead">Sun</div>
                </div>
                </div>
                <div class="divTableBody">
                <div class="divTableRow">
                <div class="divTableCell">55°/49°</div>
                <div class="divTableCell">56°/49°</div>
                <div class="divTableCell">57°/49°</div>
                <div class="divTableCell">57°/46°</div>
                <div class="divTableCell">58°/44°</div>
                <div class="divTableCell">60°/47°</div>
                </div>
                </div>
                </div>

          </section>

          </main>
        </div>
  );
}

export default App;
