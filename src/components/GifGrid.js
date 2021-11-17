//import React, { Fragment, useEffect, useState } from 'react'
import React, { Fragment } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

//import { getGifs } from '../helpers/getGifs.js';

export const GifGrid = ( { category }) => {

    const { data: images, loading } =useFetchGifs( category );

//    const [images, setImages] = useState( [] );

//     useEffect( () => {
//         getGifs( category )
//             .then( setImages );
//     }, [ category ])

    return (
        <Fragment>
            <h3 className='animate__animated animate__bounce'>{ category }</h3>

            { loading && <p className='animate__animated animate__flash'>Cargando . . . </p>}

            <div className='card-grid'>
            {
                images.map( ( img ) => (
                    //<li key={ id }>{ title }</li>
                    <GifGridItem
                    key={ img.id }
                    { ...img }
                    />
                ))
            }
        </div>
        </Fragment>
    )
}
