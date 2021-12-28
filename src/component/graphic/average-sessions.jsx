import React, { PureComponent } from 'react'
import {
  Rectangle,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts'
import '../../styles/average.css'

function formatXAxis (value) {
  if (value === 1) return 'L'
  if (value === 2) return 'M'
  if (value === 3) return 'M'
  if (value === 4) return 'J'
  if (value === 5) return 'V'
  if (value === 6) return 'S'
  if (value === 7) return 'D'
}

export default class Average extends PureComponent {
  render () {
    return (
      <div
        style={{
          width: '30%',
          backgroundColor: '#FF0000',
          borderRadius: '5px'
        }}
      >
        <>
          <h4 className='titre-average'>durée moyenne des sessions</h4>
          <ResponsiveContainer width='100%'>
            <AreaChart
              data={this.props.averageSessions}
              margin={{
                top: 0,
                right: 0,
                left: 0,
                bottom: -50
              }}
            >
              <XAxis
                dataKey='day'
                tickSize={-40}
                tickFormatter={formatXAxis}
                axisLine={false}
                tickLine={false}
                tick={{ fill: 'white', fontSize: '0.8em', width: '10%' }}
                interval={'preserveStartEnd'}
              />
              <YAxis
                width='0'
                axisLine={false}
                tickLine={false}
                domain={[0, 100]}
                tickMargin={5000}
              />
              <Area
                dataKey='sessionLength'
                type='natural'
                stroke='white'
                strokeWidth={2}
                fill='white'
                fillOpacity={0.2}
                unit=' min'
                name=' '
              />
              <Legend />

              <Tooltip
                separator=''
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
const CustomCursor = props => {
  const { points, width, height } = props
  const { x, y } = points[0]
  console.log(points)

  console.log(props)
  return (
    <Rectangle
      fill='black'
      fillOpacity={0.1}
      x={x}
      y={y}
      width={width}
      height={height}
    />
  )
}

// background color rright #FF0000
//background color bottom
//background color top
