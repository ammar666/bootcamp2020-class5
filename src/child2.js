import React, { useReducer } from 'react';
import counterReducer from './counterReducer';

const Child2 = () => {

    let [state , dispatch] = useReducer(counterReducer , 1)
    //console.log(state)
    return(

        <div>
            <h2>This is Reducer</h2>
            <h3>Value of Reducer is: {state}</h3>
            <button onClick = {()=>{dispatch('INCREMENT')}}>Increament Reducer</button>


        </div>
    )
}
export default Child2;