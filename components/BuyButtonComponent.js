import React from 'react';
import ReactDOM from 'react-dom';

export default class BuyButtonComponent extends React.Component {
	

   render() {
      return (
            <h1>BuyButtonComponent...{this.props.params}</h1>
      )
   }
}


window.buyButtonReact = function(params, element) {debugger;
	  ReactDOM.render(
	    <BuyButtonComponent params={params}/>,
	    document.getElementById(element)
	  );
	}
