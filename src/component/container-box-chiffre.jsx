import React from 'react'
import { Component } from 'react'
import reactDom from 'react-dom'
import '../styles/container-box-chiffres.css'
import calories from '../assets/calories.svg'
import proteines from '../assets/proteines.svg'
import glucides from '../assets/glucides.svg'
import lipides from '../assets/lipides.svg'

export default class ContainerBoxChiffre extends Component {
  render() {
    console.log(this.props.keyData)
    return (
      <div className="main-container-chiffre">
        <div class="box-data">
          <div className="box-cal">
            <img src={calories} className="img" />
          </div>
          <div className="texte">
            <h1>{this.props.keyData.calorieCount}kCal</h1>
            <p className="keyData-text">Calories</p>
          </div>
        </div>
        <div class="box-data">
          <div className="box-proteines">
            <img src={proteines} className="img" />
          </div>
          <div>
            <h1>{this.props.keyData.proteinCount}g</h1>
            <p className="keyData-text">Protéines</p>
          </div>
        </div>
        <div class="box-data">
          <div className="box-glucides">
            <img src={glucides} className="img" />
          </div>
          <div>
            <h1>{this.props.keyData.carbohydrateCount}g</h1>
            <p className="keyData-text">Glucides</p>
          </div>
        </div>
        <div class="box-data">
          <div className="box-lipides">
            <img src={lipides} className="img" />
          </div>
          <div>
            <h1>{this.props.keyData.lipidCount}g</h1>
            <p className="keyData-text">Lipides</p>
          </div>
        </div>
      </div>
    )
  }
}
