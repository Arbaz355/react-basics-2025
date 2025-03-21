import React, { useEffect, useState } from 'react'
import axiosCustomInstance from '../services/axiosInstance';

const UserData = () => {
    const [product, setProduct] = useState([]);

  

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>

        </div>
    )
}

export default UserData