import React from 'react';
import { Services } from './Services';
import { useSelector } from 'react-redux';

export const About = () => {
    const component = useSelector(state => state.componentReducer.component)

    return (
        <section>
            {component === 1 ? <Services /> : null}
        </section>
    )
}