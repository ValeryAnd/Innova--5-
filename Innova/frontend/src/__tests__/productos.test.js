import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Productos from '../paginas/Productos';

test('renders Productos component', () => {
    render(
        <Router>
            <Productos />
        </Router>
    );

    // Verificar que se renderice el componente de encabezado (Header)
    const headerElement = screen.getByRole('banner');
    expect(headerElement).toBeInTheDocument();

    // Verificar que se rendericen los productos de la sección "Shop Now"
    const productosLinks = screen.getAllByRole('link', { name: /ver más/i });
    expect(productosLinks).toHaveLength(1);

    // Verificar que se rendericen los productos de la sección "New in"
    const newProductsLinks = screen.getAllByRole('link', { name: /ver más/i });
    expect(newProductsLinks).toHaveLength(1);

    // Verificar que se renderice el componente de pie de página (Footer)
    const footerElement = screen.getByRole('contentinfo');
    expect(footerElement).toBeInTheDocument();
});
