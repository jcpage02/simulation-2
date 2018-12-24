import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import House from "./../House/House";
// import Wizard from './../Wizard/Wizard'
import "./Dashboard.css";

class Dashboard extends Component {
  state = {
    dbHouses: []
  };

  componentDidMount = () => {
    axios.get("/api/houses").then(res => {
      this.setState({
        dbHouses: res.data
      });
    });
  };

  addHouse = newHouse => {
    const newState = [...this.state.dbHouses];
    newState.push(newHouse);
  };

  render() {
    return (
      <div className="Dashboard">
        <div className="DashHeader">
          <h1>Dashboard</h1>
          <Link to="/wizard" className="Link">
            <h5>Add New Property</h5>
          </Link>
        </div>
        <House
          dbHouses={this.state.dbHouses}
          fnDidMount={this.componentDidMount}
        />
      </div>
    );
  }
}

export default Dashboard;
