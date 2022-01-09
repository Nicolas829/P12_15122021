//création des objets fetch

export async function getUser(urlId) {
  return fetch(`http://localhost:3000/user/` + urlId)
    .then((response) => response.json())
    .then((data) => {
      return data.data
    })
}

export async function getActivity(urlId) {
  return fetch(`http://localhost:3000/user/` + urlId + '/activity')
    .then((response) => response.json())
    .then((data) => data.data)
}
export async function getAverageSessions(urlId) {
  return fetch(`http://localhost:3000/user/` + urlId + '/average-sessions')
    .then((response) => response.json())
    .then((data) => data.data)
}
export async function getPerformance(urlId) {
  return fetch(`http://localhost:3000/user/` + urlId + '/Performance')
    .then((response) => response.json())
    .then((data) => {
      return data.data
    })
}
