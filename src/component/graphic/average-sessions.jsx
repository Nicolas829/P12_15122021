import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';



export default class Average extends PureComponent {
 

  render() {
    return (
      <div style={{ width:"30%", }}>
        <ResponsiveContainer >
          <AreaChart
            data={this.props.averageSessions}
            margin={{
              top: 0,
              right: 0,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="sessionLength" stroke="#8884d8" fill="#8884d8" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
