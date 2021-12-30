import React, { PureComponent } from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import '../../styles/poids-calories.css'

export default class PoidsCalories extends PureComponent {
  render() {
    const data = []
    this.props.userActivity.map((item) =>
      data.push({
        day: item.day.charAt(item.day.length - 1),
        calories: item.calories,
        kilogram: item.kilogram,
      }),
    )

    return (
      <div
        style={{ width: '60em', height: '20em' }}
        className="container-barChart"
      >
        <div className="header-barChart">
          <h3 className="titre-activite-quotidienne">Activité quotidienne</h3>
          <div className="legend">
            <div className="poids">
              <span className="blackPoint">.</span>
              <h4>Poids (kg)</h4>
            </div>
            <div className="calories">
              <span className="redPoint">.</span>
              <h4>Calories brûlées (kCal)</h4>
            </div>
          </div>
        </div>
        <ResponsiveContainer width="100%" height="100%" barCategoryGap="20%">
          <BarChart
            barSize={10}
            data={data}
            margin={{
              top: 80,
              right: 0,
              left: 0,
              bottom: 5,
            }}
          >
            <CartesianGrid
              x={55}
              width={790}
              height={200}
              vertical={false}
              overflow="hidden"
            />
            <XAxis
              axisLine={false}
              barCategoryGap="20"
              dataKey="day"
              tick={{ fontSize: '0.8em' }}
              tickLine={false}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              orientation="right"
              domain={['dataMin-1', 'dataMax+1']}
              interval={1}
              dataKey="kilogram"
              name="kg"
              yAxisId="kg"
            />
            <YAxis
              orientation="right"
              domain={['0', 'auto']}
              tickLine={false}
              hide={true}
              dataKey="calories"
              yAxisId="Kcal"
            />
            <Tooltip
              content={<CustomTooltip />}
              cursor={{ fillOpacity: '0.5' }}
              labelStyle={{ display: 'none' }}
              wrapperStyle={{ backgroundColor: 'red' }}
              item="Kg"
              itemStyle={{ color: 'white', backgroundColor: 'red' }}
            />

            <Bar
              dataKey="kilogram"
              name="Poids (kg)"
              fill="#282D30"
              radius={[5, 5, 0, 0]}
              yAxisId="kg"
            />
            <Bar
              dataKey="calories"
              name="Kcal"
              fill="#E60000"
              radius={[5, 5, 0, 0]}
              yAxisId="Kcal"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    )
  }
}

const CustomTooltip = ({ active, payload }) => {
  if (active && payload) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${payload[0].value}kg`}</p>
        <p className="label">{`${payload[1].value}calories`}</p>
      </div>
    )
  }
  return null
}
