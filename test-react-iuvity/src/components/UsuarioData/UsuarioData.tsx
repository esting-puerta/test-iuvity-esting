import React from 'react';
import '../../App.css';
import { useUsuario } from '../UsuarioData/HooksGetDataUser';

const UsuarioData: React.FC = () => {

  const { usuario, cargando, error, recargar } = useUsuario();
  
  if (cargando) return <p>Cargando usuarios...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div >

      <table style={{ width: '100%' }}>
        <tbody>
          <tr>
            <td className="info-box">
              <p>
                {usuario && `${usuario.name.title} ${usuario.name.first} ${usuario.name.last}`}
                <br /><strong>Ubicación: </strong> {usuario && `${usuario.location.city}, ${usuario.location.state}, ${usuario.location.country}`}
                <br /><strong>Usuario: </strong> {usuario && `${usuario.login.username}`}
              </p>
            </td>
            <td className="info-box-right" style={{ display: 'flex' }} >
              <p style={{ textAlign: 'left' }}>
              Usuario:<br />
              {usuario && `${usuario.login.username}`}
              </p>
              <img src={usuario?.picture.medium} alt="User" style={{ borderRadius: '50%', marginLeft: '20px', alignItems: 'flex-end' }} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UsuarioData;
