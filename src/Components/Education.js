import React, { Component } from "react";

export default class Education extends Component {
  render() {
    return (
      <div className="education">
        <h2>Education</h2>
        <input
          type="text"
          placeholder="University"
          name="university"
          
        />
        <input
          type="text"
          placeholder="city"
          name="educity"
          
        />
        <input
          type="text"
          placeholder="Degree"
          name="degree"
          
        />
        <input
          type="text"
          name="edufrom"
          placeholder="from"
          
        />
        <input
          type="text"
          name="eduto"
          placeholder="to"
          
        />
      </div>
    );
  }
}



