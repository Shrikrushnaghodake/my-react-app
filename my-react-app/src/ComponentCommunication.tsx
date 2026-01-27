// Component Communication

import { useState } from "react";


// Parent to Child Communication using Props and they are reuseablea & dynamic



//parent ->  name  use in child component

function Child(props){
    return <h2> Hello, {props.name} </h2>
}
function ParentComponent() {
    return <Child name="Vishal" />
}

export default ParentComponent;

// Child to Parent - To send data from child to parent we use callback function as props

function ChildComponent({ sendDataToParent }) {
    return <button onClick={() => sendDataToParent("Data from Child")}>Send Data to Parent</button>;
}

function Parent() {
    const handleDataFromChild = (data) => 
        alert(data);
    return <ChildComponent sendDataToParent={handleDataFromChild} />;
}



// Sibling communication - To share data between sibling components we lift the shared state up to their common parent component.

function Sibling1({ shareData }) {
    return <button onClick={() => shareData("Data from Sibling 1")}>Send Data to Sibling 2</button>;
}

function Sibling2({ msg }) {
    return <div>Received: {msg}</div>;
}

// one updates the count and other displays the count
function SiblingA({ shareCount }) {
    return <button onClick={() => shareCount(1)}>Increment Count</button>;
}
function SiblingB({ count }) {
    return <div>Count: {count}</div>;
}

function SiblingParent() {
    const [data, setData] = useState("");
    return <>
        <Sibling1 shareData={setData} />
        <Sibling2 msg={data} />
    </>
}

// Lifting State Up - When multiple components need to share the same changing data, move state up to their common parent Component.


function TemperatureInput({ value, onChange}) {
    return <input value={value} onChange={onChange} />
}

function ParentTempComponent() {
    const [temp, setTemp] = useState("");
    return(
        <>
        <TemperatureInput value={temp} onChange={setTemp} />
        <p> Now Temp is : {temp}</p>
        </>
    )
}



// component Resueability - Components can be reused with different props to render different outputs.


function Button({ label, onClick }) {
    return <button onClick={onClick}>{label}</button>;
}

function ReusableComponent() {
    const handleClick = (msg) => alert(msg);
    return (
        <>
            <Button label="Click Me 1" onClick={() => handleClick("Button 1 Clicked")} />
            <Button label="Click Me 2" onClick={() => handleClick("Button 2 Clicked")} />
        </>
    );
}


// Temperature Converter 

//Share Form State


