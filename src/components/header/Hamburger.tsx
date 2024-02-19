import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {isHamburgerAction} from "../../reducers/reducer";

const Hamburger = () => {
    const dispatch = useAppDispatch();
    const {isHamburger} = useAppSelector(state => state.reducer)

    return (
        <div onClick={() => {dispatch(isHamburgerAction())}} className="">
            <div className= {isHamburger? ' is-active hamburger': 'hamburger'} id="hamburger">
                <span className="hamburger__line"></span>
                <span className="hamburger__line"></span>
                <span className="hamburger__line"></span>
            </div>
        </div>
    );
};

export default Hamburger;