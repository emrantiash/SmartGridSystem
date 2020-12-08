import Network from '../network/Network';
import axios from 'axios';

  export function get(end,header) 
  {
       let options = {
            tail : end[1],
            headers : {
              'Authorization' :  header
            } 
            
      }
      console.log(Network.network +'/' + end[0] ,options)
       return  axios.post(Network.network +'/' + end[0] ,options)
  }

  export  function getMethodById(end,data,header) 
  {    
        let options = {
              data : data,
              tail : end[1],
              headers : {
                'Authorization' :  header
              } 
        }
        console.log(Network.network +'/' + end[0] ,options)
         return  axios.post(Network.network +'/' + end[0] ,options)
  }

  export  function post(end,data,header) {
     let options ={
      data : data,
      tail : end[1] ,
      headers : {
        'Content-Type': 'application/json',
        'Authorization' :  header
      } 
    }
    console.log(Network.network +'/' + end[0] ,options)
    return  axios.post(Network.network +'/' + end[0] ,options )
    }

    

    export  function singlePutMethod(end,data,header) {
      let options ={
        data : data,
        tail : end[1],
        id : 0,
        headers : {
          'Content-Type': 'application/json',
          'Authorization' :  header
        } 
      }
      return  axios.put(Network.network +'/' + end[0] ,options )
    }


 

