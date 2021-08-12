import React, { CSSProperties } from "react";
import { IconType } from "react-icons";
import {FaGithub} from "react-icons/fa"

interface ItemProps {
    target: string
    custom: CSSProperties | null
}

export class SocialItem extends React.Component<ItemProps> {
    render() {
        if (this.props.custom === null) {
            return (<a target="_blank" rel="noreferrer" href={this.props.target} className="mx-1 text-2xl">
                {this.props.children}
            </a>)
        } else {
            return (<a style={this.props.custom} target="_blank" rel="noreferrer" href={this.props.target} className="mx-1">
                {this.props.children}
            </a>)
        }
    }
}

export class SocialWrapper extends React.Component {
    render() {
        return (<div className="h-7 w-full flex justify-center items-end">
            {this.props.children}
        </div>)
    }
}
