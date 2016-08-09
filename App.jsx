import React from 'react';

class App extends React.Component {

	constructor(){
		super();
		this.state = {
			randomData : {
				name : 77,mark : 21,age:21
			},
			data : [
			{
				name : "mohan",mark : "98" , age : "22"
			},
			{
				name : "arun",mark : "100" , age : "24"

			},
			{
				name : "aathi",mark : "98" , age : "18"

			}
			]
		}
		this.updateState = this.updateState.bind(this);
		this.MakeGreenRow = this.MakeGreenRow.bind(this);
	}
	updateState(){
		var randomName = this.state.randomData.name;
		var randomMark = this.state.randomData.mark;
		var randomAge = this.state.randomData.age;
		var person = {name : randomName+1 , mark : randomMark+5 , age : randomAge+1};
		var dataState =  this.state.data;
		dataState.push(person);
		this.setState({data:dataState});
		var randomPerson = {name : randomName+1 , mark :randomMark+1 , age : randomAge+1};
		this.setState({randomData : randomPerson});	
	}
	MakeGreenRow(e){
	e.target.style.color = "green"   	
	}
   render() {

   	var myStyle = {color:"green" }
      return (
      	<div>
        <Header header={this.props.header}/>
        <Content/>
        <Footer footer={this.props.footer}/>
        <StudentTable data={this.state.data} MakeGreenRow={this.MakeGreenRow}/>
        <input type = "button" onClick= {this.updateState} value="Add New Person"/>
        </div>
      );
   }
}
class Header extends React.Component {
	render(){
		return (
				<h1> {this.props.header}</h1>
			);
	}
}

class Content extends React.Component {
	render(){
		return (
				<p>THis is the content</p>
			);
	}
}
class Footer extends React.Component {
	render(){
		return (
			<h2>{this.props.footer}</h2>
			);
	}
}
class StudentTable extends React.Component {

	render(){
		return (
			<div>
				<table>
				<tbody>
					{this.props.data.map((person,i) => {return <StudentTableRow key={i} rowData={person} ref = {person+i} MakeGreenRow = {this.props.MakeGreenRow}/>})}
				</tbody>
				</table>
			</div>
			);
	}
}
class StudentTableRow extends React.Component{

	render(){
		return(
				<tr onClick = {this.props.MakeGreenRow}><td>{this.props.rowData.name}</td><td>{this.props.rowData.marks}</td><td>{this.props.rowData.age}</td></tr>
			);
	}
}

App.propTypes = {
	header : React.PropTypes.string
	,footer : React.PropTypes.string,
	rowData : React.PropTypes.object
}
App.defaultProps = {
	header: "this is state Header",
	footer:"this is state footer"
}
export default App;