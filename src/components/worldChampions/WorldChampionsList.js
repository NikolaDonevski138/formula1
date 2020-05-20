import React from 'react'
import './styles/styles.css'
import './styles/worldChampionsList-style.css'

const WorldChampionsList = ({data,x}) => {
    console.log(data,'propsot')
    const championsInfo = data.map(item => {
        const season = item.season;
        
        const {familyName,givenName} = item.DriverStandings[0].Driver
        const {points,wins} = item.DriverStandings[0]
        const car = item.DriverStandings[0].Constructors[0].name
        
        // console.log(DriverName , 'DriverName')
        console.log(familyName)
        return(
            <div onClick={x} className="champion-info grow">
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


    return(
        <div className="cards">
            {championsInfo}
        </div>
    )
}

export default WorldChampionsList
