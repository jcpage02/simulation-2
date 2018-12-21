import React, { Component } from "react";
import axios from 'axios'

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
            <h4>Property Name: </h4>
            {name}
            <h4>Address: </h4>
            {address}
            <h4>City: </h4>
            {city}
            <h4>State: </h4>
            {state}
            <h4>Zip Code: </h4>
            {zip}
            <img width='200px' src={img} alt=''/>
            <h4>Mortgage: </h4>
            {mortgage}
            <h4>Rent: </h4>
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
