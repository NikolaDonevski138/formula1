
import formulaData from '../apis/formulaData'
import {
    FETCH_FORMULA_DATA
} from './types'

 

export const fetch_formula_data = () => async dispatch => {
    const response = await formulaData.get()
    const dataMaped = response.data.MRData.StandingsTable.StandingsLists
    dispatch({type:FETCH_FORMULA_DATA,payload:dataMaped})
}