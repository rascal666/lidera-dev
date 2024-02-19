import Dropdown from "../dropdown/dropdown";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {isDropdownAction, setId} from "../../reducers/reducer";
import React from "react";

type typeProps = {
    array: string[],
    title: string,
    id: number

}
const Menu = ({array, title, id}: typeProps) => {
    const dispatch = useAppDispatch();
    const {isDropdown, openedMenuId} = useAppSelector(state => state.reducer)

    function setIsDropdown(e: React.MouseEvent<HTMLDivElement>) {
        e.stopPropagation()
        dispatch(isDropdownAction(true))
        dispatch(setId(id))
    }

    return (
        <div className='menu' onClick={(e) => setIsDropdown(e)}>
            <p className='menu__title' >{title}</p>
            {isDropdown && openedMenuId === id ? <Dropdown array={array} title={title}/> : false}
        </div>
    );
};

export default Menu;