import React from 'react';


import Home from './components/BuyButtonComponent';
import About from './components/NewComponent';


export default class Main extends React.Component {
	
	constructor(props) {
		super(props);
	  }
	  
	   render() {
	      return (	    		  
	    		  <div>
	    		  <BuyButtonComponent/>
	    		    <NewComponent/>
	    		  </div>
	      )
	   }
}

ReactDOM.render(<Main params={params}/>, document.getElementById('modal'));