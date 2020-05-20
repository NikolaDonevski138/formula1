import React from 'react'
import WorldChampions from './worldChampions/WorldChampions'
import RaceWinners from './raceWinners/RaceWinners'
// import {Router,Route,Switch} from 'react-router-dom'
class App extends React.Component {

    handleClick(e){
        console.log(e.target)
    }
    render(){
        return (
            <div>
                <WorldChampions click={this.handleClick}/>
                {/* <RaceWinners /> */}
            </div>
        )
    }
    }



export default App;