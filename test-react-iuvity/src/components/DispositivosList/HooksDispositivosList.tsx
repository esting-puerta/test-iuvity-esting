import { useEffect, useState } from 'react';
import { ApiService } from '../../services/ApiService';
import { Dispositivo } from '../../models/Dispositivo';

export function useDispositivo() {

  const [dis, setDispositivo] = useState<Dispositivo[] | null>(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const getDatosUsuario = async () => {
    try {
      setCargando(true);
      const data: any = await ApiService.obtenerTodos();
      setDispositivo(data);
      console.log(data);
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

  return { dis, cargando, error, recargar: getDatosUsuario };
}
