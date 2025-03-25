import style from "./Footer.module.css";

export function Footer() {
    return (
        <div className={style['container']}>
            <div className={style['contact-container']}>
                <div className={style['contact-form']}>
                    <h2>Contact us.</h2>
                    <form>
                        <label>First Name</label>
                        <input type="text" placeholder="First name" />

                        <label>Your Email</label>
                        <input type="text" placeholder="Last name" />

                        <label>Your phone</label>
                        <input type="tel" placeholder="eg: 060-111-222" />

                        <label>Your blocks location</label>
                        <input type="text" placeholder="eg: Applecross" />

                        <button type="submit">SUBMIT</button>
                    </form>
                </div>

                <div className={style['contact-info']}>
                    <div>
                        <h3>CONTACT</h3>
                        <p>(373)123 456 789</p>
                        <p>companies.md@gmail.com</p>
                    </div>
                    <div>
                        <h3>OFFICE</h3>
                        <p>str.Mihai Eminescu</p>
                        <p>ceva adresa random</p>
                    </div>
                    <div>
                        <h3>SOCIAL</h3>
                        <p>Instagram</p>
                        <p>Facebook</p>
                    </div>
                </div>
            </div>

            <div>
                <h1 className={style["AvenueHomes"]}>Avenue Homes</h1>
                <p className={style["IndividualHomeBuilders"]}>Individual home builders</p>
            </div>
        </div>
    );
}
