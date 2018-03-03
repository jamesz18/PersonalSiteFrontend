import React from "react";
import { CSSTransition, transit } from "react-css-transition";
import LandingPage from "./LandingPage.css";
import * as router from "../../Router/Router.js";
import * as animMgmt from "../../AnimationManager/animMgmt";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

export class NavigationButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: props.number,
      value: props.value,
      state: false,
      buttonType: props.buttonType,
      page: props.page,
      transition: props.transition
    };
    this.handleClick = this.handleClick.bind(this);
    this.animationEnter = this.animationEnter.bind(this);
    this.animationExit = this.animationExit.bind(this);
  }
  componentDidMount() {
    animMgmt.subscribe(this.animationEnter, this.animationExit);
  }
  animationEnter(time = 1750) {
    if (time > 0) {
      setTimeout(() => { this.animationEnter(0) }, time);
    } else {
      this.setState({ active: true });
    }
  }
  animationExit(time = 0) {
    if (time > 0) {
      setTimeout(() => { this.animationExit(0) }, time);
    } else {
      this.setState({ active: false });
    }
  }
  handleClick() {
    console.log("NavigationButton: handling click");
    animMgmt.triggerExit()
    router.setPage(this.state.page, 1000);
  }
  render() {
    // TODO: Currently only timed for first occurence line up with Welcome, needs to be fixed

    return (
      <div className={"mx-auto"} style={styles}>
        <CSSTransition {...this.state.transition} active={this.state.active}>
          <div onClick={this.handleClick} className={`rounded border ${this.state.buttonType}`} style={{ ...styles }}>
          <span style={{ fontStyle: "italic", fontWeight: "bold", fontSize: "1.1em" }}>{this.state.value}</span>
          </div>
        </CSSTransition>
      </div>
    );
  }
}
