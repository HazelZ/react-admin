import React,{ Component } from 'react';
import { 
  BrowserRouter as Router, 
  Route, 
  browserHistory, 
  Switch, 
  Link, 
  Redirect
} from "react-router-dom";

import ProductList from 'page/product/index/index';

class RroductRouter extends Component {
  render(){
    return(
      <Switch>
        <Route path="/product/index" component={ProductList} />
        <Redirect exact from="/product" to='/product/index' />
      </Switch>
      )
  }
}


export default RroductRouter;