import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';


export const GiftGrid = ({category}) =>{

    const {data, loading} = useFetchGifs(category);


    return (
        <>
            <h3 className='card animate__animated animate__bounce'>{ category }</h3>
            { loading && <p className='card animate__animated animate__bounce'>'loading... ' </p>}
            <div className='cardGrid'>  
                {
                    data.map( (img) =>(
                        <GifGridItem 
                            key = {img.id}
                             { ...img}
                        />
                    ))
                }
            </div>
        </>
    )
}




// return (
//     <div>
//         <h3>{ category }</h3>
//         <ol>                
//             {
//                 images.map( ({ id, title}) =>(
//                     <li key = {id}>{ title }</li>

//                 ))

//             }
//         </ol>
        
//     </div>
// )
// }

//     // getGifs();
//     return (
//         <div>
//             <h3>{ category }</h3>
//             <h3>{ count }</h3>
//             <button
//                 onClick={ ()=> setCount(count+1) }
            
//             >Verificar


//             </button>
//         </div>
//     )
// }