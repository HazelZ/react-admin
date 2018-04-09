import React,{ Component } from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, browserHistory, Router, Switch, Route, Link, Redirect} from "react-router-dom";

// import 'font-awesome/css/font-awesome.min.css';
import Home from 'page/home/Home';

class App extends Component {
	render(){
		return(
				<BrowserRouter history={browserHistory}>
					<div>
						<Route exact path="/" component={Home} />
						<Redirect from="*" to="/" />
					</div>
				</BrowserRouter>
			)
	}
}

ReactDOM.render(
	<App />
	,document.getElementById('app')
)