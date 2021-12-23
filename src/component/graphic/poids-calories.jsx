import React, { PureComponent } from 'react';
import {  Rectangle, BarChart, Bar,  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Dot, Curve, Polygon } from 'recharts';


        


export default class Example extends PureComponent {
    

  render() {
    return (
      <div style={{ width:"60em", height:"20em"}}>
      <ResponsiveContainer width="100%" height="100%" barCategoryGap="20%">
        <BarChart
        
         barCategoryGap="20%"
         barSize={10}
          data={this.props.userActivity}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray=" 0"  vertical=""/>
          <XAxis dataKey="day"  minTickGap="true"/>
          <YAxis interval={1}  orientation="right" />
          <Tooltip />
          <Legend />
          <Bar dataKey="kilogram" fill="#282D30" shape={<Rectangle radius="20" x="20"/>} />
          <Bar dataKey="calories" fill="#E60000" />
        </BarChart>
      </ResponsiveContainer>
      </div>
    );
  }
}
