import styles from "./lineButtonElement.module.css";
import icon from "../../assets/MainPageImage/MainPageHeaderBackground/Messanger.svg";


export function LineButtonElement({ text }) {
    return (
        <div className={styles["container"]}>
            <div className={styles["line"]}></div>
            <div className={styles["text-with-arrow"]}>
                <div className={styles["text"]}>{text}</div>
                <div className={styles["arrow"]}>
                    <img className={styles["image"]} src={icon} alt="Messenger" />
                </div>
            </div>
        </div>
    );
}
