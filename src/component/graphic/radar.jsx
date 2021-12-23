import React, { PureComponent } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';



export default class RadarGrah extends PureComponent {
    
  
  render() {console.log(this.props.userPerformance)
    return (
      <div style={{ backgroundColor:"#282D30", width:"30%",  borderRadius:"5px", padding:"20px", overflow:"visible",  }}>
      <ResponsiveContainer width="100%" height="100%" >
        
        <RadarChart  legendType="none" data={this.props.userPerformance} fill="#282D30" cx="50%" cy="50%" outerRadius="80%">
          <PolarGrid  radialLines={false}  />
          <PolarAngleAxis  dataKey="kind"  tick={{fill:"white",fontSize:"0.8em"}}/>
          <PolarRadiusAxis angle={0}  tickCount={6} tick={{fill:"white"}} />
          <Radar dataKey="value" legendType='square' fill="#FF0000" fillOpacity={0.6} />
        </RadarChart>
       
      </ResponsiveContainer>
      </div>
    );
  }
}
