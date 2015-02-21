var React = require("react");
var ListContainer = require('./ListContainer');
var AddList = require('./AddList');


var App = React.createClass({
	getInitialState: function(){
		return {
			lists: []
		}
	},
	addNewList: function(newList) {
		var lists = this.state.lists;
		newList.index = lists.length;
		this.setState({
			lists: lists.concat([newList])
		});
	},
	removeList: function(index) {
		var lists = this.state.lists;
		lists.splice(index, 1);
		this.setState({
			lists: lists
		});
	},
	render: function(){
		var listComponents = this.state.lists.map(function(list, index){
			return (
				<ListContainer title={list.name} key={index} remove={this.removeList} index={index} />
			)
		}.bind(this))
		return (
			<div className='container'>
				<div className='row'>
					<AddList add={this.addNewList} />
					{listComponents}
				</div>
			</div>
		)
	}
})

React.render(<App />, document.getElementById('app'))
