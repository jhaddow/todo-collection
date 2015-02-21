var React = require('react');
var SelectColor = require('./SelectColor');
var AddList = React.createClass({
	getInitialState: function() {
		return {
			listName: ''
		}
	},
	handleChange: function(e) {
		this.setState({
			listName: e.target.value
		})
	},
	handleSubmit: function(e) {
		this.props.add({name: this.state.listName});
		this.setState({
			listName: ''
		});
	},
	render: function() {
		return (
			<div>
				<h3 className='text-center'>Create New List</h3>
				<input 
					type='text' 
					className='form-control' 
					value={this.state.listName} 
					onChange={this.handleChange} />
				<button 
					className='btn btn-primary'
					onClick={this.handleSubmit}>
					Submit
				</button>
				<SelectColor />
			</div>
		)
	}

});

module.exports = AddList;