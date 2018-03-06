import React, { Component } from 'react'
import './About.css'

class About extends Component {
  render() {
    return (
      <div className="About block color-block" id="about">
        <h1 className="about">About The Conference</h1>
        <div className="about-text">
          <p>This is a Summer School of the SFB/TRR 45 Bonn-Essen-Mainz financed by the DFG (Deutsche Forschungsgemeinschaft). It will take place from September 10th until September 14th, 2018 at the Università degli studi di Salerno (Italy). To register, please scroll down.
          </p>
          <br/>
          <p>This summer school is intended for advanced master students, PhD students, and young researchers in algebra, number theory and geometry.</p>
          <br/>
          <p>The school consists of four mini-courses of four 1-hour classes each,
          plus three research talks.
          During the week, two sessions for questions of the students to the lecturers of the mini-courses are also scheduled.
          </p>
          <br/>
          <div className='organisers'>
            <strong className='organisers-list'>Organisers:</strong>
            <ul className='organisers-list'>
              <li className='organisers-item'>Dino Festi - <a href="">Personal website</a></li>
              <li className='organisers-item'>Ariyan Javanpeykar - <a href="">Personal website</a></li>
              <li className='organisers-item'>Davide Cesare Veniani - <a href="">Personal website</a></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default About