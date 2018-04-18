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
import ProductSave from 'page/product/index/save';

class ProductRouter extends Component {
  render(){
    return(
      <Switch>
        <Route path="/product/index" component={ProductList} />
        <Route path="/product/save/:pid" component={ProductSave} />
        <Redirect exact from="/product" to='/product/index' />
      </Switch>
      )
  }
}


export default ProductRouter;