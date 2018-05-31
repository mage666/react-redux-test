import React from 'react'

class CounterDisplay extends React.Component
{


	constructor()
	{
		super()
		this.value = "Value goes here";
	}
	render() {
		return (
			<div>{this.props.counter}</div>
		)
	}
}

export default CounterDisplay;