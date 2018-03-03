import React from "react";
import { render } from "react-dom";
import * as router from './Router/Router';
import * as news from "./News/News";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chosenPage: router.getPage(),
    };

    this.updatePage = this.updatePage.bind(this);
  }
  //Page update callback
  updatePage () {
    console.log("Updating page from updatePage!");
    this.setState({ chosenPage: router.getPage()});
  }
  //Set up app services
  componentDidMount () {
    // Add a callback for updating page state from the router
    router.listen(this.updatePage);
  }

  render() {
    const TagName = this.state.chosenPage;

    return (
      <div>
        <TagName />    
      </div>
    );
  }
}
render(<App />, document.getElementById("root"));
