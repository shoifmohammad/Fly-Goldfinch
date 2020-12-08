import React, { Component } from 'react';
import Store from './StoreCardList';
import { observer } from 'mobx-react';

const store = new Store();

class CardList extends Component {   
    componentDidMount(){
        store.process()
    }

    render(){

        return(
            <div>
                {store.getList}
            </div>        
        )
    }

}

export default observer(CardList);