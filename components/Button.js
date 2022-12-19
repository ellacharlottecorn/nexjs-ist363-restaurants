import classNames from 'classnames/bind'
import Link from 'next/link';
import styles from './Button.module.scss'

let cx = classNames.bind(styles);

const Button = ({ 
    label = "Default Label",
    clickHandler,
    marginBottom,
    marginRight,
    path
}) => {
    let buttonClasses = cx({
        btn: true,
        [`margin-bottom-${marginBottom}`]: marginBottom,
        [`margin-right-${marginRight}`]: marginRight,
    })
    return path ?
        <Link href={path} className={buttonClasses}>
            {label}
        </Link>
    :
        <button className={buttonClasses} onClick={clickHandler}>{label}</button>
}
export default Button