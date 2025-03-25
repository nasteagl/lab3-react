import {Header}  from "@/components/Header/index.js";
import HeaderBackgroundImage from "@components/headerBackgroundImage/HeaderBackgroundImage.jsx";
import { TextBlockUnderPrincipalPhoto } from "@components/textBlockUnderPrincipalPhoto";
import { PhotoBlockUnderHeader } from "@/components/photoBlockUnderHeader";
import { TextLineText } from "@/components/TextLineText";
import { LineButtonElement } from "@/components/lineButtonElement";
import { TextHeaderBlockPhotoBigSize } from "@/components/TextHeaderBlockPhotoBigSize";
import homesData from "../data/homeBlocks.json";
import {NewsBlocks} from "@components/NewsBlocks";
import questionAnswers from "@data/questionAnswer.json";
import photo from "@assets/MainPageImage/MainPageHeaderBackground/white_living.png";
import QuestionAnswersBlocks from "@components/QuestionsAnswersBlocks/QuestionAnswersBlocks.jsx";
import {Footer} from  "@components/Footer";


function Homepage() {
    return (
        <>
            <Header theme="lightMode"/>
            <HeaderBackgroundImage />
            <TextBlockUnderPrincipalPhoto />
            <PhotoBlockUnderHeader />
            <TextLineText firstText={"By the Swan House"} secondText={"2024"} lineWidth={"14rem"} marginTop="33rem" />
            <LineButtonElement text={"ABOUT AVENUE"} />
            <TextHeaderBlockPhotoBigSize text="Design is our legacy." photo={photo} height="43rem"   />
            <TextLineText firstText="By the Swan House" secondText="2024" lineWidth="45rem" marginTop="2rem" />

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', padding: '0rem' }}>
                {homesData.map((home, index) => (
                    <div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <TextHeaderBlockPhotoBigSize text={home.text} photo={home.photo} height="45rem" width="55rem" />
                        <TextLineText firstText={home.firstText} secondText={home.secondText} lineWidth="43rem" marginTop="1rem" />
                    </div>
                ))}
            </div>
              <NewsBlocks/>
            <QuestionAnswersBlocks data={questionAnswers} />
            <Footer/>




        </>
    );
}

export default Homepage;
