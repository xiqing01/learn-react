import React from "react"
import Header from "./Header"
import Body from "./Body"

export default function App() {
    return (
        <main>
            <Header userName=={userName} />
            <Body userName=={userName} />
        </main>
    )
}
