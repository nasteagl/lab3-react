import {Header} from '../components/Header';
import {PageInfoBlock} from "../components/PageInfoBlock";
import {TwoTextBlocks} from "../components/TwoTextBlocks";
import {PhotoWithTextInCenter} from "@components/PhotoWithTextInCenter/index.js";
import photo from "@assets/MainPageImage/AboutUsPhoto/workTeam.jpg"
import photoSecond from "../assets/MainPageImage/AboutUsPhoto/teamWorkVersionSecond.png"
import {LineButtonElement} from "../components/lineButtonElement"
import {Footer} from "@components/Footer/index.js";

function AboutUs() {
    return (
        <>
            <Header theme="darkMode" />
            <PageInfoBlock
                titleOneSideLeft="Our Story"
                titleTwoSideRight="Built from the ground up"
                paraghSideRight="
                    Creating one-of-a-kind homes underpinned by creativity,
                    craftsmanship, and
                    an unrivalled attention to detail."

            />


            <TwoTextBlocks firstText={"Now one of German’s leading and award-winning custom home builders,  Avenue Homes has come a long way since its humble inception in 2007.  "}
            secondText={"Averna has built a reputation on hard work and a passion for the building industry, creating one-of-a-kind homes underpinned by creativity, craftsmanship and unrivalled attention to detail.\n" +
                "A far stretch from the large cookie-cutter building companies, Averna is a small family company that’s friendly and flexible, working closely with our clients and only building a limited number of luxury custom homes annually."}
            />
            <PhotoWithTextInCenter image={photoSecond}/>
            <PhotoWithTextInCenter image={photo} text={"Avenue Homes was created by builder CEO something companies, whose passion for building was ignited as a teenager when he worked alongside his father as a tiler. This led to further building qualifications and the eventual formalisation of Avenue, named after an Italian digestive liqueur, nearly a decade ago."} />

            <LineButtonElement text={'FOUND MORE'}/>
            <Footer/>

        </>
    )
}



export default AboutUs;