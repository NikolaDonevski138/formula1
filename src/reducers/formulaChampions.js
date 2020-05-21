import { FETCH_FORMULA_DATA } from '../actions/types'


export default (state = {}, action) => {
    switch (action.type){
        case FETCH_FORMULA_DATA:
            return {...state,data:action.payload};
        default:
            return state
    }
}


//.MRData.StandingsTable.StandingsLists

