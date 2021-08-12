import React, { CSSProperties } from "react";
import { FaDiscord, FaEnvelope, FaEnvelopeOpen, FaEnvelopeSquare, FaGithub, FaGithubSquare, FaTwitter, FaTwitterSquare } from "react-icons/fa";
import About from "../components/about";
import Card from "../components/card";
import { SocialItem, SocialWrapper } from "../components/social";

const discordStyle: CSSProperties = {
  fontSize: "1.45rem",
  lineHeight: "2rem"
}

export default class Index extends React.Component {

  render() {
    return(<Card>
      <About/>
      <SocialWrapper>
        <SocialItem target="https://github.com/eminarican" custom={null}>
          <FaGithubSquare/>
        </SocialItem>
        <SocialItem target="https://twitter.com/eminarican" custom={null}>
          <FaTwitterSquare/>
        </SocialItem>
        <SocialItem target="mailto:emin.arican@outlook.com" custom={null}>
          <FaEnvelopeSquare/>
        </SocialItem>
        <SocialItem target="discord.com/users/784013663186059324" custom={discordStyle}>
          <FaDiscord/>
        </SocialItem>
      </SocialWrapper>
    </Card>)
  }
}
