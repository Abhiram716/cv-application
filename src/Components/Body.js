import React, { Component } from "react";
import Personal from "./Personal";
import Education from "./Education";
import Experience from "./Experience";


class Body extends Component {
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
        <Personal/>
        <Education/>
        <Experience/>
      </div>
    );
  }
}

export default Body;


