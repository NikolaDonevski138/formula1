import React from 'react'
import WorldChampions from './worldChampions/WorldChampions'
import RaceWinners from './raceWinners/RaceWinners'
// import {Router,Route,Switch} from 'react-router-dom'
class App extends React.Component {

   
    render(){
        return (
            <div>
                <WorldChampions />
                {/* <RaceWinners /> */}
            </div>
        )
    }
    }



export default App;