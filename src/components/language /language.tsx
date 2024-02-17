import './language.scss'
import arrow from'../../assets/img/arrow.png'
import {useState} from "react";
const Language = () => {

    const [isOpen, setIsOpen] = useState(false)

    console.log(isOpen)
    return (

        <div onClick={() => setIsOpen(!isOpen)} className={isOpen? ' language-active language': 'language'}>
            <div className="language__menu">
                <p>Рус</p>
                <p>Каз</p>
            </div>

            <img className={isOpen? ' language__arrow-active language__arrow': 'language__arrow'} src={arrow} alt=""/>

        </div>
    );
};

export default Language;