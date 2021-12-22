import React from 'react';
import { Component } from 'react';


export default class Accueil extends Component {
    constructor(props){
        super(props)
        this.firstName=this.props.userInfos.firstName
       
    }    

    render (){return(
    <div class="accueil">
        <h1 class="titre-accueil">Bonjour <span class="firstname" >{this.props.userInfos.firstName}</span></h1>
        <p class="felicitation">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </div>)
    }
}