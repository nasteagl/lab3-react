import styles from "./TextHeaderBlockPhotoBigSize.module.css";

export function TextHeaderBlockPhotoBigSize({ text, photo, width = "100%", height = "auto" }) {
    return (
        <div className={styles.container}>
            <div className={styles["text-block"]}>{text}</div>
            <img
                className={styles["image"]}
                src={photo}
                alt="Photo"
                style={{ width, height }}
            />
        </div>
    );
}
