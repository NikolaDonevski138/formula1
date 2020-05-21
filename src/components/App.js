import React from 'react'
import WorldChampions from './worldChampions/WorldChampions'
import RaceWinners from './raceWinners/RaceWinners'
import {Router,Route,Switch} from 'react-router-dom'
import history from '../history'
class App extends React.Component {

   
    render(){
        return (
            <div>
                <Router history={history}>
                  <Switch>
                     <Route path="/" exact component={WorldChampions} />
                     <Route path="/race/:id" exact component={RaceWinners} />
                  </Switch>
                 </Router>
            </div>
        )
    }
    }



export default App;