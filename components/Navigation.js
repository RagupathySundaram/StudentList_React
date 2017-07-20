import React from 'react';
import { Link,RouteHandler } from 'react-router';

export default class Navigation extends React.Component {
   render() {
      return (
         <div>
              <Link to='/list'>List</Link> | 
              <Link to='/form'>Form</Link> | 
              <Link to='/home'>Home</Link> |
              <Link to='/about'>About</Link> | 
              <Link to='/contact'>Contact</Link>
            </div>
      )
   }
}