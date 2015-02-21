var React = require('react');

var SelectColor = React.createClass({
	getInitialState: function(){
		return {
			colors: [
				'rgb(255, 172, 236)',
				'rgb(236, 240, 241)',
				'rgb(52, 152, 219)',
				'rgb(231, 209, 113)',
				'rgb(122, 231, 124)'
			],
			selectedColor: 'rgb(255, 172, 236)'
		}
	},
	componentDidMount: function(){
		this.props.setColor(this.state.selectedColor);
	},
	changeColor: function(index) {
		var colors = this.state.colors;
		var newColor = colors[index]
		this.props.setColor(newColor)
		this.setState({
			colors: colors,
			selectedColor: newColor
		})
	},
	render: function() {
		var styles = {
			container: {
				display: 'flex',
				justifyContent: 'space-around',
				width: "80%",
				margin: "0 auto"
			},
			selectBox: {
				height: 50, 
				width:10, 
				background: this.state.selectedColor
			}
		}
		var boxes = this.state.colors.map(function(color, index){
			return (
				<div 
					style={{background: color, height: 50, width: 110}} 
					key={index}
					onClick={this.changeColor.bind(null, index)}></div>
			)
		}.bind(this))

		return (
			<div>
				<div>
					The selected color is: 
					<div 
						style={styles.selectBox}>
					</div> 
				</div>
				
				<div style={styles.container} >
					{boxes}
				</div>
			</div>
		)
	}

});

module.exports = SelectColor;