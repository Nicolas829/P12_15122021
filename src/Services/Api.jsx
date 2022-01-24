import { userData } from '../models/userModels'
import { AverageData } from '../models/userAverageModels'
import { ActivityData } from '../models/activtyModels'
import { PerformanceData } from '../models/performanceModels'

import { Component } from 'react'
//création des objets fetch
const error = false
export default class Api extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hasError: false,
    }
  }
  async getUser(urlId) {
    return fetch(`http://localhost:3000/user/` + urlId)
      .then((response) => response.json())
      .then((data) => data.data)
      .then(
        (data) =>
          new userData(
            data,
            data.userInfos,
            data.keyData,
            data.score,
            data.todayScore,
          ),
      )
  }

  async getActivity(urlId) {
    return fetch(`http://localhost:3000/user/` + urlId + '/activity')
      .then((response) => response.json())
      .then((data) => data.data)
      .then((data) => new ActivityData(data.sessions))
  }
  async getAverageSessions(urlId) {
    return fetch(`http://localhost:3000/user/` + urlId + '/average-sessions')
      .then((response) => response.json())
      .then((data) => data.data)
      .then((data) => new AverageData(data.sessions))
  }
  async getPerformance(urlId) {
    return fetch(`http://localhost:3000/user/` + urlId + '/Performance')
      .then((response) => response.json())
      .then((data) => data.data)
      .then((data) => new PerformanceData(data.kind, data.data))
  }
}
