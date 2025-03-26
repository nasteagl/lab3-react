import {Header} from "@components/Header/index.js";
import {PageInfoBlock} from "@components/PageInfoBlock/index.js";
import newsInfo from "@data/newsInfo.json"
import {PhotoWithTextBlocksPerson} from "@components/PhotoWithTextBlocksPerson/index.js";
import {Footer} from "@components/Footer/index.js";
import { NavigationButtonElement} from "@components/NavigationButtonElement/NavigationButtonElement.jsx";
import style from "../components/PhotoWithTextBlocksPerson/photoWithTextBlocksPerson.module.css"

export default function LatestNews() {
    return(
        <>
            <Header theme="darkMode"/>
            <PageInfoBlock titleOneSideLeft={"Latest News"} paraghSideRight={"From building tips to home decor inspiration,keep" +
                "up to date with all thing Avenue."} />



            <div className={style["container"]}>
                {newsInfo.map((block) => (
                    <PhotoWithTextBlocksPerson key={block.id} nameSurname={block.title} photo={block.image} marginTop={"8rem"} width={"37rem"} height={"35rem"}/>
                ))}
            </div>

            <NavigationButtonElement/>
            <Footer/>
        </>
    )
}