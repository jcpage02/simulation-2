import React, { Component } from "react";
import axios from 'axios'
import './House.css'

class House extends Component {

handleDelete = (id) => {
    console.log(id)
    axios.delete(`/api/delete/${id}`)
    .then(res => {
        this.props.fnDidMount()
        // res.status(200).send()
    })
}

  render() {
      
      let houses = this.props.dbHouses.map(house => {
        const {id, name, address, city, state, zip, img, mortgage, rent} = house
        return <div key={id}>
            <h5>Property Name: </h5>
            {name}
            <h5>Address: </h5>
            {address}
            <h5>City: </h5>
            {city}
            <h5>State: </h5>
            {state}
            <h5>Zip Code: </h5>
            {zip}
            <img width='200px' src={img} alt=''/>
            <h5>Mortgage: </h5>
            {mortgage}
            <h5>Rent: </h5>
            {rent}
            <button onClick={() => this.handleDelete(id)}>Delete</button>
        </div>
    })
    
    return (
        <div className="House">
        {houses}
      </div>
    );
  }
}

export default House;
