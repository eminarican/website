import React from "react";
import About from "../components/about";
import Card from "../components/card";
import Social from "../components/social";

export default class extends React.Component {

  render() {
    return(<Card>
      <About/>
      <Social/>
    </Card>)
  }
}
