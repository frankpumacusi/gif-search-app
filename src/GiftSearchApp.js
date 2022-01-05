import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GiftGrid } from './components/GiftGrid';


export const GifSearchApp = () => {

  //const categories = ['One Piece', 'Naruto', 'Dragon Ball'];
  // const [categories, setCategories] = useState(['One Piece', 'Naruto', 'Dragon Ball'])

  const [categories, setCategories] = useState(['One Piece']);



  // const handleAdd = () => {
  //   //setCategories([ ...categories, 'Attack on titan']);
  //   //setCategories([ 'Attack on titan', ...categories ]);
  //   setCategories(cats => ['Attack on titan', ...categories]);
  // }
  return (
    <div>
      <h2>GifSearchApp</h2>
      <AddCategory setCategories= { setCategories }/>
      <hr />   
      <ol>
        {
          categories.map((category) => (
              <GiftGrid 
                key={ category }
                category = { category } 
              />
            ))
        }
      </ol>

    </div>
  )
}
