import React, { FormEvent, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ModificarData.css';
import { DEVICE_MODELS, STORAGE_OPTIONS } from '../../utils/const';
import { Dispositivo } from '../../models/Dispositivo';
import { ApiService } from '../../services/ApiService';

type Props = {
    dispositivo: Dispositivo | null;
  };

const ModificarData: React.FC<Props> = ({ dispositivo }) => {

    const enviarData = (dispo: Dispositivo, type: number) => {
        if (type !== 0) {
            actualizarDispositivo(dispo);
        } else {
            const numerico_id = Math.floor(Math.random() * 9900) + 100;
            dispo.id = numerico_id;
            guardarDispositivo(dispo);
        }
    };

    let id = 0;

    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [mensaje, setMensaje] = useState<string>('');
    const [showTooltip, setShowTooltip] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (mensaje) {
            setShowTooltip(true);
            const timer = setTimeout(() => {
                setShowTooltip(false);
                
            }, 2000);
            setMensaje('');
            return () => clearTimeout(timer);
        }
        
    }, [mensaje]);

    // validar si el Input Dispositivo es !NULL para modificar
    const setFormValues = (dispositivo: Dispositivo) => {
        const form = document.getElementById('dispositivoForm') as HTMLFormElement;
        if (form) {
            const nombreInput = form.querySelector('#nombre') as HTMLInputElement;
            const modeloSelect = form.querySelector('#modelo') as HTMLSelectElement;
            const almacenamientoSelect = form.querySelector('#almacenamiento') as HTMLSelectElement;

            if (nombreInput) nombreInput.value = dispositivo.nombre;
            if (modeloSelect) modeloSelect.value = dispositivo.modelo;
            if (almacenamientoSelect) almacenamientoSelect.value = dispositivo.almacenamiento;

            console.log('TEST EDIT');
            console.log(dispositivo);
            id = dispositivo.id;
        }
    };

    useEffect(() => {
        if (dispositivo?.nombre && dispositivo?.modelo && dispositivo?.almacenamiento && dispositivo.id !== 0) {
            setFormValues(dispositivo);
        }
    }, [dispositivo]);

    const validateForm = (): boolean => {
        const form = document.getElementById('dispositivoForm') as HTMLFormElement;
        const formData = new FormData(form);
        const newErrors: { [key: string]: string } = {};

        // Validar nombre
        const nombre = formData.get('nombre') as string;
        if (!nombre || nombre.trim() === '') {
            newErrors.nombre = 'El nombre del dispositivo es requerido';
        }

        // Validar modelo
        const modelo = formData.get('modelo') as string;
        if (!modelo) {
            newErrors.modelo = 'Debe seleccionar un modelo';
        }

        // Validar almacenamiento
        const almacenamiento = formData.get('almacenamiento') as string;
        if (!almacenamiento) {
            newErrors.almacenamiento = 'Debe seleccionar la capacidad de almacenamiento';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        if (validateForm()) {
            const form = event.currentTarget;
            const formData = new FormData(form);
            
            const dispositivo: Dispositivo = {
                id: id,
                nombre: formData.get('nombre') as string,
                modelo: formData.get('modelo') as string,
                almacenamiento: formData.get('almacenamiento') as string
            };

            console.log('Dispositivo creado:', dispositivo);
            enviarData(dispositivo, id);
        }
    };

    const guardarDispositivo = async (dispositivo: Dispositivo) => {
        try {
            const data = await ApiService.crear(dispositivo);
            console.log(data);
            setMensaje('✅ dispositivo guardado con éxito');
            setTimeout(() => {
                handleRegresar();
            }, 2000);
        } catch (error) {
            setMensaje('❌ Error al guardar el dispositivo');
        }
    };

    const actualizarDispositivo = async (dispositivo: Dispositivo) => {
        try {
            const data = await ApiService.actualizar(dispositivo.id, dispositivo);
            console.log(data);
            setShowTooltip(true);
            setMensaje('✅ dispositivo Actualizado con éxito');
            setTimeout(() => {
                handleRegresar();
            }, 2000);
        } catch (error) {
            setMensaje('❌ Error al actualizar el dispositivo');
        }
    };

    const handleRegresar = () => {
        navigate('/');
        console.log('Regresando...');
    };

    return (
        <div className="container fade-in-container" style={{ marginTop: '2rem' }} >
            {showTooltip && (
                <div className={`tooltip ${mensaje.includes('✅') ? 'tooltip-success' : 'tooltip-error'}`}>
                    {mensaje}
                </div>
            )}
            <div className="main-content">
                <div className="form-section">
                    <h2 className="form-title">{dispositivo && dispositivo.nombre ? 'Modificar Dispositivo' : 'Nuevo Dispositivo'}</h2>

                    <form id="dispositivoForm" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label className="form-label" htmlFor="nombre">Nombre del Dispositivo</label>
                            <input
                                type="text"
                                id="nombre"
                                name="nombre"
                                className="form-input"
                                placeholder='Ingresar Nombre'
                                required
                            />
                            {errors.nombre && <div className="form-error">{errors.nombre}</div>}
                        </div>

                        <div className="form-group">
                            <label className="form-label" htmlFor="modelo">Modelo</label>
                            <select id="modelo" name="modelo" className="form-select" required>
                                <option value="">Seleccionar modelo</option>
                                {Object.entries(DEVICE_MODELS).map(([brand, models]) => (
                                    <optgroup key={brand} label={brand}>
                                        {models.map(model => (
                                            <option key={model} value={model}>
                                                {model}
                                            </option>
                                        ))}
                                    </optgroup>
                                ))}
                            </select>
                            {errors.modelo && <div className="form-error">{errors.modelo}</div>}
                        </div>

                        <div className="form-group">
                            <label className="form-label" htmlFor="almacenamiento">Almacenamiento</label>
                            <select id="almacenamiento" name="almacenamiento" className="form-select" required>
                                <option value="">Seleccionar capacidad</option>
                                {STORAGE_OPTIONS.map(option => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                            {errors.almacenamiento && <div className="form-error">{errors.almacenamiento}</div>}
                        </div>

                        <div className="form-actions">
                            <button type="button" className="btn btn-secondary" onClick={handleRegresar}>
                                <svg className="icon" viewBox="0 0 24 24">
                                    <path d="M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z" />
                                </svg>
                                Regresar
                            </button>
                            <button type="submit" className="btn btn-success">
                                <svg className="icon" viewBox="0 0 24 24">
                                    <path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z" />
                                </svg>
                                Registrar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            
        </div>
    );
};

export default ModificarData;
