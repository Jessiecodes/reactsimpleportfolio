import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Navigation from './Navigation';
import Header from './Header';
import Services from './Services';
import Footer from './Footer';


class App extends Component {
   render() {
     return (
       <div>
          <Navigation LogoTitle="React Portfolio" />
          <Header title="Stylish Portfolio" button="Find out More" />
          <Services />
          <Footer />

      </div>
     );
   }
}

ReactDOM.render(<App/>, document.getElementById('root'));