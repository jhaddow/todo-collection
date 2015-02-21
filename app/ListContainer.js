var React = require('react');
var AddItem = require('./AddItem');
var List = require('./List');

var ListContainer = React.createClass({
	getInitialState: function() {
		return {
			list: []
		}
	},
	handleAddItem: function(item) {
		this.setState({
			list: this.state.list.concat([item])
		})
	},
	handleRemoveItem: function(index) {
		var newList = this.state.list;
		newList.splice(index, 1);
		this.setState({
			list: newList
		})
	},
	render: function() {
		return (
			
				<div className="col-sm-6 col-md-offset-3">
					<h3 className='text-center'> Todo List </h3>
					<AddItem add={this.handleAddItem} />
					<List remove={this.handleRemoveItem} items={this.state.list} />
				</div>
				
		)
	}

})

module.exports = ListContainer;