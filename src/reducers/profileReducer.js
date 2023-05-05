import { createReducer } from "@reduxjs/toolkit"

const initialState = {
    name: "React-Redux",
    age: 9,
    status: "programming"
}

// export default (state=initialState, action)=> {
//     if (action.type ==='UPDATE_AGE') {
//         return {
//             ...state,
//             age: action.payload
//         }
//     }
//     return state
// }

export default createReducer(initialState,(builder)=>{
   builder.addCase('UPDATE_AGE',(state,action)=>{
         state.age=action.payload
         
   })
   builder.addCase('UPDATE_NAME',(state,action)=>{
    state.name=action.payload
    
})
})