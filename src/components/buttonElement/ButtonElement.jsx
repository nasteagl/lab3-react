import style from "./ButtonElement.module.css"

export function ButtonElement({marginTop}) {
    return(
        <>
            <div className={style['container']} style={{marginTop}}>
                <div className={style['arrow']}> ⮜ </div>
                <div className={style['numberOne']}> 1</div>
                <div className={style['numberTwo']}> 2</div>
                <div className={style['numberThree']}> 3</div>
                <div className={style['arrow']}> ⮞</div>
            </div>
        </>
    )

}