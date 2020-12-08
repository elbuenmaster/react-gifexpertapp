import React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom';
import {shallow} from 'enzyme';
import  {getGifs} from '../../helpers/getGifs'

describe('pruebas en getGifs',()=>{
    test('debe de traer 10 elementos',async()=>{
        const imagenes = await getGifs('On');
        expect(imagenes.length).toBe(10);
    })
})
