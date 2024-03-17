import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity,Button } from 'react-native';
import Constants from 'expo-constants';
import db from './config';

export default class App extends React.Component{
  constructor(){
    super()
    this.state={teamsrank:[]}
  }
  teamsrank=()=>{
    var a =[];
    var data = db.ref("teams/")
    data.on("value",(data)=>{
      var teamlist = data.val();
      for(var team in teamlist ){
        if(teamlist[team]["isButtonPressed"]===true){
          teamlist[team]["teamName"]=team
          a.push(teamlist[team])
        }
      }
      a.sort(function(team1,team2){
        return team1.timestamp-team2.timestamp;
        
      })
      this.setState({teamsrank:a})
      a=[];
      
    })

  }
  componentDidMount(){
    this.teamsrank()
  }
  resetdatabase=()=>{
    var reset = db.ref("teams/").set({
      cyan:{
        isButtonPressed:false,
        timestamp:0
      },
      magenta:{
        isButtonPressed:false,
        timestamp:0
      },
      limegreen
      :{
        isButtonPressed:false,
        timestamp:0
      },
      orange:{
        isButtonPressed:false,
        timestamp:0
      },
     

    })
    this.setState({teamsrank:[]})

  }
  render(){
    return(
      <View>
      <View style={{
marginTop:10,
      }}>
      <Button
      title="reset"
      style={{
        width:100,
        height:100,
      
        
      }}
      
      onPress={this.resetdatabase}/>
      </View>
      <View
      style={{
        flex:1,
      justifyContent:"center",
      alignItems:"center",
      marginTop:100
      }}>
{this.state.teamsrank.map((data)=>(
<View
style={{
  width:250,
  height:75,
  borderWidth:1,
  borderColor: 'rgba(0,0,0,0.2)',
  margin:10,
  justifyContent:"center",
  alignItems:"center",
  backgroundColor:data.teamName,
  borderRadius:90,
}}>
<Text style={{
  fontWeight: 'bold',
    fontSize: 30,
    color:"white",
}}>
{data.teamName.toUpperCase()}
</Text>
</View>
))}
      
      </View >
      
      </View>
    )
  }
}
