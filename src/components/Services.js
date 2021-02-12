import React from 'react';
import { useSelector } from 'react-redux';

export const Services = () => {
    const components = useSelector(state => state.componentReducer.components)

    return (
        <section>
            <form>
                <label>Title:</label>
                <input 
                    type='text'
                    // WORKING HERE
                />
            </form>

            {components.length > 0 ? components.map(comp => {
                return (
                    <div>
                        <h3>{comp.name}</h3>
                        <p>{comp.description}</p>
                        <img src={comp.link} width='600px' alt={comp.alt}/>
                    </div>
                )
            })
            
            :

            null
            }
        </section>
    )
}