import style from './HeaderBackgoundImage.module.css';

import MainPageHeaderBackground from "../../assets/MainPageImage/MainPageHeaderBackground/MainPageHeaderBackground.png";

export default function HeaderBackgroundImage() {
    return (
        <div className={style['header-background-container']}>
            <img
                src={MainPageHeaderBackground}
                alt="Background"
                className={style['background-image']}
            />
            <div  className={style['overlay-black']}></div>
            <div className={style['text-overlay']}>Avenue Homes</div>
        </div>
    );
}
