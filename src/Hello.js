import React from 'react';
import './Hello.css';

class Hello extends  React.Component{

render(){
	return(
		<div className='f1 tc'>
		<h1>hello from Hello1</h1>
		<p>Welcome to React!!!</p>
		{this.props.greeting}
		</div>

		);
}	
}

export default Hello;