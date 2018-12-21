import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'

class Wizard extends Component {
  state = {
    name: '',
    address: '',
    city: '',
    state: '',
    zipcode: 0,
    img: '',
    mortgage: '',
    rent: ''
  };

  handleChange = (prop, e) => {
    this.setState({
        [prop]: e
    })
  };

  handleAdd = () => {
    const {name, address, city, state, zip, img, mortgage, rent} = this.state
    axios.post('/api/add', {name, address, city, state, zip, img, mortgage, rent})
    .then(res => {
      
    })
  }

  render() {
    return (
      <div className="Wizard">
        <Link to="/">
          <button> Cancel </button>
        </Link>
        <input onChange={e => this.handleChange('name' ,e.target.value)} placeholder="Name" type="text" />
        <input onChange={e => this.handleChange('address' ,e.target.value)} placeholder="Address" type="text" />
        <input onChange={e => this.handleChange('city' ,e.target.value)} placeholder="City" type="text" />
        <input onChange={e => this.handleChange('state' ,e.target.value)} placeholder="State" type="text" />
        <input onChange={e => this.handleChange('zipcode' ,e.target.value)} placeholder="Zip Code" type="text" />
        <Link to="/wizard/2">
          <button onClick={() => this.handleAdd()}> Next </button>
        </Link>
      </div>
    );
  }
}

export default Wizard;
