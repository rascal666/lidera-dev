import logoKMF from '../../assets/img/logo.png'
import logoDemey from '../../assets/img/logo2.png'

import './header.scss'
import Logo from "../logo/Logo";
import Language from "../language /language";

import Menu from "./Menu";
import Button from "../../ux-ui/button/Button";
import {useAppSelector} from "../../hooks/redux";
import Hamburger from "./Hamburger";
import MenuMobile from "./MenuMobile";

const Header = () => {

    const {menuArrayPortal, menuArrayEducation,menuArrayBusiness, isHamburger} = useAppSelector(state => state.reducer)


    return (
        <div className='header'>
            <div className="header__wrapper">
                <div className="desktop header__desktop">
                    <div className='header__left'>
                        <Logo img={logoKMF} link='#' className='logoKMF'/>
                        <Language/>
                    </div>
                    <div className='header__right'>
                        <div className='header__menu'>
                            <Menu id={1} array={menuArrayPortal} title='О портале'/>
                            <Menu id={2} array={menuArrayBusiness} title='Бизнес'/>
                            <Menu id={3} array={menuArrayEducation} title='Обучение'/>
                            <Menu id={4} array={menuArrayPortal} title='Забота о себе'/>
                            <Button className='button' text='Премия KMF Isker hanymy' link='#'/>
                        </div>

                        <Logo img={logoDemey} link='#' className='logoDemey'/>
                    </div>
                </div>

                <div className="mobile header__mobile">
                    <div className='mobile__left'>
                        <Logo img={logoKMF} link='#' className='logoKMF'/>
                        <Language/>
                    </div>
                    <Hamburger/>
                    {isHamburger ?
                        <div className='menu'>
                            <div className='menu__wrapper'>
                                <div className='menu__content'>
                                    <MenuMobile id={1} array={menuArrayPortal} title='О портале'/>
                                    <MenuMobile id={2} array={menuArrayBusiness} title='Бизнес'/>
                                    <MenuMobile id={3} array={menuArrayEducation} title='Обучение'/>
                                    <MenuMobile id={4} array={menuArrayPortal} title='Забота о себе'/>
                                </div>
                            </div>
                            <Button className='button' text='Премия KMF Isker hanymy' link='#'/>
                            <Logo img={logoDemey} link='#' className='logoDemey'/>
                        </div> : null}


                </div>
            </div>

        </div>
    );
};

export default Header;