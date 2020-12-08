import React, { Component } from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Page4 from './pages/Page4';

class MainRouter extends Component {
    render() { 
        return ( 
            <Switch>
            	<Redirect exact from="/" to="/home" />
                <Route path='/home' exact component={Page1} />
                <Route path='/time' exact component={Page2} />
                <Route path='/data' exact component={Page3}/>
                <Route path='/currency' exact component={Page4}/>
            </Switch>
        )
    }
}
 
export default MainRouter;