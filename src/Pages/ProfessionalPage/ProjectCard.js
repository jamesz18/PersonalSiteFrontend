import React from "react";
import { NavigationButton } from "../LandingPage/NavigationButton.js";
import * as transitions from "./transitionStyles.js";
import * as animMgmt from "../../AnimationManager/animMgmt";

const grad = {
  backgroundColor: "#fffce6", height: "1000px"
};

export class ProjectCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "This site!",
      tags: ["React", "JavaScript"],
      description: "A front end written in React, using JS for module orchestration and React CSS Transition to handle CSS animations."
    };
  }
  componentDidMount() {

  }
  //Purple Color 4f285d
  //green background: "linear-gradient(to bottom, rgba(80, 200, 20, .25) 25%, white)", 
  render() {
    return (
      <div>

      </div>
    );
  }
}