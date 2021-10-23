const initialState = {
    balance:9.99,
    name:"veer",
    rowData:[]
}

const setBalance = (state=initialState,action) => {
    switch(action.type) {
        case "SET_BALANCE":
            return {...state,balance:action.balance}
        case "SET_ROW_DATA":
            return {...state,rowData:action.rowdata}
        default:
            return state
    }
}

export default setBalance;