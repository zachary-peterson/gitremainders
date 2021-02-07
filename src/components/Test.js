import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import image0 from '../assets/icons8-quill-pen-512.png';
import image1 from '../assets/icons8-snow-480 (1).png';
import image2 from '../assets/icons8-snow-480.png';
import image3 from '../assets/NewRomeMediaLogo.png';

import { resetSlider, sliderTransition } from '../store/actions/heroActions';

export const Test = () => {
    const video = useSelector(state => state.heroReducer.video);
    const dispatch = useDispatch();

    // const heroSlider = () => {
    //     if(video === 0.05) {
    //        dispatch(resetSlider()) 
    //     }else {
    //         dispatch(sliderTransition())
    //     }
    // }

    // const heroSliderTwo = num => {
    //     if(video > 16) {
    //         dispatch(resetSlider())
    //     }else {
    //         dispatch(sliderTransition())
    //     }

    // }

    // window.setInterval( heroSlider, 2000)
    // window.setInterval(heroSliderTwo, 1000)

    return (
        <div>
            <header>
                {/* {video === 1 ? <img src={image0} alt='text here' /> : null}
                {video === 2 ? <img src={image1} alt='text here' /> : null}
                {video === 3 ? <img src={image2} alt='text here' /> : null}
                {video === 4 ? <img src={image3} alt='text here' /> : null} */}

                {/* {Math.floor(video) === 1 ? <img src={image0} alt='text here' /> : null}
                {Math.floor(video)  === 2 ? <img src={image1} alt='text here' /> : null}
                {Math.round(video)  === 4 ? <img src={image2} alt='text here' /> : null}
                {Math.round(video)  === 8 ? <img src={image3} alt='text here' /> : null} */}
            </header>
        </div>
    )
}