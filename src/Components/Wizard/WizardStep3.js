import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'

class Wizard extends Component {
  state = {
    img: ''
  };

  handleChange = (prop, e) => {
    this.setState({
        [prop]: e
    })
  };

  render() {
    return (
      <div className="Wizard">
      <Link to="/">
          <button> Cancel </button>
        </Link>
        <Link to="/wizard/2">
          <button> Previous </button>
        </Link>
        <h4>Mortgage</h4>
        <input onChange={e => this.handleChange('mortgage' ,e.target.value)} placeholder="Mortage" type="text" />
        <h4>Rent</h4>
        <input onChange={e => this.handleChange('rent' ,e.target.value)} placeholder="Rent" type="text" />
        <Link to="/">
          <button> Complete </button>
        </Link>
      </div>
    );
  }
}

export default Wizard;



       