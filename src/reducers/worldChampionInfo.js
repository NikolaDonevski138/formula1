

export default (state = {},action) => {
    switch(action.type){
        case 'DRIVER':
        return {...state,data:action.payload}
    default:
        return state
    }
}