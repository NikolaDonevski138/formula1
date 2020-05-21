import React from 'react'
import './styles/styles.css'
import './styles/worldChampionsList-style.css'
import {connect} from 'react-redux'
import Spinner from '../spinner/index'


class WorldChampionsList extends React.Component {

    
    
    
    renderHelper = () => {

       
        if(this.props.z !== undefined){
            
            const championsInfo = this.props.z.map(item => {
                const season = item.season;
                const {familyName,givenName} = item.DriverStandings[0].Driver
                const {points,wins} = item.DriverStandings[0]
                const car = item.DriverStandings[0].Constructors[0].name
                
                // console.log(DriverName , 'DriverName')
                console.log(familyName)
                return(
                    <div className="champion-info grow">
                        <div>
                            <h1>{season}</h1>
                            <i></i>
                        </div>
                        <div className="driver-info">
                            <h1 className="winner">Winner: {givenName} {familyName}</h1>
                            <p className="points">Points:{points} Wins:{wins}</p>
                            <img src="formula.png"/>
                            <p className="driving-car">Driving Car:{car}</p>
                        </div>

                        
                    </div>
                        )
                        })
                    return championsInfo;
        } else {
            return(
            <div className="spinner">
                
                 <Spinner /> 
            </div>
            )
        }
        
    
    }
    render(){
        
        return(
            <div className="cards">
                {this.renderHelper()}
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
     z:state.worldChampions.data
    }
}

export default connect(mapStateToProps)(WorldChampionsList)
