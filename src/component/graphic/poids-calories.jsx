import React, { PureComponent } from 'react';
import {  BarChart, Bar,  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


        


export default class Example extends PureComponent {
    

  render() {
    return (
      <ResponsiveContainer width="40%" height="30%" >
        <BarChart
          width={500}
          height={300}
          data={this.props.userActivity}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis domain={[0, '100']} />
          <Tooltip />
          <Legend />
          <Bar dataKey="kilogram" fill="#282D30"  />
          <Bar dataKey="calories" fill="#E60000" barGap="15" barCategoryGap="30"  />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
