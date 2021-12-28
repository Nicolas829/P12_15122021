import React from 'react'
import { Component } from 'react'
import {
  getUser,
  getAverageSessions,
  getPerformance,
  getActivity
} from '../Services/Api'

import Header from '../component/header'
import Accueil from '../component/accueil'
import PoidsCalories from '../component/graphic/poids-calories'
import PropTypes from 'prop-types'
import Average from '../component/graphic/average-sessions'
import '../styles/pages.css'
import RadarGrah from '../component/graphic/radar'
import PieScore from '../component/graphic/pieChart'

export default class Page extends Component {
  constructor (props) {
    super(props)
    this.state = {
      dataUserInfos: [],
      keyData: [],
      day: [],
      userActivity: [],
      userAverage: [],
      listeKind: [],
      data: []
    }
  }
  componentDidMount () {
    const url = '18' //url = userid
    getUser(url).then(data => {
      this.setState({
        data: data,
        dataUserInfos: data.userInfos,
        keyData: data.keyData
      })
    })
    getAverageSessions(url).then(data => {
      this.setState({
        userAverage: data.sessions
      })
    })
    getPerformance(url).then(data => {
      this.setState({
        listeKind: data.kind,
        dataPerformance: data.data
      })
      const newKind = this.state.dataPerformance
      newKind.map((item, index) => {
        if (item.kind === index + 1) {
          item.kind = this.state.listeKind[index + 1]
        }
      })
      this.setState({
        userPerformance: newKind
      })
    })

    getActivity(url).then(data => {
      this.setState({
        userActivity: data.sessions
      })
    })
  }

  render () {
    return (
      <div>
        <Header />
        <Accueil userInfos={this.state.dataUserInfos} />
        <div className='container-graph-data'>
          <div className='container-graph'>
            <div className='graph-pds-cal'>
              <PoidsCalories userActivity={this.state.userActivity} />
            </div>
            <div className='average-radar-score'>
              <Average averageSessions={this.state.userAverage} />
              <RadarGrah userPerformance={this.state.userPerformance} />
              <PieScore data={this.state.data} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Page.propTypes = {
  dataUserInfos: PropTypes.array,
  keyData: PropTypes.array,
  activityUser: PropTypes.array,
  day: PropTypes.array,
  userActivity: PropTypes.array,
  userAverage: PropTypes.array,
  listeKind: PropTypes.array
}
