import style from "./photoWithTextBlocksPerson.module.css";

export function PhotoWithTextBlocksPerson({ nameSurname, photo ,width,height ,marginTop}) {
    return (
        <div className={style['person-container']}>
            <img className={style['image']} src={photo}  style={{width,height,marginTop}} />
            <p className={style['name']}>{nameSurname}</p>
        </div>
    );
}