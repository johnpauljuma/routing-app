"use client"

export default function Services(){

    function doSomething(event){
        console.log('This is Function 1')
    }

    const doSomethingTwo = (event) =>{
        console.log("THis is Function 2")
    }
    return(
        <div>
            <h1>This is Services page</h1>
            <p>This is the Services content.</p>
            <button onClick={doSomething}>Button 1</button>
            <button onClick={doSomethingTwo}>Button 2</button>
        </div>
    );
}