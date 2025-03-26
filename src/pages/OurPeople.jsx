import {Header} from "@components/Header"
import {PageInfoBlock} from "@components/PageInfoBlock/index.js";
import {Footer} from "@components/Footer/index.js";
import {TwoTextBlocks} from "@components/TwoTextBlocks/index.js";
import data from "@data/personsInfo.json"
import {PhotoWithTextBlocksPerson} from "@components/PhotoWithTextBlocksPerson";
import {LineElement} from "@components/LineElement/index.js";
import style from "../components/PhotoWithTextBlocksPerson/photoWithTextBlocksPerson.module.css"

export default function OurPeople() {

    return(
        <>
         <Header theme="darkMode"/>
            <PageInfoBlock titleOneSideLeft={"Our People"} paraghSideRight={"The heart of Avenue is second to none. Our people are invested in you and your vision, dedicated to bringing your home dreams to life."} titleTwoSideRight={"Friends to family."}/>
            <TwoTextBlocks firstText={"Over a decade ago, Avenue Homes was a small building company with only a handful of staff." +
                " Fast-forward to today, and the Avenue Homes name is up there with some of the best " +
                "boutique luxury custom home builders in Western Germany. " +
                "The majority of the Averna Homes team is long-serving, and the company is " +
                "incredibly proud to have adopted a welcoming, family-oriented ethos.\n"}
                           secondText={"Averna has built a reputation on hard work and a passion for the building industry, " +
                               "creating one-of-a-kind homes underpinned by creativity, craftsmanship and unrivalled attention to detail.\n" +
                               "A far stretch from the large cookie-cutter building companies, Averna is a small family company that’s friendly and flexible," +
                               " working closely with our clients and only building a limited number of luxury custom homes annually."}/>

            <div className={style["container"]}>
                {data.map((person) => (
                    <PhotoWithTextBlocksPerson
                        key={person.id}
                        nameSurname={person.name}
                        photo={person.image}

                    />
                ))}
            </div>

           <LineElement/>
            <Footer />


        </>
    )
}