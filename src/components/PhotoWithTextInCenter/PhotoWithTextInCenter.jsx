import style from "./PhotoWithTextInCenter.module.css";

export function PhotoWithTextInCenter({image, text}) {
    return (
        <>
          <div className={style['container']}>
             <img className={style['image']} src={image} />
             <p className={style['text']}>{text}</p>
          </div>
        </>
    )
}