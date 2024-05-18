import React from 'react';
import MenuCover from '../../components/common/menu-cover/MenuCover';
import MenuCategory from './menu-category/MenuCategory';

const Menu = () => {
    return (
        <div className='*:mb-16'>
            <MenuCover image={"https://i.ibb.co/BqZLtxW/cooking-muster.png"} title="our menu"></MenuCover>
            {/*  desserts */}
            <MenuCategory title="desserts" subTitle={"Lorem ipsum dolor sit amet."} category="dessert" image="https://i.ibb.co/3rTmvv8/dessert-bg.jpg"></MenuCategory>
            {/* Piz-zaa */}
            <MenuCategory category={'pizza'} title="Piz-zaa" subTitle={"Lorem ipsum dolor sit amet."} image='https://i.postimg.cc/gj6y6Y96/pizza-bg.jpg'></MenuCategory>
            {/*  */}
            <MenuCategory category={'salad'} title="Salad" image='https://i.postimg.cc/RVWCKNbY/salad-bg.jpg'></MenuCategory>
            {/* // soups category */}
            <MenuCategory category={'soup'} title="Soups" image='https://i.postimg.cc/W1n2PgDh/soup-bg.jpg'></MenuCategory>
        </div>
    );
};

export default Menu;