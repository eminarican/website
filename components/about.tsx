import React from "react";
import Image from "next/image";

export default class About extends React.Component {
    render() {
        return (<div className="h-full w-full flex justify-center items-center">
            <Image
                src="https://avatars.githubusercontent.com/u/17065574?v=4"
                className="rounded-xl"
                height="200px"
                width="200px"
                alt="pfp"
            />
        </div>)
    }
}
