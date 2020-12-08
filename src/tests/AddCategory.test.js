import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import { AddCategory } from "../components/AddCategory";
import PropTypes from "prop-types";

describe("AddCategory", () => {
  // creamos una funcion vacia para simular el parametro que recibe setCategorias
  // const setCategorias=()=>{}
  const setCategorias = jest.fn();
  //--  lo mismo, pero con jest.fn tenemos nuevas funcionalidades que ayudan al testing

  let wrapper;
  wrapper = shallow(<AddCategory setCategorias={setCategorias} />);
   
beforeEach(()=>{
     jest.clearAllMocks();
     wrapper = shallow(<AddCategory setCategorias={setCategorias} />);
   
})


  test("testing AddCategory", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("cambio de caja de texto", () => {
    const cajita = wrapper.find("input");
    const nuevovalor = "nuevo valor";
    cajita.simulate("change", {
      target: {
        value: nuevovalor,
      },
    });
    expect(wrapper.find("p").text().trim()).toBe(nuevovalor);
  });

  test("submit del formulario", () => {
    wrapper.find("form").simulate("submit", { preventDefault: () => {} });
  });

  test("no debe postear si el valor de input está en blanco", () => {
    expect(setCategorias).not.toHaveBeenCalled();
  });

  test('debe de llamar el setCategorias y limpiar la caja de texto',()=>{
        // 1. simular el inputChange
        // 2. simular el submit
        // 3. setCategorias se debe haber llamado
        // 4. el valor del input debe estar en ''  
        let val='hola';
        wrapper.find('input').simulate('change',{target:{ value:val }} );
        wrapper.find('form').simulate('submit',{ preventDefault:()=>{} });

        expect(setCategorias).toHaveBeenCalled();

        wrapper.find('input').simulate('change',{target:{value:''}});

        //también es válido: wrapper.find('input').prop('value')
         expect( wrapper.find('input').props().value ).toBe('');
  })

});
