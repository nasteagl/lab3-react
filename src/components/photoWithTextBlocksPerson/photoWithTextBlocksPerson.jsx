import style from "./photoWithTextBlocksPerson.module.css";

export function PhotoWithTextBlocksPerson({ nameSurname, photo, marginTop = "3rem", width="25rem" ,height = "25rem" }) {
    return (
        <>
            <div className={style['container']} style={{ marginTop,  width,height}}>
                <img className={style['image']} src={photo} />
                <p className={style['name']}>{nameSurname}</p>
            </div>
        </>
    );
}
