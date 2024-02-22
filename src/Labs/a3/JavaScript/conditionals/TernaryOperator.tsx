let loggedIn = true;
const message = loggedIn ? "Welcome" : "Please login";
// Add valid declaration or statement here
const additionalStatement = "This is an additional statement";

function TernaryOperator() {
    return (
        <div>
            <h2>Logged In</h2>
            <p>{message}</p>
        </div>
    );
}

export default TernaryOperator;
