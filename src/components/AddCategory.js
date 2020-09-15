import React, { useState } from "react";
import Proptypes from 'prop-types'
export const AddCategory = ({ setCategorias }) => {
  const [inputValue, setInputValue] = useState('');
  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit hecho");
    if (inputValue.trim().length > 2) {
      setCategorias((cats) => [ inputValue,...cats]);
      setInputValue('');
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={handleInputValue}></input>
    </form>
  );
};

AddCategory.propTypes={
    setCategorias: Proptypes.func.isRequired
}