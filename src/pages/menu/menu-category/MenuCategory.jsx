import { Link } from "react-router-dom";
import MenuCover from "../../../components/common/menu-cover/MenuCover";
import MenuItemCard from "../../../components/shared/menu-item-card/MenuItemCard";
import useMenu from "../../../components/hooks/useMenu";
import FevoriteDishBtn from "../../../components/common/common-buttons/FevoriteDishBtn";

const MenuCategory = ({ title, subTitle, category, image }) => {

    const [menu] = useMenu(category)

    return (
        <div>
            <MenuCover image={image} title={title} description={subTitle}></MenuCover>
            <div className='grid lg:grid-cols-2 gap-6 my-8'>
                {
                    menu.slice(0, 4).map(item => <MenuItemCard item={item} key={item._id}></MenuItemCard>)
                }
            </div>
            <div className='text-center'>
                <Link to={`/order/${category.toLowerCase()}`}>
                    <FevoriteDishBtn text="Order your fevorite food"></FevoriteDishBtn>
                </Link>
            </div>
        </div>
    );
};

export default MenuCategory;