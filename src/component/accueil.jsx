import React from 'react'
import { Component } from 'react'
import PropTypes from 'prop-types'

export default class Accueil extends Component {
  render() {
    /**
     * @param {object} userInfos
     * @return section titre
     */
    const userInfos = this.props.userInfos.firstName
    return (
      <div className="accueil">
        <h1 className="titre-accueil">
          Bonjour <span className="firstname">{userInfos}</span>
        </h1>
        <p className="felicitation">
          Félicitation ! Vous avez explosé vos objectifs hier 👏
        </p>
      </div>
    )
  }
}
Accueil.PropType = {
  userInfos: PropTypes.array,
}
