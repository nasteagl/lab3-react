import {useState} from "react";
import style from "./QuestionAnswersBlocks.module.css";


function QuestionAnswerItem({ question, answer }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={style['faq-item']}>
            <div className={style['faq-question']} onClick={() => setIsOpen(!isOpen)}>
                <span>{question}</span>
                <span>{isOpen ? "▲" : "▼"}</span>
            </div>
            {isOpen && <p className={style['faq-answer']}>{answer}</p>}
        </div>
    );
}


export default function QuestionAnswersBlocks({ data }) {
    return (
        <div className={style['faq-container']}>
            <p className={style['header']}>Frequently Asked Questions</p>
            {data.map((question, index) => (
                <QuestionAnswerItem key={index} {...question} />
            ))}
        </div>
    );
}