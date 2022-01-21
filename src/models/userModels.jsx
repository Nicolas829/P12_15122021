/**
 * @param {object} keyData données chiffrés
 * @param {object} data
 * @param {object} dataUserInfos données id utilisateurs
 * @return {class} model Performance
 */

export class userData {
  constructor(data, userInfos, keyData) {
    this.data = data
    this.dataUserInfos = userInfos
    this.keyData = keyData
  }
}
