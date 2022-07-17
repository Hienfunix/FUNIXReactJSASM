import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
// import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';
import StaffList from './components/StaffListComponent';
// import { DISHES } from './shared/dishes';
import { STAFFS } from './shared/staffs';
import dateFormat from "dateformat";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {staffs:STAFFS}
  }
  render(){
    return (
      <div className="App" id ="root">
        <Navbar dark color="primary"> 
          <div className="container">
            <NavbarBrand href="/"> Ứng dụng quản lý nhân sự v1.0</NavbarBrand>
          </div>
        </Navbar>
         <StaffList staffs={this.state.staffs} />
      </div>
    );
  }
}
// function App() {
  
// }

export default App;
