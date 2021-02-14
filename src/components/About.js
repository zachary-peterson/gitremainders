import React from 'react';
import { Services } from './Services';
import { Resources } from './Resources';
import { useSelector } from 'react-redux';

export const About = () => {
    const component = useSelector(state => state.componentReducer.component)
    let change;
    

    return (
        <section>
            {component === 1 ? <Services /> : component === 2 ? <Resources /> : null}
        </section>


    )
}