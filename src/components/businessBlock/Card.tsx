

type typeProps = {
    title: string,
    note: string,
    description: string,
    img: string
}
const Card = ({title, note, description, img}: typeProps) => {
    return (
        <div className="card">
            <div className="card__img">
                <img src={img} alt=""/>
            </div>

            <div className='card__content'>
                <p className='card__title'>{title}</p>
                <p className='card__note'>{note}</p>
                <p className='card__text'>{description}</p>
            </div>

        </div>
    );
};

export default Card;