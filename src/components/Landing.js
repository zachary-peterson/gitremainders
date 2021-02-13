import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetSlider, setDayOfWeek, setMonth, sliderTransition } from '../store/actions';
import { Chatbot } from './Chatbot';
import imageOne from '../assets/ZipConsulting.png';
import imageTwo from '../assets/icons8-snow-480.png';
import imageThree from '../assets/NewRomeMediaLogo.png';
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
    const backgroundMode = useSelector(state => state.componentReducer.backgroundMode)

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
    

      

      useEffect(() => {
          dispatch(setDayOfWeek());
          dispatch(setMonth())
      }, [])


    let backgroundWidth;
    
    let photoOptions = [
        `https://images.unsplash.com/photo-1593642634402-b0eb5e2eebc9?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60`,
        `https://images.unsplash.com/photo-1613129931916-dd606eb5ed18?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60`,
        `https://images.unsplash.com/photo-1613085628218-d08b3a264f86?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60`
    ]

    let pOpt = (Math.random() * Math.floor(photoOptions.length))

    let trialWidth = 100;
    let trialContent;
    let trialAlign;

    if(window.innerWidth < 600) {
        backgroundWidth = '200px';
    }else if(window.innerWidth < 1200) {
        backgroundWidth = '300px';
    }else {
        backgroundWidth = '400px';
    }

    // console.log(backgroundWidth);
    
    return (
        <Container className={background}>

        {backgroundMode === "bookMode" ? 
        <>
            <header className={background} style={{ 'backgroundColor': `#` + background[1] }}>
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
        <div className={background}>
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
        </div>
        
        </> : null
        
        }

        {backgroundMode === "movieMode" ?
        <>
            <header className={background} style={{ 'backgroundColor': `#` + background[1] }}>
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
        <div className={background}>
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
        </div>
        
        </> : null
        }


        </Container>
    )
}