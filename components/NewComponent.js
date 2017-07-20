import React from 'react';
import ReactDOM from 'react-dom';

import Tree from 'react-tree-graph';

export default class NewComponent extends React.Component {
	
	constructor(props) {
		super(props);
		this.state= {data: JSON.parse(sessionStorage.getItem('data'))}
	  }
	  
	   render() {		   
		   console.log("Value", data);
		   const data = this.state.data;
		   
	      return (	    		  
	    		  <div>
	    		  	<h1>react-tree-graph</h1>
	    		  	<Tree height={400} width={1200}
	    		  			data={data}
	    		  	/>
	    		  </div>
	      )
	   }
}

ReactDOM.render(<NewComponent />, document.getElementById('wrapper'));




