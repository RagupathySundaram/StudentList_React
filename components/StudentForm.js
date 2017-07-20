import React from 'react';
import ReactDOM from 'react-dom';

import {fetchAPI, javaController, jsonServer} from '../api';

export default class StudentForm extends React.Component {

  constructor(props){
    super(props);
    this.state = { studentData: {}, id : '',  message: '' };
  }
  
  componentWillMount(){
	   
	  console.log("Inside componentWillMount :", this.state);
	  
	  let id = this.props.params.id;
	  if(id != undefined){
		  this.setState({ id : id});  
	  }else {
		  this.setState({ studentData: {}, message: '' });
	  }	
  }
  
  componentDidUpdate(){
	  console.log("Inside componentWillMount :", this.state);	    
  }
  
  componentDidMount(){debugger;  
	  let id = this.state.id;
	  let inData = {id:id};	  
	  console.log("Inside componentDidMount :", this.state);
	  console.log("Inside componentDidMount id :", id);
	  
	  if( id != ''){
		  console.log("Inside componentDidMount if");
		  fetchAPI.fetchPOST('GetStudentController', inData )
		    .then((data) => {debugger;
		       console.log("data", data);
		       this.setState({ studentData : data })
		  });
		  
	  }else {
		  console.log("Inside componentDidMount else");
		  this.setState({ studentData: {}, message: '' });
	  }	  
  }
  
 
  saveStudents(actionType) {
	let data = this.state.studentData;	
	console.log("this.state.studentData", JSON.stringify(data));
    console.log("actionType", actionType);    
        
    if (actionType == 'NEW'){
        fetchAPI.fetchPOST('SaveStudentController', data)
          .then((status) => {       
           if (status.ok) {
              status.then((json) => {              
                  this.setState({message: 'SAVED SUCCESSFULLY !!!'});
                });
            }else {
              this.setState({message: 'ERROR WHILE SAVING !!!'});
            }       
        });

    }else if(actionType == 'EDIT'){
        fetchAPI.fetchPOST('SaveStudentController', data)
          .then((status) => {       
           if (status.ok) {
              status.then((json) => {              
                  this.setState({message: 'UPDATED SUCCESSFULLY !!!'});
                });
            }else {
              this.setState({message: 'ERROR WHILE UPDATING'});
            }       
        });
    }
  }

  getValues(){
    let newData = {
//    	id: this.state.id,
        firstName : this.refs.firstName.value,
        lastName : this.refs.lastName.value,
        email : this.refs.email.value
      };

    this.setState({ studentData : newData });
  }

  

  render(){
      console.log("state", this.state);
      console.log("params", this.props.params);
      console.log("id", this.props.params.id);
      // console.log("Router Context", this.context.router);

      let msgClass = (this.state.message != '')? 'show' : 'hide';
      const actionType = ((this.props.params.id != undefined)? 'EDIT': 'NEW');

      return (<div>
              <div className={`alert alert-info  ${msgClass}`}>{this.state.message}</div>
              <fieldset>
                <legend>CRUD Operations Form</legend>
                <div className="studentForm">
                  <p><label>First name:</label>  <input type="text" ref="firstName" onChange={() => this.getValues()} value={this.state.studentData.firstName} /></p>
                  <p><label>Last name:</label>   <input type="text" ref="lastName" onChange={() => this.getValues()} value={this.state.studentData.lastName} /></p>
                  <p><label>Email: </label>     <input type="text" ref="email" onChange={() => this.getValues()} value={this.state.studentData.email} /></p>
                  <button type="submit" onClick={() => this.saveStudents(actionType)} >Save</button>
                </div>
              </fieldset>
              </div>
            )

  }
}

