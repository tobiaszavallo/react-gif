import React from 'react';
import { GifCard } from './GifCard';
import { useFetchGifs } from '../hooks/useFetchGifs';


export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs( category );
    
    

    return (
        <>
            <h3>{ category }</h3>

            {
                isLoading && ( <h2>Cargando...</h2> )
            }

            <div className="card-grid">
                {
                    images && images.map( ( image ) => (
                        <GifCard 
                        key={ image.id }
                        //title={ image.title }
                        //url={ image.url }
                        { ...image }  
                        />
                    ))
                }
            </div>
        </>
    )
}


