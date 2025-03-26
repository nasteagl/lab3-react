import style from "./NavigationButtonElement.module.css"

export function NavigationButtonElement({marginTop="7rem"}) {
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