import React from 'react';
import Navigation from './Navigation';

export default class Main extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (     
          <div>	     	
            <Navigation />
            <div>{this.props.children}</div>
          </div>
       )
	}
}