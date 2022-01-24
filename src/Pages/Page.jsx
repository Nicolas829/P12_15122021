import React from 'react'
import { Component } from 'react'
import Api from '../Services/Api'
import mockData from '../Services/mockData'
import Header from '../component/header'
import Accueil from '../component/accueil'
import PoidsCalories from '../component/graphic/poids-calories'
import PropTypes from 'prop-types'
import Average from '../component/graphic/average-sessions'
import '../styles/pages.css'
import RadarGrah from '../component/graphic/radar'
import PieScore from '../component/graphic/pieChart'
import ContainerBoxChiffre from '../component/container-box-chiffre'
import SideBar from '../component/sideBar'
import Services from '../Services/services'

export default class Page extends Component {
  constructor(props) {
    super(props)
    this.urlId = window.location.pathname.replace('/', '') //url = userid (12 or 18)
    this.dataSource = Services()
    this.state = {
      dataUserInfos: [],
      keyData: [],
      day: [],
      userActivity: [],
      userAverage: [],
      listeKind: [],
      data: [],
    }
  }

  componentDidMount() {
    this.dataSource.getUser(this.urlId).then((userData) => {
      this.setState({
        data: userData.data,
        dataUserInfos: userData.data.userInfos,
        keyData: userData.keyData,
      })
    })

    this.dataSource.getAverageSessions(this.urlId).then((AverageData) => {
      this.setState({
        userAverage: AverageData.sessions,
      })
    })
    this.dataSource.getPerformance(this.urlId).then((PerformanceData) => {
      this.setState({
        listeKind: PerformanceData.kind,
        dataPerformance: PerformanceData.data,
      })
      const newKind = this.state.dataPerformance
      newKind.map((item, index) => {
        if (item.kind === index + 1) {
          return (item.kind = this.state.listeKind[index + 1])
        }
        return item.kind
      })
      this.setState({
        userPerformance: newKind,
      })
    })

    this.dataSource.getActivity(this.urlId).then((ActivityData) => {
      this.setState({
        userActivity: ActivityData.sessions,
      })
    })
  }

  render() {
    console.log(this.state.data.id)
    if (this.state.data.id === undefined) {
      return (
        <div>
          <Header />
          <SideBar />
          <p className="error">
            Oups, Nous ne parvenons pas a retrouver vos informations
          </p>
        </div>
      )
    } else {
      return (
        <div>
          <Header />
          <SideBar />
          <Accueil userInfos={this.state.dataUserInfos} />
          <div className="container-graph-data">
            <div className="container-graph">
              <div className="graph-pds-cal">
                <PoidsCalories userActivity={this.state.userActivity} />
              </div>
              <div className="average-radar-score">
                <Average averageSessions={this.state.userAverage} />
                <RadarGrah userPerformance={this.state.userPerformance} />
                <PieScore userData={this.state.data} />
              </div>
            </div>
            <div className="container-box-chiffre">
              <ContainerBoxChiffre keyData={this.state.keyData} />
            </div>
          </div>
        </div>
      )
    }
  }
}
Page.propTypes = {
  dataUserInfos: PropTypes.array,
  keyData: PropTypes.array,
  activityUser: PropTypes.array,
  day: PropTypes.array,
  userActivity: PropTypes.array,
  userAverage: PropTypes.array,
  listeKind: PropTypes.array,
}
