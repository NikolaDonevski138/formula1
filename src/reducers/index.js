import {combineReducers} from 'redux'
import formulaChampions from './formulaChampions'
import worldChampionInfo from './worldChampionInfo'
import raceInfo from './raceInfo'

export default combineReducers({
    
    worldChampions:formulaChampions,
    worldChampionInfo:worldChampionInfo,
    raceInfo:raceInfo

})