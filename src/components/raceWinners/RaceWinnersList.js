import React from 'react'
import {connect} from 'react-redux'
import './style/style.css'
import '../style.css'
import Spinner from '../spinner/index'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleLeft,faCrown } from '@fortawesome/free-solid-svg-icons'
class RaceWinnersList extends React.Component {
   
   renderHelper = () => {
    if(this.props.b !== undefined){    
        const raceInfo = this.props.b.map((data,index) => {
            const raceName = data.raceName;
            const winnerName = data.Results[0].Driver.givenName;
            const winnerSurname = data.Results[0].Driver.familyName;
            const raceDriverId = data.Results[0].Driver.driverId
            const worldChampionId = this.props.v.driverId

             let icon = () => {
                    if(raceDriverId === worldChampionId){
                        return (
                            <div>
                                 <FontAwesomeIcon icon={faCrown} style={{color:'yellow'}}/>
                            </div>
                        )
                    }
             }
            
            if(index%2 === 0) {
               
                
                return (
                    
                    <div key={data.round} class="row bg-color1">
                       <div className="raceInfo-width">
                            <p>Race: {raceName}</p>
                        </div>
                       <div class="winnerRace">
                             <div className="ma">
                                {icon()}
                             </div>
                            <p>Winner: {`${winnerName} ${winnerSurname}`}</p>
                        </div>
                    </div>
                )
            } else {
                return (
                    <div key={data.round} class="row bg-color2">
                       <div className="raceInfo-width">
                            <p className="text">Race: {raceName}</p>
                       </div>
                       <div className="winnerRace">
                        <div className="ma">
                            {icon()}
                        </div>
                       <p className="text">Winner: {`${winnerName} ${winnerSurname}`}</p>
                       </div>
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
                
                <Link to='/' className='link'><FontAwesomeIcon icon={faArrowCircleLeft} color="orange" style={{fontSize:'2rem'}}/></Link>
                <div className="table">
                    {this.renderHelper()}
                </div>
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