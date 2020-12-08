import React from 'react'
import  { observer } from 'mobx-react-lite'
import Store from './StoreCounter'
import '../styles/Counter.css'

const store = new Store();

const Counter = observer(() => 
    <div>
        <br/><br/>
        <h1 className='body'>{store.counter}</h1>
        <button className='buttonUpdate' onClick={store.decrementCounter}>-</button>
        <button className='buttonUpdate' onClick={store.incrementCounter}>+</button>
    </div>
);

export default Counter;