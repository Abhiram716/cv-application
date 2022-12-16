
import React, { Component } from "react";

class BodyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      address: "",
      phoneNumber: "",
      email: "",
      description: "",
      position: "",
      company: "",
      workcity: "",
      exfrom: "",
      exto: "",
      university: "",
      educity: "",
      degree: "",
      edufrom: "",
      eduto: "",
    };
  }


  render() {
    return (
      <div className="form">
        <div className="Personal">
          <h2>Personal Information</h2>
          <input
            type="text"
            placeholder="Name"
            name="name"
            onChange={this.handleChange}
            value={this.state.name}
          />
          <input
            type="text"
            placeholder="address"
            name="address"
            onChange={this.handleChange}
            value={this.state.address}
          />
          <input
            type="text"
            placeholder="Phone number"
            name="phoneNumber"
            onChange={this.handleChange}
            value={this.state.phoneNumber}
          />
          <input
            type="text"
            placeholder="Email"
            name="email"
            onChange={this.handleChange}
            value={this.state.email}
          />
        </div>

        <div className="experience">
          <h2>Experience</h2>
          <input
            type="text"
            placeholder="Position"
            name="position"
            onChange={this.handleChange}
            value={this.state.position}
          />
          <input
            type="text"
            placeholder="Company"
            name="company"
            onChange={this.handleChange}
            value={this.state.company}
          />
          <input
            type="text"
            placeholder="City"
            name="workcity"
            onChange={this.handleChange}
            value={this.state.workcity}
          />
          <input
            type="text"
            name="exfrom"
            placeholder="from"
            onChange={this.handleChange}
            value={this.state.exfrom}
          />
          <input
            type="text"
            name="exto"
            placeholder="to"
            onChange={this.handleChange}
            value={this.state.exto}
          />
        </div>

        <div className="Education">
          <h2>Education</h2>
          <input
            type="text"
            placeholder="University"
            name="university"
            onChange={this.handleChange}
            value={this.state.university}
          />
          <input
            type="text"
            placeholder="city"
            name="educity"
            onChange={this.handleChange}
            value={this.state.educity}
          />
          <input
            type="text"
            placeholder="Degree"
            name="degree"
            onChange={this.handleChange}
            value={this.state.degree}
          />
          <input
            type="text"
            name="edufrom"
            placeholder="from"
            onChange={this.handleChange}
            value={this.state.edufrom}
          />
          <input
            type="text"
            name="eduto"
            placeholder="to"
            onChange={this.handleChange}
            value={this.state.eduto}
          />
        </div>
      </div>
    );
  }
}

export default BodyComponent;


