import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];

    const [categories, setCategories] = useState(['Naruto']);

    // const handleAdd = () => {
        //* Forma 1 de hacerlo.
        // setCategories([ ...categories, 'Naruto']);

        //* Forma 2 ( Más habitual)
        // setCategories( category => [ ...category, 'Bleach']);
    // }


    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories= { setCategories }/>
            <hr />

            {/* <button onClick= { handleAdd }>Agregar</button> */}

            <ol>
                {
                    categories.map(category =>
                         <GifGrid 
                            key ={category}
                            category = { category }
                         />
                    )

                }
            </ol>
        </>
    )
}
