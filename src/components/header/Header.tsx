import logoKMF from '../../assets/img/logo.png'
import logoDemey from '../../assets/img/logo3.png'

import './header.scss'
import Logo from "../logo/Logo";
import Language from "../language /language";

import Menu from "./Menu";

const Header = () => {
    const menuArrayPortal: string[] = ['Продукты КМФ', 'Новости / Анонсы', 'О программе KMF Isker Hanymy', 'Истории успеха']
    const menuArrayEducation: string[] = ['Наставничество', 'Саморазвитие', 'Здоровье', 'Полезные советы']
    const menuArrayBusiness: string[] = ['Каталог', 'Made in KZ', 'Я социальный предприниматель']

    return (
        <div className='header'>
            <div className='header__left'>
                <Logo img={logoKMF} link='#' className='logoKMF'/>
                <Language />
            </div>
            <div className='header__right'>
                <div className='header__menu'>
                    <Menu  array={menuArrayPortal} title='О портале' />
                    <Menu array={menuArrayBusiness} title='Бизнес' />
                    <Menu array={menuArrayEducation} title='Обучение' />
                    <Menu array={menuArrayPortal} title='Забота о себе' />

                </div>

                <Logo img={logoDemey} link='#' className='logoDemey'/>
            </div>
        </div>
    );
};

export default Header;