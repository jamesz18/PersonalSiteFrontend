import React from "react";
import { Welcome } from "./Welcome.js";
import { NavigationButton } from "./NavigationButton.js";
import * as transitions from "./transitionStyles.js";
import * as animMgmt from "../../AnimationManager/animMgmt";
import * as news from "../../News/News.js";

const grad = {
  backgroundColor: "#fffce6", height: "1000px"
};

export class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.callbackTest = this.callbackTest.bind(this);
  }
  callbackTest (message) {
    console.log(message);
  }
  componentDidMount() {
    news.subscribe("router", this.callbackTest);
    animMgmt.triggerEnter();
  }

  
  //Purple Color 4f285d
  //green background: "linear-gradient(to bottom, rgba(80, 200, 20, .25) 25%, white)", 
  render() {

    return (
      <div className={"container-fluid"} style={{ height: "100%"}}>
        <Welcome transition={transitions.welcome}/>
        <br />
        <br />
        <div className={"row justify-content-center"}>
          <div className={"col-xs-2"} style={{ border: "0px solid black", paddingRight: "5px"}}>
            <div>
            <NavigationButton  number={1} page={"professionalPage"} value={"Professional"} buttonType={"yellowButton"} transition={transitions.professional}/>
            </div>
          </div>
          <div className={"col-xs-2"} style={{border: "0px solid black", paddingLeft: "5px"}}>
            <NavigationButton number={2} page={"personalPage"} value={"Personal"} buttonType={"yellowButton"} transition={transitions.personal}/>
          </div>
        </div>
      </div>
    );
  }
}
