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
							<Redirect from="*" to="/" />
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