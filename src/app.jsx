import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import { 
	BrowserRouter as Router, 
	Route, 
	browserHistory, 
	Switch, 
	Link, 
	Redirect
} from "react-router-dom";

import Layout from 'component/layout/index';
import Home from 'page/home/index';
import ProductRouter from 'page/product/router';
import Login from 'page/login/index';
import ErrorPage from 'page/error/index';
import UserList from 'page/user/index';
import OrderList from 'page/order/index';
import OrderDetail from 'page/order/detail/index';


class App extends Component {
	render(){
			let LayoutRouter = (
				<Layout>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/product" component={ProductRouter} />
						<Route path="/product-category" component={ProductRouter} />
						<Route path="/order/index" component={OrderList} />
						<Route path="/order/detail/:orderNumber" component={OrderDetail} />
						<Route path="/user/index" component={UserList} />
						<Redirect exact from="/user" to='/user/index'/>
						<Redirect exact from="/order" to='/order/index'/>
						<Route component={ErrorPage} />
					</Switch>
				</Layout>
				)

		return(
				<Router history={browserHistory}>
					<Switch>
						<Route path="/login" component={Login} />
						<Route path="/" render={ props => LayoutRouter } />
					</Switch>
				</Router>
			)
	}
}

ReactDOM.render(
	<App />
	,document.getElementById('app')
)