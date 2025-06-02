import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Dispositivo } from '../../models/Dispositivo';
import { useDispositivo } from './HooksDispositivosList';
import './DispositivosList.css';
import { ApiService } from '../../services/ApiService';

type Props = {
  onValidarDispositivo: (dispositivo: Dispositivo, type: number) => void;
};

const DispositivosList: React.FC<Props> = ({ onValidarDispositivo }) => {

  const { dis, cargando, error, recargar } = useDispositivo();
  const navigate = useNavigate();
  const [mensaje, setMensaje] = useState<string>('');

  if (cargando) return <p>Cargando usuarios...</p>;
  if (error) return <p>Error: {error}</p>;

  const dispositivosData = dis?.sort((a, b) => b.id - a.id);

  const enviarData = (dispositivo: Dispositivo) => {
    if (dispositivo?.nombre && dispositivo?.modelo && dispositivo?.almacenamiento) {
      onValidarDispositivo(dispositivo, 1);
      console.log('Test Editar', dispositivo);
    }
    irAAgregar(1);
  };

  const irAAgregar = (valid: number) => {
    if (valid === 0) {
      const dispositivo: Dispositivo = { id: 0, nombre: '', modelo: '', almacenamiento: ''};
      onValidarDispositivo(dispositivo, 0);
      console.log('Test Nuevo', dispositivo);
    }
    navigate('/data');
  };

  const eliminarData = async (dispositivo: Dispositivo) => {
    try {
      const data = await ApiService.eliminar(dispositivo.id);
      setMensaje('✅ dispositivo Actualizado con éxito');
      recargar();
  } catch (error) {
      setMensaje('❌ Error al actualizar el dispositivo');
  }
  };

  return (
    <div className="fade-in-container">
      <table className="items-table">
        <thead>
          <tr>
            <td colSpan={5} className="divider">&nbsp;</td>
          </tr>

          <tr className="table-header">
            <th></th>
            <th>Nombre</th>
            <th>Modelo</th>
            <th>Almacenamiento</th>
            <th colSpan={2}>
              <div className="button-group">
                <button className="btn btn-premium" onClick={() => irAAgregar(0)}>
                  <FontAwesomeIcon icon={faPlus} />
                  Agregar Dispositivo
                </button>
              </div>
            </th>
          </tr>
        </thead>

        <tbody>
          {dispositivosData?.map((dispositivo) => (
            <tr key={dispositivo.id} className="item-row">
              <td>
                <div className="user-avatar">{dispositivo.nombre.substring(0, 2).toUpperCase()}</div>
              </td>
              <td id='nombre'>
                <p className="item-name">{dispositivo.nombre}</p>
              </td>
              <td id='modelo'>
                <p className="item-count">{dispositivo.modelo}</p>
              </td>
              <td id='almacenamiento'>
                <p className="item-count">{dispositivo.almacenamiento}</p>
              </td>
              <td>
                <div className="row-actions">
                  <button className="btn btn-edit btn-small" onClick={() => enviarData(dispositivo)}>
                    <FontAwesomeIcon icon={faEdit} />
                    Editar
                  </button>
                  <button className="btn btn-delete btn-small" onClick={() => eliminarData(dispositivo)}>
                    <FontAwesomeIcon icon={faTrash} />
                    Eliminar
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DispositivosList;