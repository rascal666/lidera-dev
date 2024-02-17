
import './historyBlock.scss'
import Button from "../../ux-ui/button/Button";

import img1 from '../../assets/img/history/history.png'
import img2 from '../../assets/img/history/history2.png'
import img3 from '../../assets/img/history/history3.png'
import img4 from '../../assets/img/history/history4.png'
import img5 from '../../assets/img/history/history5.png'
import img6 from '../../assets/img/history/history6.png'
const HistoryBlock = () => {
    return (
        <div className='history'>
            <div className="history__content">
                <div className='history__info'>
                    <p className="history__title">
                        Истории успеха
                    </p>
                    <p className="history__heading">
                        Алимбекова Бакыт - Салон эксклюзивных шляп "Elegant"
                    </p>
                    <p className="history__text">
                        Салон эксклюзивных шляп Elegant работает на казахстанском рынке с 1999 года. Бизнес основала Алимбекова Бакыт Калиевна и ее коллеги по цеху. Компания выпускает шляпы, головные уборы для силовых структур, и с недавних времен дизайнерскую верхнюю одежду.
                    </p>

                    <p className="history__text">
                        Мы побывали в гостях в салоне Elegant и узнали о том, как происходит создание и сборка индивидуальных шляп, с какими трудностями столкнулась компания в 2020 году и что она планирует на ближайшее будущее.
                    </p>

                    <Button className='button' text='Читать интервью' link='#'/>
                </div>
                <div className="history__images">
                    <img className='history__images-1' src={img1} alt=""/>
                    <img className='history__images-2' src={img2} alt=""/>
                    <img className='history__images-3' src={img3} alt=""/>
                    <img className='history__images-4' src={img4} alt=""/>
                    <img className='history__images-5' src={img5} alt=""/>
                    <img className='history__images-6' src={img6} alt=""/>
                </div>
            </div>

        </div>
    );
};

export default HistoryBlock;