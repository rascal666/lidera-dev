import arrowDown from "../../assets/img/arrowDown.png";

import React from "react";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {isDropdownAction, setId} from "../../reducers/reducer";


type typeProps = {
    array: string[],
    title: string,
    id: number

}
const MenuMobile = ({title, array, id}: typeProps) => {
    const dispatch = useAppDispatch();
    const {isDropdown, openedMenuId} = useAppSelector(state => state.reducer)

    function setIsDropdown(e: React.MouseEvent<HTMLDivElement>) {
        e.stopPropagation()
        dispatch(isDropdownAction(true))
        dispatch(setId(id))
    }

    return (
        <div className="menu__item">
            <div className="menu__header" onClick={(e) => setIsDropdown(e)}>
                <p className={"menu__title " }>{title}</p>
                <img className={ isDropdown && openedMenuId === id? ' menu-active': ''} src={arrowDown} alt=""/>
            </div>


            {
                array.map((menuItem, key) => (

                    isDropdown && openedMenuId === id ?
                        <div className='dropdown'>
                            <div className='dropdown__item' key={key}>
                                <p className='dropdown__text'>{menuItem}</p>
                            </div>
                        </div>
                        : false


                ))
            }


        </div>
    );
};

export default MenuMobile;