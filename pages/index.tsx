import React from "react";

const cardStyle: React.CSSProperties = {
  backdropFilter: "blur(20px)"
}

export default class extends React.Component {

  render() {
    return (<div className="h-screen w-screen px-4 py-4">
      <div style={cardStyle} className="h-full w-full bg-black bg-opacity-50 rounded-xl"></div>
    </div>)
  }
}
