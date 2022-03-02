import React, { Component } from 'react'
import './components.css';
import schedule1 from '../schedule.png';
import schedule2 from '../schedule2.png'

export default class Schedule extends Component {
  render() {
    return (
      <>
      <div className='row'>

      
      <div className='twelve columns header-col'>
      <h1>
        <span style={{color:"white"}}>Schedule</span>
      </h1>
      </div>
      
      
      <div className='scheduleFrame'>
          <img src={schedule1} alt="schedule" />
          <img src={schedule2} alt="schedule" />
      </div>
      </div>
      </>

    )
  }
}
