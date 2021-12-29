import React from 'react'
import { Component } from 'react'
import '../styles/sidebar.css'
import logo from '../assets/logo.svg'
import natation from '../assets/natation.svg'
import velo from '../assets/velo.svg'
import meditation from '../assets/meditation.svg'
import halteres from '../assets/halteres.svg'

export default class SideBar extends Component {
  render() {
    return (
      <aside className="sidebar">
        <div className="box-sport">
          <img src={natation} className="nav" />
        </div>
        <div className="box-sport">
          <img src={velo} className="nav" />
        </div>
        <div className="box-sport">
          <img src={meditation} className="nav" />
        </div>
        <div className="box-sport">
          <img src={halteres} className="nav" />
        </div>
        <p className="copyright"> Copyright, SportSee 2020</p>
      </aside>
    )
  }
}
