import Api from '../Services/Api'
import mockData from '../Services/mockData'

export default function Services() {
  const dataSource = new Api() // switch between api() et mockData()

  return dataSource
}
