import Button from "../../ux-ui/button/Button";

const Card = () => {
    return (
        <div className="card">
            <p className="card__title">
                Как создать и продвигать бизнес аккаунт в Instagram
            </p>
            <p className="card__note"></p>
            <Button className='button' text='подробнее'/>
        </div>
    );
};

export default Card;