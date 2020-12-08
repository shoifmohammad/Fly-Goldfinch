import React, { Component } from 'react';
import { observer } from 'mobx-react'
import Store from './StoreConverter';
import '../styles/align.css'

const store = new Store();

class Converter extends Component {

    render() { 

        const temp=store.arr.map(curr=>curr.currency);
        return ( 
            <center>
                <div>
                    <select style={{'margin': '30px'}} value={store.from} onChange={(e)=>store.firstChange(e)}>
                        {temp.map((curr,i)=><option key={i} value={curr}>{curr}</option>)}
                    </select>
                    <select style={{'margin': '30px'}} value={store.to} onChange={(e)=>store.secondChange(e)}>
                        {temp.map((curr,i)=><option key={i} value={curr}>{curr}</option>)}
                    </select>
                </div>
                <input onChange={(e)=>store.getValue(e)} value={store.val} type="number"/>
                {store.result<=0 ? null : <div><br/><p className="alert alert-primary">{store.result}</p></div> }
                <br/><br/>
                <button className='convertButton' onClick={(e)=>store.clickHandler(e)}>Convert</button>
            </center>
         );
    }
}
 
export default observer(Converter);

