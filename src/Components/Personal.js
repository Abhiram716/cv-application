import React, { Component } from "react";

export default class Personal extends Component {
  render() {
    return (
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
    );
  }
}
