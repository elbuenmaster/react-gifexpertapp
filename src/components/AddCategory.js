import React, { useState } from "react";
import Proptypes from 'prop-types'
export const AddCategory = ({ setCategorias }) => {
  
  const [inputValue, setInputValue] = useState('');

  const handleInputValue = (e) => {
    setInputValue(e.target.value);
    console.log('se cambio el valor de la cajita','{',e.target.value,'}');
  };

  const handleSubmit = (e) => {
              e.preventDefault();
              console.log("se dispara Submit");
              if (inputValue.trim().length > 2) {
                // setCategorias: se le agrega, usando una funcion CALLBACK que lea el valor del State y le añada el nuevo valor
                setCategorias((cats) => [ inputValue,...cats]);
                setInputValue('');
                console.log("Submit exitoso");
                return true;
              }
              console.log("se cancela Submit");
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>{inputValue}</p>
      <input type="text" value={inputValue} onChange={handleInputValue}></input>
    </form>
  );
};

AddCategory.propTypes={
    setCategorias: Proptypes.func.isRequired
}