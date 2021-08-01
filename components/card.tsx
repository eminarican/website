import React from "react";

const style: React.CSSProperties = {
    backdropFilter: "blur(20px)"
  }

export default class Card extends React.Component {
    render() {
        return (<div className="h-screen w-screen px-4 py-4 text-white">
            <div style={style} className="h-full w-full px-4 py-4 flex flex-col justify-center items-center bg-black bg-opacity-50 rounded-xl">
                {this.props.children}
            </div>
        </div>)
    }
}
