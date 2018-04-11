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

import Home from 'page/home/index';
import Login from 'page/login/index';
import ErrorPage from 'page/error/index';
import Layout from 'component/layout/index';

class App extends Component {
	render(){
		return(
				<Router history={browserHistory}>
					<Switch>
						<Route path="/login" component={Login} />
						<Route path="/" render={ props => (
							<Layout>
								<Switch>
									<Route exact path="/" component={Home} />
									<Route path="/product" component={Home} />
									<Route path="/product-category" component={Home} />
									<Route path="/order" component={Home} />
									<Route path="/user" component={Home} />
									<Route component={ErrorPage} />
								</Switch>
							</Layout>
						)} />
					</Switch>
				</Router>
			)
	}
}

ReactDOM.render(
	<App />
	,document.getElementById('app')
)