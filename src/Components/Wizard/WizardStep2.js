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
        <Link to="/wizard">
          <button> Previous </button>
        </Link>
        
        <h4>Image URL</h4>
        <input onChange={e => this.handleChange('img' ,e.target.value)} placeholder="Image URL" type="text" />

        <Link to="/wizard/3">
          <button> Next Step </button>
        </Link>
      </div>
    );
  }
}

export default Wizard;
