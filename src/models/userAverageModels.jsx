/**
 * @param {object} sessions *
 * @return {class} Model Averagesessions
 */

export class AverageData {
  constructor(sessions) {
    this.sessions = sessions
    this.sessions.map((item) => {
      if (item.day === 1) {
        item.day = 'L'
      }
      if (item.day === 2) {
        item.day = 'M'
      }
      if (item.day === 3) {
        item.day = 'M'
      }
      if (item.day === 4) {
        item.day = 'J'
      }
      if (item.day === 5) {
        item.day = 'V'
      }
      if (item.day === 6) {
        item.day = 'S'
      }
      if (item.day === 7) {
        item.day = 'D'
      }
    })
  }
}
