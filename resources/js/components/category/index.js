import React, { Component } from 'react';
import {BrowserRouter as Router ,Link ,Route} from 'react-router-dom' ;
import Add from './add';
import Listing from './listing';


export default class index extends Component {


render() {


    return (   

           <div>  
               
               <Router>

                  <div>

                      <hr />

                <Link to = "/category" className = "btn btn-warning"> Listing </Link> &nbsp;
                <Link to = "/category/add"  className = "btn btn-primary"> Add</Link>
                 <Route exact path = "/category" component = {Listing} />
                 <Route exact path = "/category/add" component = {Add} />
              

             
                  </div>
               



               </Router>
               
               
               
               
               
                </div>
          
       
    );

}








}




