import { useState } from 'react'

// onClick, onSubmit, onChange, onKeyDown, onKeyUp, onMouseOver, onMouseLeave, onLoad
const Events = () => {
    const [buttonText, setButtonText] = useState("click me");
    const handleKeyDown = (e) => {
        console.log(e.target.value, "inputvalue")
    }

    const handleMouseOver = () => {
        setButtonText("click me, are you sure")
    }

    const handleMouseLeave = () => {
        setButtonText("click me")
    }

    return (
        <div>
            <input type="number" name="mobile" onKeyUp={handleKeyDown} maxLength={10} />
            <button onMouseOver={(e) => handleMouseOver(e)} onMouseLeave={(e) => handleMouseLeave(e)}>{buttonText}</button>
        </div>
    )
}

export default Events