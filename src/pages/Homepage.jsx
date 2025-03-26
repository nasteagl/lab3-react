import { Header } from "@/components/Header/index.js";
import HeaderBackgroundImage from "@components/HeaderBackgroundImage/HeaderBackgroundImage.jsx";
import { TextBlockUnderPrincipalPhoto } from "@components/TextBlockUnderPrincipalPhoto";
import { PhotoBlockUnderHeader } from "@components/PhotoBlockUnderHeader";
import { LineButtonElement } from "@components/LineButtonElement";
import { TextHeaderBlockPhotoBigSize } from "@components/TextHeaderBlockPhotoBigSize";
import homesData from "@data/homeBlocks.json";
import { NewsBlocks } from "@components/NewsBlocks";
import questionAnswers from "@data/questionAnswer.json";
import photo from "@assets/MainPageImage/MainPageHeaderBackground/white_living.png";
import QuestionAnswersBlocks from "@components/QuestionsAnswersBlocks/QuestionAnswersBlocks.jsx";
import { Footer } from "@components/Footer";
import { TextLineText } from "@components/TextLineText/index.js";
import style from "./Homepage.module.css";

function Homepage() {
    return (
        <>
            <Header theme="lightMode" />
            <HeaderBackgroundImage />
            <TextBlockUnderPrincipalPhoto />
            <PhotoBlockUnderHeader />
            <TextLineText firstText={"By the Swan House"} secondText={"2024"} lineWidth={"14rem"} marginTop="33rem" />
            <LineButtonElement text={"ABOUT AVENUE"} />
            <TextHeaderBlockPhotoBigSize text="Design is our legacy." photo={photo} height="43rem" />
            <TextLineText firstText="By the Swan House" secondText="2024" lineWidth="45rem" />

            <div className={style["homes-container"]}>
                {homesData.map((home, index) => (
                    <div key={index} className={style["home-item"]}>
                        <TextHeaderBlockPhotoBigSize
                            text={home.text}
                            photo={home.photo}
                            width="55rem"
                            height="50rem"

                        />
                        <TextLineText firstText={home.firstText} secondText={home.secondText} lineWidth="43rem"/>
                    </div>
                ))}
            </div>
            <NewsBlocks />
            <QuestionAnswersBlocks data={questionAnswers} />
            <Footer />
        </>
    );
}

export default Homepage;