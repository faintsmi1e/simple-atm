import moneyState from '../moneyArray'

const moneyReducer = (state = moneyState, action) => {
  switch(action.type) {
    case "GET_MONEY": 
      return {...state, moneyArray: action.payload}



    default: 
      return state
  }
}
export default moneyReducer