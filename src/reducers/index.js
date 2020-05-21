import {combineReducers} from 'redux'
import formulaChampions from './formulaChampions'
import worldChampionInfo from './worldChampionInfo'

export default combineReducers({
    
    worldChampions:formulaChampions,
    worldChampionInfo:worldChampionInfo

})