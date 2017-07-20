
export const javaController = 'http://localhost:8090/servletsdemo/';
export const jsonServer = 'http://localhost:3000/';

const URL = javaController;

export const fetchAPI = {

  fetchGET : ( controller, inData) => {

      let fetchURl = URL + controller;
      let data = (inData != undefined)? inData :'';

      return fetch(fetchURl, {  
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }        
      }).then((status) => {debugger;
          console.log("API status", status);
           if (status.ok) {
             return status.json();
           }          
//          return status;

      }).catch((error) => {
          console.log("API error", error); 
          return error;
      });

  },

  fetchPOST : ( controller, inData) => {debugger;

      let fetchURl = URL + controller;
      let dataIn = (inData != undefined)? inData :'';
      
      console.log("Inside API dataIn stringify :", JSON.stringify(dataIn));
      
      return fetch(fetchURl, {  
        method: 'POST',
        mode: 'cors',
        headers: {
          'Accept': 'application/json',
          "Content-type": "application/x-www-form-urlencoded; charset=UTF-8" 
        },        
        body: 'data=' + JSON.stringify(dataIn)
        
      }).then((status) => {
          console.log("API status", status);
          if (status.ok) {
              return status.json();
            }  
//          return status;

      }).catch((error) => {
          console.log("API error", error); 
          return error;
      });

  },


  
//  fetchPUT : ( controller, inData) => {
//
//      let fetchURl = URL + controller;
//
//      var data = '';
//      if(inData != undefined){
//          data = inData;
//      }
//    
//      return fetch(fetchURl, {  
//        method: 'PUT',
//        mode: 'cors',
//        headers: {
//          'Accept': 'application/json',
//          'Content-Type': 'application/json',
//        },
//        
//        body: JSON.stringify(data)
//
//      }).then((status) => {
//          console.log("API status", status);
//          return status;
//
//      }).catch((error) => {
//          console.log("API error", error); 
//          return error;
//      });
//
//  }

} 

