import { useState } from "react";

export default function UserForm() {
    const [name, setName] = useState("");

    const [age, setAge] = useState("");

    function handleChange(e) {
        setName(e.target.value);
    }

    function handleChangeAge(e) {
        setAge(e.target.value);
    }

    function handleSubmit(e) {
        // Prevent the default submission behavior
        e.preventDefault();
        alert(name+age);
    }

    // function handleSubmitAge(e) {
    //     // Prevent the default submission behavior
    //     e.preventDefault();
    //     alert(age);
    // }

    return (
        <form onSubmit={handleSubmit}>
            <label>Enter your name:
                <input
                    type="text"
                    value={name}
                    onChange={handleChange}
                />

              
            </label>
            <label>Enter your Age:
                <input
                    type="number"
                    value={age}
                    onChange={handleChangeAge}
                />
            <input type="submit"/>    
            </label>
        </form>
    )
}