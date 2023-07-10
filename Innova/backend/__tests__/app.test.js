const request = require('supertest');
const app = require('../app');

describe('API Tests', () => {
    // Test para la ruta '/register'
    describe('POST /register', () => {
        it('should create a new user and return a success message', async () => {
            const response = await request(app)
                .post('/register')
                .send({
                    nombres: 'John',
                    apellidos: 'Doe',
                    email: 'john@example.com',
                    password: 'password123'
                });

            expect(response.statusCode).toBe(201);
            expect(response.body).toEqual({message: 'Registro exitoso'});
        });

        it('should return an error message if names and surnames contain non-letter characters', async () => {
            const response = await request(app)
                .post('/register')
                .send({
                    nombres: 'John123',
                    apellidos: 'Doe456',
                    email: 'john@example.com',
                    password: 'password123'
                });

            expect(response.statusCode).toBe(400);
            expect(response.body).toEqual({message: 'Los nombres y apellidos solo pueden contener letras'});
        });

        // Agrega más pruebas para cubrir otros escenarios
    });

    // Test para la ruta '/login'
    describe('POST /login', () => {
        it('should return a success message if login is successful', async () => {
            const response = await request(app)
                .post('/login')
                .send({
                    email: 'john@example.com',
                    password: 'password123'
                });

            expect(response.statusCode).toBe(201);
            expect(response.body).toEqual({message: 'Login correcto'});
        });

        it('should return an error message if login credentials are incorrect', async () => {
            const response = await request(app)
                .post('/login')
                .send({
                    email: 'john@example.com',
                    password: 'wrongpassword'
                });

            expect(response.statusCode).toBe(400);
            expect(response.body).toEqual({message: 'Usuario o contraseña incorrectos'});
        });

        // Agrega más pruebas para cubrir otros escenarios
    });

    // Test para la ruta '/validarCompra'
    describe('POST /validarCompra', () => {
        it('should validate a purchase and return a success message', async () => {
            const response = await request(app)
                .post('/validarCompra')
                .send({
                    nombres: 'John',
                    apellidos: 'Doe',
                    correo: 'john@example.com',
                    telefono: '123456789',
                    direccion: '123 Main St',
                    distrito: 'District',
                    ciudad: 'City',
                    metodoPago: 'Visa',
                    numeroTarjeta: '123456789',
                    fechaCaducidad: '12/24',
                    cvv: '123',
                    subtotal: 100,
                    descuento: 10,
                    total: 90
                });

            expect(response.statusCode).toBe(201);
            expect(response.body).toEqual({message: 'Venta registrada...'});
        });

        it('should return an error message if any field is empty', async () => {
            const response = await request(app)
                .post('/validarCompra')
                .send({
                    nombres: '',
                    apellidos: '',
                    correo: '',
                    telefono: '',
                    direccion: '',
                    distrito: '',
                    ciudad: '',
                    metodoPago: '',
                    numeroTarjeta: '',
                    fechaCaducidad: '',
                    cvv: '',
                    subtotal: '',
                    descuento: '',
                    total: ''
                });

            expect(response.statusCode).toBe(400);
            expect(response.body).toEqual({message: 'Por favor, complete todos los campos.'});
        });

        // Agrega más pruebas para cubrir otros escenarios
    });
});
