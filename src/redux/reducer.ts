import { GET_DATA } from "./actions"



let initState = {
  weathers: []
}

type Action = {
    type:string,
    payload:object[]
}


const store = (state = initState,action:Action)=>{
    switch (action.type) {
        case GET_DATA:
          return action.payload
        default:
            return state
    }

}

export default store

