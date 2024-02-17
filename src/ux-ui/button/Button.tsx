
import './button.scss'

type typeProps = {
    className: string,
    text: string,
    link?: string
}
const Button = ({ className, text, link = '' }: typeProps) => {
    return (
        link == '' ? (
            <div className={className}>
                {text}
            </div>
        ) :
            <a href={link}>
                <div className={className}>
                    {text}
                </div>
            </a>
    );
};

export default Button;