import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetSlider, sliderTransition } from '../store/actions';
import { Chatbot } from './Chatbot';
import imageOne from '../assets/ZipConsulting.png';
import styled from 'styled-components';
import { About } from './About';

const form = {
    terms: ''
}

const Container = styled.section`
    width: ${window.innerWidth}
    height: ${window.innerHeight}
    

`

export const Landing = () => {
    const [formValues, setFormValues] = useState(form);
    const dispatch = useDispatch();
    const video = useSelector(state => state.heroReducer.video)
    const background = useSelector(state => state.componentReducer.background)

    // const fname = useSelector(state => state.aboutReducer.fname)
    
    // useEffect(() => {
    //     setTimeout(() => {
    //         if(video >= 4) {
    //             dispatch(resetSlider())
    //         }else {
    //             dispatch(sliderTransition())
    //         }
    //     }, 15000);
    // }, [video])

    let backgroundWidth;

    if(window.innerWidth < 600) {
        backgroundWidth = '200px'
    }else if(window.innerWidth < 1200) {
        backgroundWidth = '300px'
    }else {
        backgroundWidth = '400px'
    }

    // console.log(backgroundWidth);
    
    return (
        <Container className={background}>

            <header className='block' style={{ 'backgroundColor': `#` + background[1] }}>
            </header>

            <section>
                {/* {video === 0 ? <h1 className='header'>1</h1> : null}
                {video === 1 ? <h1 className='header'>2</h1> : null}
                {video === 2 ? <h1 className='header'>3</h1> : null}
                {video === 3 ? <h1 className='header'>4</h1> : null}
                {video === 4 ? <h1 className='header'>5</h1> : null} */}
                {/* <form>
                    <label htmlFor="terms">Search</label>
                    <input
                        type="text"
                        onChange={handleChange}
                        value={formValues.terms}
                        name="terms"
                     />
                     <button onClick={handleSubmit}>Submit</button>
                </form> */}
            </section>
            {video === 0 ? 
            
            <div className='chatbot__container'>
                <Chatbot />
            </div>
            
            :
            null
            }

            {video === 1 ? <About /> : null}
            
            <br/>
            <footer className="main__logo">
                <img src={imageOne} alt="Zip Consulting Logo" width={backgroundWidth} />
            </footer>

        </Container>
    )
}