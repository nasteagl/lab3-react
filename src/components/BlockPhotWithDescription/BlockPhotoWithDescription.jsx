import React from 'react';
import style from './BlockPhotoWithDescription.module.css';


function BlockPhotoWithDescription() {
    return(
        <>
        <div className={style['block-photo-with-description']}>
            <img src="" alt=""/>
            <div className={style['underline-and-text']}>
                <p className={style['text-description']}></p>
                <div className={style['underline']}></div>
            </div>

        </div>
        </>
    )
}