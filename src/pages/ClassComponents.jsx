import React from "react";
import BaseHoc from "../hoc/BaseHoc";

class ClassComponents extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "Aditya",
            age: 20
        }
        console.log("Constructor:")
    }
    componentDidMount() {
        console.log("ComponentDidMount:")
    }

    render() {
        console.log("Render:")
        return (
            <div>
                <p>This is a Class Component</p>
                <button onClick={() =>
                    this.setState({
                        ...this.state,
                        age: this.state.age + 1
                    })}>Click to add 1 in age</button>
                <h1>{this.state.age}</h1>
            </div>
        )
    }
}

export default BaseHoc(ClassComponents);