import React, { useEffect, useState } from 'react';
import axios from 'axios'

const useMenu = (category, limit = 0) => {
    const [menu, setMenu] = useState([])
    console.log(limit);
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_URL}/menu?category=${category}&limit=${limit}`)
            .then(res => {
                setMenu(res.data)
                console.log(res.data);
            })
    }, [])
    return [menu]
};

export default useMenu;