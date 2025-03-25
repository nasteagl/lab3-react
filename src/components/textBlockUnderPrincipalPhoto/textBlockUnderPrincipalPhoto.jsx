import style from "./textBlockUnderPrincipalPhoto.module.css";

export function TextBlockUnderPrincipalPhoto() {
    return (
        <div className={style['luxury-header-container']}>
            <h5 className={style['luxurySubtitle']}>LUXURY HOME BUILDERS</h5>

            <div className={style['luxury-header']}>
                <div className={style['luxuryHomeText']}>
                    <h2 className={style['luxuryTitle']}>
                        Creating one-of-a-kind luxury homes<br />
                        underpinned by creativity, craftsmanship<br />
                        and an unrivalled attention to detail
                    </h2>
                </div>
                <div className={style['luxuryHomeDescription']}>
                    <p>
                        Every Avenue home starts with a blank piece  of<br /> paper because we
                        recognise that no two clients <br />are the same.  Our designers meet
                        with clients to <br />discuss  their lifestyle, needs and budget,and  from<br />
                        there,  the journey to creating their dream luxury<br /> home in Perth begins.
                    </p>
                </div>
            </div>
        </div>
    );
}