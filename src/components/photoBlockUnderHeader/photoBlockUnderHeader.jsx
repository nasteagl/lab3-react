import photo from "../../assets/MainPageImage/MainPageHeaderBackground/camin.png";
import style from "./photoBlockUnderHeader.module.css"
import {TextLineText} from "@components/TextLineText";


export function PhotoBlockUnderHeader() {
    return (
        <>
            <img
                src={photo}
                alt="photoBlockUnderHeader"
                className={style['photo']}
            />
        </>
    );
}

