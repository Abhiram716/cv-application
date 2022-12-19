import React, { Component } from 'react'

export default class Experience extends Component {
  render() {
    return (
        <div className="experience">
        <h2>Experience</h2>
        <input
          type="text"
          placeholder="Position"
          name="position"
          
        />
        <input
          type="text"
          placeholder="Company"
          name="company"
         
        />
        <input
          type="text"
          placeholder="City"
          name="workcity"
          
        />
        <input
          type="text"
          name="exfrom"
          placeholder="from"
          
        />
        <input
          type="text"
          name="exto"
          placeholder="to"
    
        />
      </div>
    )
  }
}
