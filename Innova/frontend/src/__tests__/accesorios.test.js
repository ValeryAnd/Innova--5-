import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import {MemoryRouter} from 'react-router-dom';
import Accesorios from "../paginas/accesorios";

describe('Accesorios', () => {
    test('renders Accesorios component with product links and details', () => {
        render(
            <MemoryRouter>
                <Accesorios/>
            </MemoryRouter>
        );
        
        const accesoriosComponent = screen.getByRole('main');
        expect(accesoriosComponent).toBeInTheDocument();

        const productLinks = screen.getAllByRole('link');
        expect(productLinks.length).toBe(30);

        const productTitles = screen.getAllByRole('heading', {level: 4});
        expect(productTitles[0]).toHaveTextContent('Logitech teclado Bluetooth');
        expect(productTitles[1]).toHaveTextContent('Mouse Logitech G Pro - blanco');

        const productPrices = screen.getAllByRole('paragraph');
        expect(productPrices[0]).toHaveTextContent('Productos');
        expect(productPrices[1]).toHaveTextContent('S/150.00');
    });
});
