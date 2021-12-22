import React from 'react';
import { Component } from 'react';
import logo from "../assets/logo.svg"
import nav from "../assets/nav.png"


export default class header extends Component {

    render (){
        return(
    <div>
        <div class="top-bar">
            <img src={logo} class="logo"></img>
            <ul class="liste-top-bar">                
                <li class="liste">Accueil</li>
                <li class="liste">Profil</li>
                <li class="liste">Réglage</li>
                <li class="liste">Communauté</li>
            </ul>

        </div>
        <aside class="sidebar">
        <img src={nav} class="nav" />
        <p class="copyright"> Copyright, SportSee 2020</p>
        </aside>
    </div>
   )
    }

}