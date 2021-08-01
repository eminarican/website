import React from "react";
import { FaDiscord, FaEnvelope, FaEnvelopeOpen, FaEnvelopeSquare, FaGithub, FaTwitter } from "react-icons/fa";
import About from "../components/about";
import Card from "../components/card";
import { SocialItem, SocialWrapper } from "../components/social";

export default class extends React.Component {

  render() {
    return(<Card>
      <About/>
      <SocialWrapper>
        <SocialItem target="https://github.com/eminarican">
          <FaGithub/>
        </SocialItem>
        <SocialItem target="https://twitter.com/eminarican">
          <FaTwitter/>
        </SocialItem>
        <SocialItem target="mailto:emin.arican@outlook.com">
          <FaEnvelope/>
        </SocialItem>
        <SocialItem target="discord.com/users/784013663186059324">
          <FaDiscord/>
        </SocialItem>
      </SocialWrapper>
    </Card>)
  }
}
