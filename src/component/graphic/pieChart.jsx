import React, { PureComponent } from 'react'
import { PieChart, Pie } from 'recharts'
import '../../styles/pieChart.css'
import PropTypes from 'prop-types'

export default class PieScore extends PureComponent {
  /**
   * @param {object} userData
   * @param {array} data01 score pourcent user
   * @param {array} data02 100% - score pourcent
   * @param {string} score || todayScore
   * @param {string} scorePourcent
   * @returns graph Pie
   */
  render() {
    const data01 = []
    const data02 = []
    let score = ''
    if (this.props.userData.todayScore === undefined) {
      score = this.props.userData.score
    } else {
      score = this.props.userData.todayScore
    }

    data01.push({
      score: score,
      fill: 'red',
    })
    data01.push({
      score: 1 - score,
      fill: 'transparent',
      stroke: 'transparent',
    })

    data02.push({
      value: 1,
      fill: 'white',
      stroke: 'white',
      strokeWidth: '18',
    })

    const scorePourcent = score * 100

    return (
      <div
        style={{
          backgroundColor: '#FBFBFB',
          width: '31%',
          height: '16em',
          borderRadius: '5px',
        }}
      >
        <h5 className="titre">Score</h5>
        <PieChart width={400} height={400}>
          <Pie
            startAngle={180}
            endAngle={-180}
            data={data02}
            dataKey="value"
            cx="35%"
            cy="35%"
            outerRadius={70}
            fill="white"
          />
          <Pie
            startAngle={180}
            endAngle={-180}
            data={data01}
            fill={{ radius: '5, 5, 5, 5' }}
            dataKey="score"
            cx="35%"
            cy="35%"
            innerRadius={80}
            outerRadius={90}
            cornerRadius={5}
          />
          <text
            x="35%"
            y="30%"
            textAnchor="middle"
            dominantBaseline="middle"
            className="pourcentage"
          >
            {scorePourcent}%
          </text>
          <text
            x="35%"
            y="35%"
            textAnchor="middle"
            dominantBaseline="middle"
            fill="#9B9EAC"
            className="score-objectif"
          >
            de votre
          </text>
          <text
            x="35%"
            y="40%"
            textAnchor="middle"
            dominantBaseline="middle"
            fill="#9B9EAC"
            className="score-objectif"
          >
            objectif
          </text>
        </PieChart>
      </div>
    )
  }
}
PieScore.PropType = {
  data01: PropTypes.array,
  data02: PropTypes.array,
  score: PropTypes.string,
}

/**/
