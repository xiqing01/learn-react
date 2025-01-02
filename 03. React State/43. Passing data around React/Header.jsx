import React from "react"
import avatar from "./icons/user.png"

export default function Header(props) {
    const [userName, setUserName] = React.useState("Joe")

    return (
        <header>
            <img src={avatar} />
            <p>{props.userName}</p>
        </header>
    )
}
