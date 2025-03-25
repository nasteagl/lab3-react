import styles from  "./NewsBlocks.module.css"
import newsBlocks from "../../data/newsBlocks.json";
import back from "../../assets/MainPageImage/icon/back.png"
import next from "../../assets/MainPageImage/icon/next.png"

export function NewsBlocks() {
    return (
        <div className={styles['container']}>
            <div className={styles['header']}>
                <h2>Latest news from Avenue</h2>
                <button className={styles['moreNews']}>MORE NEWS</button>
            </div>

            <div className={styles['newsGrid']}>
                {newsBlocks.map((item) => (
                    <div key={item.id} >
                        <img src={item.image} alt={item.title} className={styles['newsImage']} />
                        <p className={styles['newsTitle']}>{item.title}</p>
                    </div>
                ))}
            </div>
            <div >
                <img className={styles['arrow']} src={back} alt="Previous" />
                <img className={styles['arrow']} src={next} alt="Next" />
            </div>
        </div>
    );
}

