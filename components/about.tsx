import React from "react";

export default class About extends React.Component {
    render() {
        return (<div className="h-full w-full flex justify-center items-center select-none">
            <img
                src="https://avatars.githubusercontent.com/u/17065574?v=4"
                className="rounded-xl select-none"
                height="200px"
                width="200px"
                alt="pfp"
            />
        </div>)
    }
}
