import React,{ Component } from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, browserHistory, Router, Switch, Route, Link, Redirect} from "react-router-dom";

// import 'font-awesome/css/font-awesome.min.css';
import Home from 'page/home/index';
import Layout from 'component/layout/index';

class App extends Component {
	render(){
		return(
				<BrowserRouter history={browserHistory}>
					<Layout>
						<Switch>
							<Route exact path="/" component={Home} />
							<Route path="/product" component={Home} />
							<Route path="/product.category" component={Home} />
							<Route path="/order" component={Home} />
							<Route path="/user" component={Home} />
						</Switch>
					</Layout>
				</BrowserRouter>
			)
	}
}

ReactDOM.render(
	<App />
	,document.getElementById('app')
)