import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import {render, screen} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';
import Header from '../paginas/Header';

describe('Header', () => {
    test('renders Header component with correct content', () => {
        render(
            <BrowserRouter>
                <Header/>
            </BrowserRouter>
        );

        const headerComponent = screen.getByRole('banner');
        expect(headerComponent).toBeInTheDocument();

        const menuItems = screen.getAllByRole('listitem');
        expect(menuItems.length).toBe(6);

        const logoLink = screen.getByRole('link', { name: 'logo' });
        expect(logoLink).toBeInTheDocument();

        const productLink = screen.getByRole('link', { name: /inicio/i });
        expect(productLink).toBeInTheDocument();

        const navIcons = screen.getAllByRole('link');
        expect(navIcons.length).toBe(8);

    });
});
