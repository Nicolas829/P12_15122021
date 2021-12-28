import React, { PureComponent } from 'react'
import {
  RadialBarChart,
  PieChart,
  Pie,
  RadialBar,
  Cell,
  Legend
} from 'recharts'
import '../../styles/pieChart.css'

export default class PieScore extends PureComponent {
  render () {
    const data01 = []
    const data02 = []

    data01.push({
      score: this.props.data.score,
      fill: 'red'
    })
    data01.push({
      score: 1 - this.props.data.score,
      fill: 'transparent',
      stroke: 'transparent'
    })

    data02.push({
      value: 1,
      fill: 'white',
      stroke: 'white',
      strokeWidth: '18'
    })

    const score = this.props.data.score * 100

    return (
      <div
        style={{
          backgroundColor: '#FBFBFB',
          width: '30%',
          borderRadius: '5px'
        }}
      >
        <h5 className='titre'>score</h5>
        <PieChart width={400} height={400}>
          <Pie
            startAngle={180}
            endAngle={-180}
            data={data02}
            dataKey='value'
            cx='35%'
            cy='35%'
            outerRadius={70}
            fill='white'
          />
          <Pie
            startAngle={180}
            endAngle={-180}
            data={data01}
            fill={{ radius: '5, 5, 5, 5' }}
            dataKey='score'
            cx='35%'
            cy='35%'
            innerRadius={80}
            outerRadius={90}
            cornerRadius={5}
          />
          <text
            x='35%'
            y='30%'
            textAnchor='middle'
            dominantBaseline='middle'
            className='pourcentage'
          >
            {score}%
          </text>
          <text
            x='35%'
            y='35%'
            textAnchor='middle'
            dominantBaseline='middle'
            className='score-objectif'
          >
            de votre
          </text>
          <text
            x='35%'
            y='40%'
            textAnchor='middle'
            dominantBaseline='middle'
            className='score-objectif'
          >
            objectif
          </text>
        </PieChart>
      </div>
    )
  }
}

/**/
