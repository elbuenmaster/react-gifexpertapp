import React from 'react';
import {render} from '@testing-library/react';
import  '@testing-library/jest-dom';
import {shallow} from  'enzyme';
import {GifGrid} from '../components/GifGrid';
import {GifExpertApp} from '../GifExpertApp';

describe('testing GifExpertApp', () => {
    let wrapper;
     
    

    test('correcto snapshot del componente GifExpertAppw',()=>{

       
        let  wrapper = shallow(<GifExpertApp/>);
        expect(wrapper).toMatchSnapshot();


        
    })


    test('debe mostrar una lista de categorias',()=>{
        const cats=['One Punch','Dragon Ball'];
        const wrapper = shallow(<GifExpertApp arreglodefault={cats}></GifExpertApp>);
        expect (wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(cats.length);
    });

})
