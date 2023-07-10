import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import {render, screen} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';
import Laptops from '../paginas/Laptops';

describe('Laptops', () => {
    test('renders Laptops component with correct content', () => {
        render(
            <BrowserRouter>
                <Laptops/>
            </BrowserRouter>
        );

        const laptopsComponent = screen.getByRole('main');
        expect(laptopsComponent).toBeInTheDocument();

        const selectionElement = screen.getByText(/volver/i);
        expect(selectionElement).toBeInTheDocument();

        const productLinks = screen.getAllByRole('link');
        expect(productLinks.length).toBe(30);
    });
})

