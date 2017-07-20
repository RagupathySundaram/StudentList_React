import React from 'react';

export default class ProductListComponent  extends React.Component {
   render() {
      return (         
    		  <ul className="product-list">
    	        {this.props.products.map(function(product) {
    	          return <ProductComponent 
    	              key={product.id} 
    	              product={product} />
    	        })}
    	      </ul>
      )
   }
}