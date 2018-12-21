import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import House from './../House/House'
import Wizard from './../Wizard/Wizard'

class Dashboard extends Component {
  state = {
      dbHouses: []
  };

  componentDidMount = () => {
    axios.get('/api/houses')
    .then(res => {
      this.setState({
        dbHouses: res.data
      }) 
    })
  }


  addHouse = (newHouse) => {
    const newState = [...this.state.dbHouses]
    newState.push(newHouse)
  }

  render() {

    
    return (
      <div className="Dashboard">
        Here is the Dashboard
        <Link to="/wizard">
          <button> Add New Property </button>
        </Link>
        <House dbHouses={this.state.dbHouses} fnDidMount={this.componentDidMount}/>
      </div>
    );
  }
}

export default Dashboard;
