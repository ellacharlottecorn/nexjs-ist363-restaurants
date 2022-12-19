import classnames from 'classnames/bind';
import Icon from "./Icon"
import styles from './ButtonUI.module.scss'

let cx = classnames.bind(styles)

const ButtonUI = ({clickHandler, icon }) => {
    let buttonUIClasses = cx({
        buttonUI: true,
        close: icon === "close",

    });
    return <button 
        className={buttonUIClasses} 
        onClick={clickHandler}
    >
            <Icon type={icon}/>
    </button>
}
export default ButtonUI