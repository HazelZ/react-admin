import React,{ Component } from 'react';

class Home extends Component {
	constructor(){
		super();
		this.state = {
			age:18
		}
	}

	handleAdd(){
		this.setState({
			age: this.state.age + 1
		})
	}

	handleDes(){
		this.setState({
			age: this.state.age - 1
		})
	}

	render(){
		return (
			<div>
				<p>I am {this.state.age}岁啦！</p>
				<button onClick={() => { this.handleAdd() }}>加一岁</button>
				<button onClick={() => { this.handleDes() }}>少一岁</button>
			</div>
			)
	}
}

export default Home;