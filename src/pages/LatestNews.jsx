import {Header} from "@components/Header/index.js";
import {PageInfoBlock} from "@components/PageInfoBlock/index.js";
import newsInfo from "@data/newsInfo.json"
import {PhotoWithTextBlocksPerson} from "@components/photoWithTextBlocksPerson/index.js";
import {Footer} from "@components/Footer/index.js";
import {ButtonElement} from "@components/buttonElement/ButtonElement.jsx";

export default function LatestNews() {
    return(
        <>
            <Header theme="darkMode"/>
            <PageInfoBlock titleOneSideLeft={"Latest News"} paraghSideRight={"From building tips to home decor inspiration,keep" +
                "up to date with all thing Avenue."} />

            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 0fr)",
                marginTop: "2rem",

            }}>
                {newsInfo.map((block) => (
                    <PhotoWithTextBlocksPerson key={block.id} nameSurname={block.title} photo={block.image} marginTop={"8rem"} width={"37rem"} height={"35rem"}/>
                ))}
            </div>

            <ButtonElement marginTop={"7rem"}/>
            <Footer/>
        </>
    )
}