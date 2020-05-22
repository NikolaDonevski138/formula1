import React from 'react'
import './styles/styles.css'
import './styles/worldChampionsList-style.css'
import {connect} from 'react-redux'
import Spinner from '../spinner/index'
import {champion} from '../../actions/index'
import { Link } from 'react-router-dom';
class WorldChampionsList extends React.Component {

    
    
    
    renderHelper = () => {

       
        if(this.props.z !== undefined){
            
            const championsInfo = this.props.z.map(item => {
                const season = item.season;
                const {familyName,givenName} = item.DriverStandings[0].Driver
                const {points,wins} = item.DriverStandings[0]
                const car = item.DriverStandings[0].Constructors[0].name
                const driverId=item.DriverStandings[0].Driver.driverId;
                
                // console.log(DriverName , 'DriverName')
                console.log(familyName)
                return(
                    <Link to={`/race/${season}`} className='link'>
          
                        <div onClick={() => this.props.champion(driverId,season,familyName,givenName)} className="champion-info grow">
                        <div>
                            <h1>{season}</h1>
                            <i></i>
                        </div>
                        <div className="driver-info">
                            <h1 className="winner">Winner: {givenName} {familyName}</h1>
                            <p className="points">Points:{points} Wins:{wins}</p>
                            <div class="car-info">
                                <img className="img" src="./formula.png"/>
                                <p className="driving-car ml">{car}</p>
                            </div>
                        </div>

                        
                         </div>
                    </Link>
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

export default connect(mapStateToProps,{champion})(WorldChampionsList)
