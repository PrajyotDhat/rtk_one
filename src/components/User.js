import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function User() {

    const { name, age, status } = useSelector((state) => {
        // console.log(state)
        return state
    })
     const dispatch= useDispatch()
    const updateAge=(age)=>{
       dispatch({type:'UPDATE_AGE',payload:age})
    }

    const updateName=(name)=>{
        dispatch({type:'UPDATE_NAME',payload:name})
    }
    return (
        <div>
           <h2>I am {name}</h2>
           <h2>age is {age}</h2>
           <h2>status is {status}</h2>
         <button onClick={()=>updateAge(40)}>Update</button>
         <button onClick={()=>updateName("Redux Toolkit")}>Change</button>
        </div>
    )
}

export default User
