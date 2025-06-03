import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import DispositivosList from './DispositivosList';
import { useDispositivo } from './HooksDispositivosList';
import { ApiService } from '../../services/ApiService';

// Mock the hooks and services
jest.mock('./HooksDispositivosList');
jest.mock('../../services/ApiService');
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn()
}));

describe('DispositivosList Component', () => {
  const mockDispositivos = [
    { id: 1, nombre: 'iPhone', modelo: '12 Pro', almacenamiento: '128GB' },
    { id: 2, nombre: 'Samsung', modelo: 'S21', almacenamiento: '256GB' }
  ];

  const mockOnValidarDispositivo = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const renderComponent = () => {
    return render(
      <DispositivosList onValidarDispositivo={mockOnValidarDispositivo} />
    );
  };

  it('shows loading state', () => {
    (useDispositivo as jest.Mock).mockReturnValue({
      dis: null,
      cargando: true,
      error: null,
      recargar: jest.fn()
    });

    renderComponent();
    expect(screen.getByText('Cargando usuarios...')).toBeInTheDocument();
  });

  it('shows error state', () => {
    (useDispositivo as jest.Mock).mockReturnValue({
      dis: null,
      cargando: false,
      error: 'Error de conexión',
      recargar: jest.fn()
    });

    renderComponent();
    expect(screen.getByText('Error: Error de conexión')).toBeInTheDocument();
  });

  it('renders dispositivos list correctly', () => {
    (useDispositivo as jest.Mock).mockReturnValue({
      dis: mockDispositivos,
      cargando: false,
      error: null,
      recargar: jest.fn()
    });

    renderComponent();
    
    expect(screen.getByText('iPhone')).toBeInTheDocument();
    expect(screen.getByText('Samsung')).toBeInTheDocument();
    expect(screen.getByText('12 Pro')).toBeInTheDocument();
    expect(screen.getByText('S21')).toBeInTheDocument();
  });

  it('calls onValidarDispositivo when clicking edit button', () => {
    (useDispositivo as jest.Mock).mockReturnValue({
      dis: mockDispositivos,
      cargando: false,
      error: null,
      recargar: jest.fn()
    });

    renderComponent();
    
    const editButtons = screen.getAllByText('Editar');
    fireEvent.click(editButtons[0]);
    
    expect(mockOnValidarDispositivo).toHaveBeenCalledWith(mockDispositivos[0], 1);
  });

  it('calls onValidarDispositivo when clicking add button', () => {
    (useDispositivo as jest.Mock).mockReturnValue({
      dis: mockDispositivos,
      cargando: false,
      error: null,
      recargar: jest.fn()
    });

    renderComponent();
    
    const addButton = screen.getByText('Agregar Dispositivo');
    fireEvent.click(addButton);
    
    expect(mockOnValidarDispositivo).toHaveBeenCalledWith(
      { id: 0, nombre: '', modelo: '', almacenamiento: '' },
      0
    );
  });

  it('calls eliminar when clicking delete button', async () => {
    (useDispositivo as jest.Mock).mockReturnValue({
      dis: mockDispositivos,
      cargando: false,
      error: null,
      recargar: jest.fn()
    });

    (ApiService.eliminar as jest.Mock).mockResolvedValue({});

    renderComponent();
    
    const deleteButtons = screen.getAllByText('Eliminar');
    fireEvent.click(deleteButtons[0]);
    
    await waitFor(() => {
      expect(ApiService.eliminar).toHaveBeenCalledWith(mockDispositivos[0].id);
    });
  });
}); 