import React, { PureComponent } from 'react'
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from 'recharts'

export default class RadarGrah extends PureComponent {
  render() {
    return (
      <div
        style={{
          backgroundColor: '#282D30',
          width: '31%',
          height: '16em',
          borderRadius: '5px',
        }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart
            legendType="none"
            data={this.props.userPerformance}
            fill="#282D30"
            cx="50%"
            cy="50%"
            outerRadius="80%"
          >
            <PolarGrid radialLines={false} />
            <PolarAngleAxis
              dataKey="kind"
              tick={{ fill: 'white', fontSize: '0.8em' }}
            />
            <Radar dataKey="value" fill="#FF0000" fillOpacity={0.8} />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    )
  }
}
