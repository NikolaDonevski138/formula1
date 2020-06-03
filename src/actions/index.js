import formulaData from "../apis/formulaData";
import raceData from "../apis/raceData";
import { actionTypes } from "./types";

export const champion = (driverId, year, surname, name) => {
  return {
    type: actionTypes.DRIVER,
    payload: {
      year: year,
      surname: surname,
      name: name,
      driverId: driverId,
    },
  };
};

export const fetch_formula_data = () => async dispatch => {
  const response = await formulaData.get();
  const dataMaped = response.data.MRData.StandingsTable.StandingsLists;
  dispatch({ type: actionTypes.FETCH_FORMULA_DATA, payload: dataMaped });
};

export const fetch_race_data = () => async (dispatch, getState) => {
  const response = await raceData(getState().worldChampionInfo.data.year).get();
  const dataMaped = response.data.MRData.RaceTable.Races;
  dispatch({ type: actionTypes.FETCH_RACE_DATA, payload: dataMaped });
};
