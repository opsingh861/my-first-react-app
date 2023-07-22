import React, { useState, useEffect } from "react";
import BaseHoc from "../hoc/BaseHoc";

const FunctionalComponents = (props) => {
    let [count, setCount] = useState(0);
    const [changeName, setChangeName] = useState("")
    const subtraction = () => {
        setCount(--count)
    }
    useEffect(() => {
        console.log("Component did mount")
    }, [])

    useEffect(() => {
        console.log("component did update")
    })

    useEffect(() => {
        console.log("Only on changin name")
    }, [changeName])
    useEffect(() => {
        console.log("Only on prop change")
    }, [props])

    useEffect(() => {
        return console.log("Component did unmount")
    }, [])
    return (
        <div>
            <p>This is Functional Component</p>
            <button onClick={() => setCount(++count)}>Click to add one</button>
            <button onClick={subtraction}>Click to subtract one</button>
            <h1>{count}</h1>

            <h1>My name is {props.name} {props.surname} </h1>
            <h1>{props.count}</h1>
            <input type="text" onChange={(e) => setChangeName(e.target.value)} />
            <button onClick={() => props.setName(changeName)}>Click on the button to change the name</button>
        </div>

    )
}

export default BaseHoc(FunctionalComponents)