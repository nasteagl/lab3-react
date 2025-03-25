import style from './PageInfoBlock.module.css'

export function PageInfoBlock({titleOneSideLeft, titleTwoSideRight, paraghSideRight}) {
    return(
        <>
        <div className={style['container']}>
            <div className={style['leftSide']}>
                <p className={style['headerLeftSide']}>{titleOneSideLeft}</p>
                <nav className={style['navBar']}>

                    <span className={style['selected']}>Our Story</span>
                    <span>Our people</span>
                    <span>Latest News</span>
                    <span>Media</span>
                </nav>
            </div>
            <div className={style['rightSide']}>
                <h2> {titleTwoSideRight}</h2>
                <p>
                    {paraghSideRight}
                </p>
            </div>

        </div>
            <div className={style['line']}></div>
         </>
    )
}

