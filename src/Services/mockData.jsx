import { userInfo } from '../mock/user'
import { userPerformance } from '../mock/performance'
import { userActivity } from '../mock/activity'
import { averageSessions } from '../mock/averageSessions'
import { userData } from '../models/userModels'
import { ActivityData } from '../models/activtyModels'
import { AverageData } from '../models/userAverageModels'
import { PerformanceData } from '../models/performanceModels'

export default class mockData {
  async getUser(urlId) {
    const result = await userInfo
    const data = await result.data

    return new userData(data, data.userInfos, data.keyData)
  }
  async getActivity(urlId) {
    const result = await userActivity
    const data = await result.data
    return new ActivityData(data.sessions)
  }
  async getAverageSessions(urlId) {
    const result = await averageSessions
    const data = await result.data
    return new AverageData(data.sessions)
  }
  async getPerformance(urlId) {
    const result = await userPerformance
    const data = await result.data
    return new PerformanceData(data.kind, data.data)
  }
}
