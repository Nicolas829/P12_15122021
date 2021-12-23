import { Component } from 'react';
import {getUser,  getAverageSessions, getPerformance, getActivity} from '../Services/Api';
import React from 'react';
import Header from '../component/header';
import Accueil from '../component/accueil';
import Example from '../component/graphic/poids-calories';
import PropTypes from 'prop-types'
import Average from '../component/graphic/average-sessions';
import "../styles/pages.css"
import RadarGrah from '../component/graphic/radar';




export default class Page extends Component {
    constructor(props){
        super(props)      
        this.state =
        {
            dataUserInfos:[],           
            keyData:[],            
            day:[],
            userActivity:[],
            userAverage:[],
            listeKind:[],
        }
          
    }
    componentDidMount(){ 
        const url="12"; //url = userid 
        getUser(url)     
        .then((data)=> {
            this.setState({
               dataUserInfos:data.userInfos,              
               keyData:data.keyData,           
              
            })
        })     
        getAverageSessions(url)
        .then((data)=>{
            this.setState({
                userAverage:data.sessions,                       
            })
        })    
        getPerformance(url) 
        .then((data)=>{
          
            this.setState({
                listeKind:data.kind,         
                dataPerformance:data.data,               
                
            })
            const newKind = this.state.dataPerformance        
            newKind.map(
                (item, index)=>{
                    if(item.kind===index+1){
               item.kind=this.state.listeKind[index+1]};console.log(item.kind)
                }
            )            
            this.setState({
                userPerformance:newKind,
            })
            
        })    
        
       getActivity(url) 
        .then((data)=>{
            this.setState({
                userActivity:data.sessions,                         
            })
        })    
    }
    
    render (){console.log(this.state.userPerformance)
      return ( 
      <div >
        <Header />
        <Accueil userInfos={this.state.dataUserInfos}  />
        <div class="container-graph-data">
            <div class="container-graph">
                <div class="graph-pds-cal">
                    <Example userActivity={this.state.userActivity} />
                </div>
                <div class="average-radar-score">
                    <Average averageSessions={this.state.userAverage} />
                    <RadarGrah userPerformance={this.state.userPerformance} />

                </div>
             </div>
        </div>
    </div>
         )
    }
  }

  Page.propTypes = {
    
    dataUserInfos:PropTypes.array,          
    keyData:PropTypes.array,
    activityUser:PropTypes.array,
    day:PropTypes.array,
    userActivity:PropTypes.array,
    userAverage:PropTypes.array,
    listeKind:PropTypes.array,
    
    
  };
  
