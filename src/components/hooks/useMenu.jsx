import React, { useEffect, useState } from 'react';
import axios from 'axios'

const useMenu = (category) => {
    const [menu, setMenu] = useState([])
    useEffect(() => {
        axios.get('menu.json')
            .then(res => {
                const menuByCategory = res.data.filter(item => item.category == category)
                // console.log(menuByCategory);
                setMenu(menuByCategory)
            })
    }, [])
    return [menu]
};

export default useMenu;