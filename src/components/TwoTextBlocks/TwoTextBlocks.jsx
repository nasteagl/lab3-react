import style from "./TwoTextBlocks.module.css"


export function TwoTextBlocks({firstText,secondText}) {
        return(
            <>
            <div className={style['container']}>
                <div className={style['leftText']}>{firstText}</div>
                <div className={style['rightText']}>{secondText}</div>
            </div>
            </>
        )
}