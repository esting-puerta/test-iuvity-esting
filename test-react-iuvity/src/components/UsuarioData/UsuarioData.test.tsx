import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import UsuarioData from './UsuarioData';
import { useUsuario } from './HooksGetDataUser';

// Mock the useUsuario hook
jest.mock('./HooksGetDataUser');

describe('UsuarioData Component', () => {

    const mockUsuario = {
        name: {
            title: 'Señor',
            first: 'Test John',
            last: 'Test Perez'
        },
        location: {
            city: 'Barranquilla',
            state: 'Atlantico',
            country: 'Colombia'
        },
        login: {
            username: 'juan'
        },
        picture: {
            medium: 'https://example.com/photo.jpg'
        }
    };

    beforeEach(() => {
        // Limpiar todos los mocks antes de cada prueba
        jest.clearAllMocks();
    });

    it('debe mostrar el estado de carga inicialmente', () => {
        // Simular el hook para devolver el estado de carga
        (useUsuario as jest.Mock).mockReturnValue({
            usuario: undefined,
            cargando: true,
            error: null,
            recargar: jest.fn()
        });

        render(<UsuarioData />);
        expect(screen.getByText('Cargando usuarios...')).toBeInTheDocument();
    });

    it('debe mostrar el estado de error cuando hay un error', () => {
        // Simular el hook para devolver el estado de error
        (useUsuario as jest.Mock).mockReturnValue({
            usuario: undefined,
            cargando: false,
            error: 'Error al cargar datos',
            recargar: jest.fn()
        });

        render(<UsuarioData />);
        expect(screen.getByText('Error: Error al cargar datos')).toBeInTheDocument();
    });

    it('debe renderizar los datos del usuario correctamente', async () => {
        // Simular el hook para devolver datos del usuario
        (useUsuario as jest.Mock).mockReturnValue({
            usuario: mockUsuario,
            cargando: false,
            error: null,
            recargar: jest.fn()
        });

        render(<UsuarioData />);

        // Verificar si la información del usuario se muestra correctamente
        expect(screen.getByText('Sr John Doe')).toBeInTheDocument();
        expect(screen.getByText('Ubicación: Nueva York, NY, USA')).toBeInTheDocument();
        expect(screen.getByText('Usuario: johndoe')).toBeInTheDocument();

        // Verificar si la imagen del usuario se renderiza
        const userImage = screen.getByAltText('User');
        expect(userImage).toBeInTheDocument();
        expect(userImage).toHaveAttribute('src', 'https://example.com/photo.jpg');
    });

    it('debe manejar datos de usuario indefinidos correctamente', () => {
        // Simular el hook para devolver datos de usuario indefinidos
        (useUsuario as jest.Mock).mockReturnValue({
            usuario: undefined,
            cargando: false,
            error: null,
            recargar: jest.fn()
        });

        render(<UsuarioData />);

        // El componente debe renderizarse sin fallar
        expect(screen.queryByText('Mr John Doe')).not.toBeInTheDocument();
    });

    it('debe llamar a la función recargar cuando sea necesario', async () => {
        const mockRecargar = jest.fn();

        // Simular el hook para devolver la función mock de recargar
        (useUsuario as jest.Mock).mockReturnValue({
            usuario: mockUsuario,
            cargando: false,
            error: null,
            recargar: mockRecargar
        });

        render(<UsuarioData />);

        // Puedes agregar pruebas aquí para cualquier interacción del usuario que deba activar recargar
        // Por ejemplo, si agregas un botón de actualizar:
        // fireEvent.click(screen.getByRole('button', { name: /actualizar/i }));
        // expect(mockRecargar).toHaveBeenCalled();
    });
}); 