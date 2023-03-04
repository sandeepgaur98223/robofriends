import React,{Component} from 'react';
import Card from './Card';

class CardList extends Component{


	render(){

//		if(true)
//{
//	throw new Error('ohh no!!');
//} this was to test ErrorBoundary


		return(
			<div>
				{
					this.props.robots.map((user,i)=>{
						return (
								<Card 
									key={i} 
									id={this.props.robots[i].id} 
									name={this.props.robots[i].name} 
									email={this.props.robots[i].email} 
									/>
								);
					})

				}
			</div>
			);
	}

}

export default CardList;