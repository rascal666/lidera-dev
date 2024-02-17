import arrow from "../../assets/img/arrowRigth.png";
import './dropdown.scss'

type typeProps = {
    array: string[],
    title: string
}

const Dropdown = ({array, title}: typeProps) => {
    return (
        <div className='dropdown'>
            <p className='dropdown__title'>{title}</p>

            {
                array.map((menuItem, key) => (
                    <div className='dropdown__item' key={key}>
                        <p className='dropdown__text'>{menuItem}</p>
                        <img className='dropdown__arrow' src={arrow} alt=""/>
                    </div>
                ))
            }

        </div>
    );
};

export default Dropdown;