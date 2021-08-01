import React from "react";
import { FaGithub, FaTwitter } from "react-icons/fa";
import About from "../components/about";
import Card from "../components/card";
import { SocialItem, SocialWrapper } from "../components/social";

export default class extends React.Component {

  render() {
    return(<Card>
      <About/>
      <SocialWrapper>
        <SocialItem target="github.com/eminarican">
          <FaGithub/>
        </SocialItem>
        <SocialItem target="twitter.com/eminarican">
          <FaTwitter/>
        </SocialItem>
      </SocialWrapper>
    </Card>)
  }
}
