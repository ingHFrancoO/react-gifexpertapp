import React, { Fragment, useState } from "react"

import AddCategory from './components/AddCategory';
import { GifGrid } from "./components/GifGrid";

const GitExpertApp =  () => {
    //const categories = ['One Punch', 'Samurai X', 'Dragon Ball', 'One Piece']
    const [categories, setCategories] = useState(['One Piece'])
    
    // const handleAdd = () => {
    //     setCategories( [...categories, 'Hunter X Hunter'] );
    // };

    return (
        <Fragment>
            <h2>GifExpertApp</h2>

            <AddCategory setCategories={setCategories}/>

            <hr/>

            <ol>
                {
                   // categories.map( category => <li key={ category }>{ category }</li> )
                   categories.map( category =>
                       <GifGrid 
                            key={ category }
                            category={ category }
                        /> 
                    )
                }
            </ol>
            
        </Fragment>
    )
}

export default GitExpertApp;