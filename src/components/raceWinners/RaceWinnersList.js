import React from 'react'
import {connect} from 'react-redux'
import './style/style.css'
import Spinner from '../spinner/index'
import {Link} from 'react-router-dom'
class RaceWinnersList extends React.Component {
   
   renderHelper = () => {
    if(this.props.b !== undefined){    
        const raceInfo = this.props.b.map(data => {
            const raceName = data.raceName;
            const winnerName = data.Results[0].Driver.givenName;
            const winnerSurname = data.Results[0].Driver.familyName;
            const raceDriverId = data.Results[0].Driver.driverId
            const worldChampionId = this.props.v.driverId

            if(raceDriverId === worldChampionId) {
                return (
                    <div key={data.round} class="row bg-color">
                       <p>Race: {raceName}</p>
                       <p>Winner: {`${winnerName} ${winnerSurname}`}</p>
                    </div>
                )
            } else {
                return (
                    <div key={data.round} class="row">
                       <p>Race: {raceName}</p>
                       <p>Winner: {`${winnerName} ${winnerSurname}`}</p>
                    </div>
                )
            }
            
         
            
        })
        return raceInfo
   } else {
       return <Spinner />
   }
}
   
   
    render(){
       
        return(<div>
                <Link to='/'>Back</Link>
                {this.renderHelper()}
            </div>)
    }
}



const mapStateToProps = (state) => {
    return {
        b:state.raceInfo.data,
        v:state.worldChampionInfo.data
    }
}


export default connect(mapStateToProps)(RaceWinnersList);