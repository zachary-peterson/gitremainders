import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDayOfWeek, setMonth } from '../store/actions';
import { Chatbot } from './Chatbot';
import imageOne from '../assets/ZipConsulting.png';
import styled from 'styled-components';
import { About } from './About';


export const Landing = () => {
    const dispatch = useDispatch();
    const video = useSelector(state => state.heroReducer.video)
    const background = useSelector(state => state.componentReducer.background)

      useEffect(() => {
          dispatch(setDayOfWeek());
          dispatch(setMonth())
      }, [])

    let backgroundWidth;
    if(window.innerWidth < 600) {
        backgroundWidth = '200px';
    }else if(600 < window.innerWidth < 1200) {
        backgroundWidth = '300px';
    }else {
        backgroundWidth = '400px';
    }

    return (
        <>
            <header className={background} style={{ 'backgroundColor': `#` + background[1] }}>
            </header>

            <section className={background}>

                {video === 0 ? <Chatbot /> : null}
                {video === 1 ? <About /> : null}

                <br/>
                
            </section>
            <footer className="main__logo">
                <img src={imageOne} alt="Zip Consulting Logo" width={backgroundWidth} />
            </footer>
        </>
    )
}