import React from 'react';
import { Component } from 'react';
import logo from "../assets/logo.svg"
import nav from "../assets/nav.png"


export default class header extends Component {

    render (){
        return(
    <div>
        <div className="top-bar">
            <img src={logo} className="logo"></img>
            <ul className="liste-top-bar">                
                <li className="liste">Accueil</li>
                <li className="liste">Profil</li>
                <li className="liste">Réglage</li>
                <li className="liste">Communauté</li>
            </ul>

        </div>
        <aside className="sidebar">
        <img src={nav} className="nav" />
        <p className="copyright"> Copyright, SportSee 2020</p>
        </aside>
    </div>
   )
    }

}