import React, { useState } from 'react';
import Proptypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {

    //const [inputValue, setInputValue] = useState('Hola Mundo !!!')

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        // console.log(e.target.value);
        setInputValue(e.target.value);
    }

    const handleSubmit= (e) =>{
      e.preventDefault();
      if (inputValue.length > 2) {
        setCategories(cats => [ inputValue, ...cats]);
        setInputValue('');
        
      }
      //console.log('Submit hecho!');
      
    }
    return (
        <form onSubmit={ handleSubmit } >
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    )
}

AddCategory.propTypes = {
  setCategories: Proptypes.func.isRequired
}