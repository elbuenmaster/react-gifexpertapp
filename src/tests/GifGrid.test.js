import React from 'react';
import {render} from '@testing-library/react';
import  '@testing-library/jest-dom';
import {shallow} from  'enzyme';
import {GifGrid} from '../components/GifGrid';
import {useFetchGifs} from '../hooks/useFetchGifs' 
// esto es un Mock CustomHook
// mock es para simular comportamientos
jest.mock('../hooks/useFetchGifs');

describe('testing GridItem', () => {
    let wrapper;
    let categoria='Fury Road';
    

    test('correcto snapshot del componente',()=>{

        // mock es para simular comportamientos
        // en este caso, el hook intervenido useFetchGifs
        // retorna una array vacio  y el boleano en false.
        // tal como debe suceder a cargar por primera vez el componente.
         useFetchGifs.mockReturnValue({
            data:[],
            loading:true,
        });  
        let  wrapper = shallow(<GifGrid category={categoria}/>);
        expect(wrapper).toMatchSnapshot();
    })




    test('debe mostrar items cuando se cargan imagenes con mi hook - useEffect',()=>{
            const gifs = [{
                id:1,
                url:'https://www.1.cl/hola.jpg',
                title:'mi foto'
            },
            {
                id:2,
                url:'https://www.1.cl/hol222a.jpg',
                title:'mi foto 2'
            },
          ]
            useFetchGifs.mockReturnValue({
                data:gifs,
                loading:false,
            });  
            let  wrapper = shallow(<GifGrid category={categoria}/>);
            expect(wrapper).toMatchSnapshot();

            expect(wrapper.find('p').exists()).toBe(false);

            // busquemos si  contiene  el componente 'GifGridItem' 
            expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
           
    })

})
