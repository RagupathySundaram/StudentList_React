import React from 'react';
import ReactDOM from 'react-dom';

import {fetchAPI, javaController, jsonServer} from '../api';
import { Link,RouteHandler } from 'react-router';

// import * as Client from 'node-rest-client';
// import axios from 'axios';
// import rest from 'rest';

export default class StudentList extends React.Component {

  constructor(props){
    super(props);
    this.state = { StudentList: [] };
  }

  componentWillMount(){

    fetchAPI.fetchGET('GetStudentListController')
    .then((data) => {debugger;
       console.log("data", data);
       this.setState({ StudentList : data })
    });
     
  }

  render() {

      console.log("State", this.state);

      const htmlThead = (<tr><th>ID</th><th>Name</th><th>Email</th><th>Actions</th></tr>);

//      const StudentList = this.state.StudentList;

       let StudentList = this.state.StudentList.map((item ,i) => {
         let id = ((item.id != undefined)? item.id: i);
         return(<tr key={i} >
               <td>{item.id}</td>
               <td>{item.firstName}, {item.lastName}</td>
               <td>{item.email}</td>             
               <td><Link to={`/form/${id}`}>Edit</Link> || <Link to='/list'>Delete</Link></td>
           </tr>);
       });

    return (
      <table className="studentListTable">
        <thead>{htmlThead}</thead>
        <tbody>{StudentList}</tbody>
      </table>
    )
  }    
      
}

