import './footer.scss'

import logo from '../../assets/img/logo3.png'
import logo2 from '../../assets/img/logo2.png'

import facebook from '../../assets/img/social /Facebook.png'
import telegram from '../../assets/img/social /telegram 1.png'
import instagram from '../../assets/img/social /Instagram.png'


const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer__contain">
                <div className="footer__chapter footer__chapter-img">
                    <div className="footer__logo">
                        <img src={logo} alt=""/>
                        <img src={logo2} alt=""/>
                    </div>
                    <div className="footer__social">
                        <img src={facebook} alt=""/>
                        <img src={telegram} alt=""/>
                        <img src={instagram} alt=""/>
                    </div>
                </div>
                <div className="footer__chapter">
                    <p className="footer__title">О портале</p>
                    <span>Продукты КМФ</span>
                    <span>Новости / Анонсы</span>
                    <span>О программе KMF Isker Hanymy</span>
                    <span>Истории успеха</span>
                </div>

                <div className="footer__chapter">
                    <p className="footer__title">Обучение</p>
                    <span>Наставничество</span>
                    <span>Саморазвитие</span>
                    <span>Здоровье</span>
                    <span>Полезные советы</span>
                </div>

                <div className="footer__chapter">
                    <p className="footer__title">Бизнес</p>
                    <span>Каталог</span>
                    <span>Made in KZ</span>
                    <span>Я социальный предприниматель</span>
                </div>
            </div>
        </div>
    );
};

export default Footer;