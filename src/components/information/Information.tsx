import Button from "../../ux-ui/button/Button";
import './information.scss'

const Information = () => {
    return (
        <div className='information'>
            <p className='information__text'>
                Друзья! Представляем Вашему вниманию портал KMF Isker hanymy – платформу для получения актуальной и полезной информации для Вас и Вашего бизнеса
            </p>
            <Button className='buttonBorder' text='О программе' link='#'/>
        </div>
    );
};

export default Information;