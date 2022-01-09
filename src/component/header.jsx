import React from 'react'
import { Component } from 'react'
import logo from '../assets/logo.svg'
import '../styles/header.css'

export default class header extends Component {
  /**
   * @param {img} logo
   * @returns headBar
   */
  render() {
    return (
      <div>
        <div className="top-bar">
          <img src={logo} alt="logo" className="logo"></img>
          <ul className="liste-top-bar">
            <li className="liste">Accueil</li>
            <li className="liste">Profil</li>
            <li className="liste">Réglage</li>
            <li className="liste">Communauté</li>
          </ul>
        </div>
      </div>
    )
  }
}
