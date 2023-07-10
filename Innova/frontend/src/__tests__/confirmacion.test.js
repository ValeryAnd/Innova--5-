import React from 'react';
import {render, screen} from '@testing-library/react';
import Confirmacion from '../paginas/confirmacion';
import {MemoryRouter} from "react-router-dom";
import '@testing-library/jest-dom/extend-expect';


describe('Confirmacion', () => {
    test('renders Confirmacion component with correct content', () => {
        render(
            <MemoryRouter>
                <Confirmacion/>
            </MemoryRouter>
        );

        const confirmacionComponent = screen.getByRole('main');
        expect(confirmacionComponent).toBeInTheDocument();

        const title = screen.getByRole('heading', { level: 1 });
        expect(title).toHaveTextContent('Gracias por tu compra');

        const message = screen.getByText('Tus productos serán entregados por nuestro equipo con los datos proporcionados...');
        expect(message).toBeInTheDocument();
    });
});
