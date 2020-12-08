import React from 'react';
import Store from './StoreTimer';
import { observer } from 'mobx-react-lite'
import '../styles/align.css'

const store = new Store();

setInterval(() => store.tick(),
  1000
);

const Timer = observer(() => 
  <div>
    <br/><br/><br/>
    <p className="App-clock">
      {store.time}
    </p>
  </div>
);

export default Timer