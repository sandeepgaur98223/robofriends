import React,{Component} from 'react';

class ErrorBoundary extends Component{
	constructor(props){
		super(props);
		this.state={
			hasError:false
		}

	}

	componentDidCatch(){
		this.setState({hasError:true})
	} 
//the above function will automatically catch if the components to which errorboundary will wrap have errors. 
//That time hasError will update to True
//and then the below code would say "The page is not loading"

	render(){

		if(this.state.hasError)
		{
			return <h1>The page is not loading...</h1>
		}
		return this.props.children

	}

}

export default ErrorBoundary;