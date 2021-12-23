import React, { PureComponent } from 'react';
import { Label, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Line, Legend } from 'recharts';



export default class Average extends PureComponent {
 

  render() {
    return (
      <div style={{ width:"30%", backgroundColor:"#FF0000", borderRadius:"5px"}}>
        <ResponsiveContainer width="100%" >
          <AreaChart
        
            data={this.props.averageSessions}
            margin={{
              top: 0,
              right: 0,
              left: 0,
              bottom: 0,
            }}
          
          >
            <CartesianGrid  horizontal="" vertical="" />
            <XAxis axisLine={false} tickLine={false} dataKey="day" tick={{fill:"white",fontSize:"0.8em"}} tick={<Label  position="insideBottom" />} />
            {/*essaye LABEL */}
                        
            <Tooltip />
            <Area  orientation="insideBottom" type="natural" dataKey="sessionLength" stroke="white" strokeWidth={2} fill="white" fillOpacity={0.20} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
  }
}

// background color rright #FF0000
//background color bottom 
//background color top