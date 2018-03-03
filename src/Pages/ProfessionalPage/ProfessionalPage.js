import React from "react";
import { NavigationButton } from "../LandingPage/NavigationButton.js";
import * as transitions from "./transitionStyles.js";
import * as animMgmt from "../../AnimationManager/animMgmt";

const grad = {
  backgroundColor: "#fffce6", height: "1000px"
};

export class ProfessionalPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  componentDidMount() {
    animMgmt.triggerEnter(0);
  }
  //Purple Color 4f285d
  //green background: "linear-gradient(to bottom, rgba(80, 200, 20, .25) 25%, white)", 
  render() {
    return (
      <div className={"container-fluid"} style={{ height: "100%" }}>
        <div className={"row justify-content-center"}>
          <div className={"col-9"} style={{ color: "rgb(79, 40, 93)"}}>
            <h1 style={{ padding: "0px", marginBottom: "0px"}}>Projects</h1>
            <hr style={{ color: "rgb(79, 40, 93)", padding: "0px", marginTop: "0px"}} />
          </div>
        </div>
        <div className={"row"}>
          <NavigationButton number={1} value={"Landing Page"} page={"landingPage"} buttonType={"glossButton"} transition={transitions.landing}/>
        </div>
      </div>
    );
  }
}