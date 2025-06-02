import { useEffect, useState } from 'react';
import { Usuario } from '../../models/Usuario';
import { ApiService } from '../../services/ApiService';

export function useUsuario() {

  const [usuario, setUsuario] = useState<Usuario | null>(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const getDatosUsuario = async () => {
    try {
      setCargando(true);
      const data: any = await ApiService.getDatosUsuario();
      setUsuario(data.results[0]);
      console.log(data.results[0]);
      setError(null);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setCargando(false);
    }
  };

  useEffect(() => {
    getDatosUsuario();
  }, []);

  return { usuario, cargando, error, recargar: getDatosUsuario };
}
