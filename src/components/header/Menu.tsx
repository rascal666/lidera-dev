import Dropdown from "../dropdown/dropdown";
import {useState} from "react";

type typeProps = {
    array: string[],
    title: string
}
const Menu = ({array, title}: typeProps) => {
    const [isDropdown, setIsDropdown] = useState(false)

    return (
        <div onClick={() => {setIsDropdown(!isDropdown)}}>
            <p className='header__menuTitle'>{title}</p>
            {isDropdown ? <Dropdown array={array} title={title}/> : false}
        </div>
    );
};

export default Menu;