import React from 'react';
import style from './textLinetext.module.css';

export function TextLineText({ firstText, secondText, lineWidth = "11rem", marginTop = "10rem" }) {
    return (
        <div className={style.container} style={{ marginTop: marginTop }}>
            <div className={style.firstText}>
                <span>{firstText}</span>
            </div>
            <div className={style.line} style={{ width: lineWidth }}></div>
            <div className={style.secondText}>
                <span>{secondText}</span>
            </div>
        </div>
    );
}
