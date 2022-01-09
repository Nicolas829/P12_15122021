import React from 'react'
import { Component } from 'react'
import '../styles/sidebar.css'
import natation from '../assets/natation.svg'
import velo from '../assets/velo.svg'
import meditation from '../assets/meditation.svg'
import halteres from '../assets/halteres.svg'

export default class SideBar extends Component {
  /**
   * @param {img} natation
   * @param {img} velo
   * @param {img} meditation
   * @param {img} halteres
   * @returns Left Sidebar
   */
  render() {
    return (
      <aside className="sidebar">
        <div className="box-sport">
          <img src={natation} alt="natation" className="nav" />
        </div>
        <div className="box-sport">
          <img src={velo} alt="velo" className="nav" />
        </div>
        <div className="box-sport">
          <img src={meditation} alt="meditation" className="nav" />
        </div>
        <div className="box-sport">
          <img src={halteres} alt="haltere" className="nav" />
        </div>
        <p className="copyright"> Copyright, SportSee 2020</p>
      </aside>
    )
  }
}
