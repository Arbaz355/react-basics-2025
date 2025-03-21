import React, { useState } from 'react'

// Controlled, UnControlled
const Controlled = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    }

    const handleSubmit = (e) => { 

    }

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" placeholder="name" id="name" name="name" onChange={(e) => handleChange(e)} />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" placeholder="Email" id="email" name="email" onChange={(e) => handleChange(e)} />
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}

export default Controlled