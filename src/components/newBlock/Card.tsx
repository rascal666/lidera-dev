
type typeProps  = {
    imgUrl: string,
    contentBefore: string
}

const Card = ({imgUrl, contentBefore}: typeProps) => {

    const divStyle = {
        color: 'blue',
        backgroundImage: 'url(' + imgUrl + ')',
    };

    return (
        <div data-content-before={contentBefore} style={divStyle} className="card">
            <p className='card__text'>Международный женский форум</p>
        </div>
    );
};

export default Card;