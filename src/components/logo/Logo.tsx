import './logo.scss'

type typeProps = {
    img: string,
    link: string,
    className:string
}

const Logo = ({img, link, className}: typeProps) => {
    return (
        <a className='logo' href={link}>
            <img className={'img ' + className} src={img} alt=""/>
        </a>
    );
};

export default Logo;