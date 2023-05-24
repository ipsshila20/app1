import React from "react";
class Classcomp extends React.Component{
    render() {
        return (
             <div className="class">
            <h1> This is created using class component</h1>
            <p>This is done by using external css</p>
            <p style={{color:"blue"}}>This is using inline css</p>

        </div>
        )
    }
}
export default Classcomp;