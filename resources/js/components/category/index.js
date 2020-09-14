import React, { Component } from 'react';
import {BrowserRouter as Router ,Link ,Route} from 'react-router-dom' ;
import Add from './add';
import Listing from './listing';


export default class index extends Component {


render() {


    return (   

           <div>  
               
               <Router>


                <Link to = "/category"> Listing </Link>
                <Link to = " /category/add"> Add</Link>
                 <Route exact path = "/category" component = {Listing} />
                 <Route exact path = "/category/add" component = {Add} />
             



               </Router>
               
               
               
               
               
                </div>
          
       
    );

}








}




