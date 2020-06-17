import React from 'react';
import Child from './child';
import './App.css';
import Child2 from './child2';

function parent() {

    return (
        <div >
             <h4>My name is Ammar</h4>
             <Child />
             <Child2 />
        </div>
    );
}
export default parent;