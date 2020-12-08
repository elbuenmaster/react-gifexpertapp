import React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom';
import {shallow} from 'enzyme';
import  GifGridItem  from '../components/GifGridItem';

const id=1;
const title="One Punch";
const url = "https://media4.giphy.com/media/yo3TC0yeHd53G/giphy.gif?cid=d469d910a8hyirxzp6u6pshnn3owbwv66xbwzg8l8kwsbxw6&amp;rid=giphy.gif"
const wrapper = shallow(<GifGridItem id={id} title={title} url={url}></GifGridItem>);

describe('gridItem',()=>{

    test('testing snapshot',()=>{
       expect(wrapper).toMatchSnapshot();
    });
    test('debe contener un parrafo con el titulo',()=>{
         const parrafo = wrapper.find('p').text();
         expect(parrafo).toBe(title);
    })
    test('propiedades de IMG deben coincidir con las props',()=>{
        const img = wrapper.find('img');
        expect(img.props().src).toBe(url);
        expect(img.prop('alt')).toBe(title);
   })
   test('debe contener clase animate__fadeIn',()=>{

        const div=wrapper.find('div');
        expect(div.prop('className')).toContain('animate__fadeIn');
        expect(div.prop('className').includes('animate__fadeIn')).toBe(true);
   })
});

