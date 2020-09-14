import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './header';
import Footer from './footer';
import Home from './home';



export default class Index extends Component {


render() {


    return (
        
        <div className="container">
           
           <Header />
           

            <Footer />
        </div>
    );

}








}



if (document.getElementById('app')) {
    ReactDOM.render(<Index />, document.getElementById('app'));
}
