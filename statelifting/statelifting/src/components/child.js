import React, { useState } from "react";
function Child(props) {
    const [name, setName] = useState();
    function handleSubmit(e) {
        e.preventDefault();
        props.getDate(name);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text"
                    value={name} onChange={(e) => setName(e.target.value)} />
                <button>Submit</button>
                <h1>{name}</h1>
            </form>
        </div>
    );
} export default Child;