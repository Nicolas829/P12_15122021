/**
 * @param {object} sessions
 * @return model activty
 */

export class ActivityData {
  constructor(sessions) {
    this.sessions = sessions
    this.sessions.map(
      (item) => (item.day = item.day.charAt(item.day.length - 1)),
    )
  }
}
