import React from 'react'
import {fetch_race_data} from '../../actions/index'
import {connect} from 'react-redux'
import RaceWinnersList from './RaceWinnersList'

class RaceWinners extends React.Component {

    componentDidMount(){
        this.props.fetch_race_data()
    }

    render(){
     
        return(
            <div>
                <RaceWinnersList />
            </div>
            )
    }
}



export default connect(null,{fetch_race_data})(RaceWinners)