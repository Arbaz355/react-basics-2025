import React, { useState, useRef } from 'react'

// Controlled, UnControlled
const UnControlled = () => {
    const intialValue = "Arbaz";
    const inputRef = useRef(null);

    console.log(inputRef?.current?.value, "refValue");

    const handleFocus = () => {
        inputRef.current.focus();
    }

    const handleRemoveFocus = () => {
        inputRef.current.blur();
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputRef.current.value)
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" ref={inputRef} defaultValue={intialValue} placeholder="name" id="name" name="name" />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" placeholder="Email" id="email" name="email" />
            </div>
            <button type="submit">Submit</button>

            <button onClick={handleFocus}>Focus</button>
            <button onClick={handleRemoveFocus}>remove focus</button>
        </form>
    )
}

export default UnControlled