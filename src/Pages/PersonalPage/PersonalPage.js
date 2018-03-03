import React from "react";
import { NavigationButton } from "../LandingPage/NavigationButton.js";
import * as transitions from "./transitionStyles.js";
import * as animMgmt from "../../AnimationManager/animMgmt";

const grad = {
  backgroundColor: "#fffce6", height: "1000px"
};

export class PersonalPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  componentDidMount() {
    animMgmt.triggerEnter();
  }
  //Purple Color 4f285d
  //green background: "linear-gradient(to bottom, rgba(80, 200, 20, .25) 25%, white)", 
  render() {
    return (
      <div className={"container-fluid"} style={{ height: "100%" }}>
        <p>Personal Page!</p>
        <div className={"row"}>
          <NavigationButton number={1} value={"Landing Page"} page={"landingPage"} buttonType={"glossButton"} transition={transitions.landing}/>
        </div>
      </div>
    );
  }
}