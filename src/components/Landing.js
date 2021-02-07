import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetSlider, sliderTransition } from '../store/actions';
import { Chatbot } from './Chatbot';

export const Landing = () => {
    const dispatch = useDispatch();
    const video = useSelector(state => state.heroReducer.video)

    useEffect(() => {
        setTimeout(() => {
            if(video >= 4) {
                dispatch(resetSlider())
            }else {
                dispatch(sliderTransition())
            }
        }, 15000);
    }, [video])
    
    return (
        <>
            <header>
                {video === 0 ? <h1 className='header'>1</h1> : null}
                {video === 1 ? <h1 className='header'>2</h1> : null}
                {video === 2 ? <h1 className='header'>3</h1> : null}
                {video === 3 ? <h1 className='header'>4</h1> : null}
            </header>

            <section>
                
            </section>
            <div className='chatbot__container'>
                <Chatbot />
            </div>
            
            <footer>

            </footer>
        </>
    )
}