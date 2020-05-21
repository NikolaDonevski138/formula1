
import formulaData from '../apis/formulaData'
import {
    FETCH_FORMULA_DATA
} from './types'


export const champion = (year,surname,name) => {
    return {
        type:'DRIVER',
        payload:{
            year:year,
            surname:surname,
            name:name
        }
    }
}


export const fetch_formula_data = () => async dispatch => {
    const response = await formulaData.get()
    const dataMaped = response.data.MRData.StandingsTable.StandingsLists
    dispatch({type:FETCH_FORMULA_DATA,payload:dataMaped})
}

