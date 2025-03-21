import React, { useEffect, useState } from 'react'
import axiosCustomInstance from '../services/axiosInstance';

const BEARER_TOKEN = 'your_bearer_token_here';

const UserData = () => {
    const [user, setUser] = useState([]);

    const fetchData = async () => {
        try {
            const response = await axiosCustomInstance.get("todos/1");
         
        }
        catch (err) {
            console.error(err)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>

        </div>
    )
}

export default UserData