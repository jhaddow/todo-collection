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

		var styles = {
			container: {
				border: "1px solid rgb(208, 208, 208)",
				marginTop: 10,
				marginBottom: 10,
				borderRadius: 5,
				background: "green"
			},
			removeList: {
				fontSize: 20,
				float: "left",
				position: "absolute",
				top: 12,
				left: 6,
				cursor: "pointer",
				color: "rgb(222, 79, 79)"
			},
		};
		return (			
				<div className="col-sm-6 col-md-offset-3">
					<div className='col-sm-12' style={styles.container} >
						<span className='glyphicon glyphicon-remove' style={styles.removeList} onClick={this.props.remove.bind(null, this.props.index)}/>
						<h3 className='text-center'> {this.props.title} </h3>
						<AddItem add={this.handleAddItem} />
						<List remove={this.handleRemoveItem} items={this.state.list} />
					</div>
				</div>				
		)
	}

})

module.exports = ListContainer;