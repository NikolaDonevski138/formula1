


export default (state = {}, action) => {
    switch (action.type){
        case 'FETCH_RACE_DATA':
            return {...state,data:action.payload};
        default:
            return state
    }
}
