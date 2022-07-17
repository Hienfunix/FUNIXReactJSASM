import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
// import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';
import Menu from './components/MenuComponent';
import { DISHES } from './shared/dishes';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {dishes:DISHES}
  }
  render(){
    return (
      <div className="App" id ="root">
        <Navbar dark color="primary"> 
          <div className="container">
            <NavbarBrand href="/"> Hello hihi</NavbarBrand>
          </div>
        </Navbar>
         <Menu dishes={this.state.dishes} />
      </div>
    );
  }
}
// function App() {
  
// }

export default App;
