import React, { useState } from "react";

const FunctionalComponents = (props) => {
    let [count, setCount] = useState(0);
    const [changeName, setChangeName] = useState("")
    const subtraction = () => {
        setCount(--count)
    }
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

export default FunctionalComponents