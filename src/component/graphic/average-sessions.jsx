import React, { PureComponent } from 'react'
import {
  Rectangle,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts'
import PropTypes from 'prop-types'
import { averageSessions } from '../../mock/averageSessions'
import '../../styles/average.css'

export default class Average extends PureComponent {
  /**
   * @param {object} averageSessions
   * @returns graph Average
   */

  render() {
    const sessions = this.props.averageSessions

    return (
      <div
        style={{
          width: '31%',
          height: '16em',
          backgroundColor: '#FF0000',
          borderRadius: '5px',
        }}
      >
        <>
          <h4 className="titre-average">durée moyenne des sessions</h4>
          <ResponsiveContainer width="100%">
            <AreaChart
              data={sessions}
              margin={{
                top: 0,
                right: 0,
                left: 0,
                bottom: -50,
              }}
            >
              <XAxis
                dataKey="day"
                tickSize={-40}
                axisLine={false}
                tickLine={false}
                tick={{ fill: 'white', fontSize: '0.8em' }}
                interval={'preserveStartEnd'}
              />
              <YAxis
                width="0"
                axisLine={false}
                tickLine={false}
                domain={[0, 100]}
                tickMargin={5000}
              />
              <Area
                dataKey="sessionLength"
                type="natural"
                stroke="white"
                strokeWidth={2}
                fill="white"
                fillOpacity={0.2}
                unit=" min"
                name=" "
              />
              <Legend />

              <Tooltip
                separator=""
                labelStyle={{ display: 'none' }}
                itemStyle={{ color: 'black', fontWeight: 'bold' }}
                cursor={<CustomCursor />}
              />
            </AreaChart>
          </ResponsiveContainer>
        </>
      </div>
    )
  }
}
const CustomCursor = (props) => {
  const { points, width, height } = props
  const { x } = points[0]
  console.log(width)
  return (
    <Rectangle
      fill="black"
      fillOpacity={0.1}
      x={x}
      width={width}
      height={height}
    />
  )
}

Average.PropType = {
  sessions: PropTypes.array,
}

// background color rright #FF0000
//background color bottom
//background color top
