import React,{ Component } from 'react';

class Son extends Component {
	constructor(){
		super();
	}

	handleChangeFather(color){
		if(this.props.onChangeColor){
			this.props.onChangeColor(color)
		}	
	}

	render(){
		return(
			<div>
				<button onClick={() => this.handleChangeFather('red')}>改变父组件颜色</button>
			</div>
			)
	}
}

class Father extends Component {
	constructor(){
		super();
		this.state = {
			bgColor: '#999'
		}
	}

	onChangeColor(color){
		this.setState({
			bgColor:color
		})
	}

	render(){
		return(
			<div style={{background:this.state.bgColor}}>
			<h1>I am father</h1>
				<Son onChangeColor={(color) => { this.onChangeColor(color) }} />
			</div>
			)
	}
}

export default Father;