import React, { useState } from 'react';
import SectionTitle from '../../../components/common/section-title/SectionTitle';
import MenuItemCard from '../../../components/shared/menu-item-card/MenuItemCard';
import useMenu from '../../../components/hooks/useMenu';

const PopularMenu = () => {
    const [menuItems, setMenuItems] = useState([])
    const [menu] = useMenu('popular', 4)

    return (
        <section>
            <SectionTitle heading="From Our Menu" subHeading="-- Popular Menu --"></SectionTitle>
            <div className='grid lg:grid-cols-2 gap-6 mt-4'>
                {
                    menu.map(item => <MenuItemCard item={item} key={item._id}></MenuItemCard>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;
