import React from 'react'
import { Component } from 'react'
import PropTypes from 'prop-types'
import '../styles/container-box-chiffres.css'
import calories from '../assets/calories.svg'
import proteines from '../assets/proteines.svg'
import glucides from '../assets/glucides.svg'
import lipides from '../assets/lipides.svg'

export default class ContainerBoxChiffre extends Component {
  /**
   * @param {object} keyData
   * @param {string} keyData.calorieCount
   * @param {string} keyData.lipidCount
   * @param {string} keyData.carbohydrateCount
   * @param {string} keyData.proteinCount
   * @param {img} natation
   * @param {img} velo
   * @param {img} halteres
   * @param {img} meditation
   * @param {number} Kcal
   * @returns
   */
  render() {
    const kCal = new Intl.NumberFormat('en-IN', {
      maximumSignificantDigits: 3,
    }).format(this.props.keyData.calorieCount)
    const keyData = this.props.keyData
    const lipidCount = keyData.lipidCount
    const carbohydrateCount = keyData.carbohydrateCount
    const proteinCount = keyData.proteinCount
    const calorieCount = keyData.calorieCount

    return (
      <div className="main-container-chiffre">
        <div className="box-data">
          <div className="box-cal">
            <img src={calories} alt="calories" className="img" />
          </div>
          <div className="texte">
            <h1>{kCal}kCal</h1>
            <p className="keyData-text">Calories</p>
          </div>
        </div>
        <div className="box-data">
          <div className="box-proteines">
            <img src={proteines} alt="proteines" className="img" />
          </div>
          <div>
            <h1>{proteinCount}g</h1>
            <p className="keyData-text">Protéines</p>
          </div>
        </div>
        <div className="box-data">
          <div className="box-glucides">
            <img src={glucides} alt="glucides" className="img" />
          </div>
          <div>
            <h1>{carbohydrateCount}g</h1>
            <p className="keyData-text">Glucides</p>
          </div>
        </div>
        <div className="box-data">
          <div className="box-lipides">
            <img src={lipides} alt="lipides" className="img" />
          </div>
          <div>
            <h1>{lipidCount}g</h1>
            <p className="keyData-text">Lipides</p>
          </div>
        </div>
      </div>
    )
  }
}

ContainerBoxChiffre.PropType = {
  keyData: PropTypes.array,
  lipidCount: PropTypes.number,
  carbohydrateCount: PropTypes.number,
  proteinCount: PropTypes.number,
  calorieCount: PropTypes.number,
}
