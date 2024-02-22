let true1 = true, false1 = false;

let variable1 = "Hello, World!";
let variable2 = 10;
let variable3 = true;

const IfElse = () => {
    return (
        <div>
            <h2>If Else</h2>
            {true1 && <p>true1</p>}
            {!false1 ? <p>!false1</p> : <p>false1</p>}
        </div>
    )
}

export default IfElse;
