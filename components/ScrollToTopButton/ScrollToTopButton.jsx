import { BsFillArrowUpCircleFill } from 'react-icons/bs'

import styles from "./ScrollToTopButton.module.scss";
import classNames from 'classnames/bind';
let cx = classNames.bind(styles);

const ScrollToTopButton = ({isScrolled}) => {

    const fadeAnimation = {
        opacity: isScrolled ? 1 : 0,
        transition: 'opacity 0.5s ease-in-out'
    }
    return (
        <div className={cx('scroll-to-top-button__wrap')} style={fadeAnimation}>
            <BsFillArrowUpCircleFill className={cx('scroll-to-top-button')} onClick={() => window.scrollTo({ top: 0 })} size={64} color={"#7b787a"} />
        </div>
    )
}

export default ScrollToTopButton;