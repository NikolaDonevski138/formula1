import React from 'react'
// import axios from 'axios'
import WorldChampionsList from './WorldChampionsList'

class WorldChampions extends React.Component {
    constructor(props){
        super(props)
    this.state = {
        data:[]
    }
    }

    componentDidMount(){
        fetch(`http://ergast.com/api/f1/driverstandings/1.json?limit=15&offset=55`)
        .then(resp => resp.json())
        .then(respp => this.setState({data:respp.MRData.StandingsTable.StandingsLists}))
        
    }

    //console.log(respp.MRData.StandingsTable.StandingsList)
    //respp.MRData.StandingsTable.StandingsList.map(item => item.season)

    // renderList = () =>{
    //     return(
    //    <div>
    //         {this.state.data}
    //     </div>
    //    )
    // }

    render(){
        console.log(this.props.click,'jebote')
        console.log(this.state,'stejtot')
        return(
            <div>
            <WorldChampionsList data={this.state.data} x={this.props.click}/>
            </div>
        )
    }

}

export default WorldChampions