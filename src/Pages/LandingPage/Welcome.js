import React from "react";
import { CSSTransition, transit } from "react-css-transition";
import * as animMgmt from "../../AnimationManager/animMgmt";
//https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css
const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

export class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      test: props.test,
      transition: props.transition
    };

    this.handleClick = this.handleClick.bind(this);
    this.animationEnter = this.animationEnter.bind(this);
    this.animationExit = this.animationExit.bind(this);
  }

  handleClick() {
    this.setState({ active: !this.state.active });
  }

  componentDidMount() {
    animMgmt.subscribe(this.animationEnter, this.animationExit);
  }
  
  animationEnter(time = 1000) {
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

  render() {
    /*
    setTimeout(() => {
      this.setState({ active: !this.state.active });
    }, 3000);
    */    
    return (
      <div className={"mx-auto"} style={{...styles}}>
        <CSSTransition {...this.state.transition} active={this.state.active}>
          <img
            src="https://cdn.discordapp.com/attachments/308360383255674880/415093705142435841/welcome.png"
            style={{ width: "300px", paddingTop: "25px"}}
          />
        </CSSTransition>
      </div>
    );
  }
}
