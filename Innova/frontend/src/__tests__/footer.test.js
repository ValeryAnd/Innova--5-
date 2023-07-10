import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import {render, screen} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';
import Footer from '../paginas/Footer';

describe('Footer', () => {
    test('renders Footer component with correct content', () => {
        render(
            <BrowserRouter>
                <Footer/>
            </BrowserRouter>
        );

        const footerComponent = screen.getByRole('contentinfo');
        expect(footerComponent).toBeInTheDocument();

        const logoLink = screen.getByRole('link', {name: 'logo'});
        expect(logoLink).toBeInTheDocument();

        const menuItems = screen.getAllByRole('listitem');
        expect(menuItems.length).toBe(12);
    });
});
