import React from 'react';
import { Component } from 'react';


export default class Accueil extends Component {
   

    render (){return(
    <div className="accueil">
        <h1 className="titre-accueil">Bonjour <span className="firstname" >{this.props.userInfos.firstName}</span></h1>
        <p className="felicitation">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </div>)
    }
}