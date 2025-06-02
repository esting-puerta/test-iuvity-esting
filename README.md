# Proceso de Despliegue

Este documento describe el proceso detallado para desplegar tanto la aplicación backend en Node.js como la aplicación frontend en React.

## Requisitos Previos

- Docker instalado
- Acceso a un cluster de Kubernetes
- kubectl configurado
- Node.js 18+ instalado
- npm instalado

## Despliegue del Backend (Node.js)

1. Navegar al directorio del backend:
   ```bash
   cd test-node-iuvity
   ```

2. Ejecutar el script de despliegue:
   ```bash
   ./run.sh
   ```

## Despliegue del Frontend (React)

1. Navegar al directorio del frontend:
   ```bash
   cd test-react-iuvity
   ```

2. Ejecutar el script de despliegue:
   ```bash
   ./run.sh
   ```

## Arquitectura del Despliegue

### Backend (Node.js)
- Se ejecuta en el puerto 3500
- Utiliza Node.js 20 Alpine
- Incluye:
  - Escalado Horizontal de Pods (HPA)
  - Presupuesto de Interrupción de Pods (PDB)
  - Servicio para balanceo de carga
  - Despliegue con actualizaciones progresivas

### Frontend (React)
- Servido por Nginx en el puerto 3000
- Utiliza Node.js 18 Alpine para la construcción
- Incluye:
  - Escalado Horizontal de Pods (HPA)
  - Servicio para balanceo de carga
  - Despliegue con actualizaciones progresivas

## Monitoreo y Mantenimiento

1. Verificar estado de los pods:
   ```bash
   kubectl get pods -w
   ```

2. Ver logs:
   ```bash
   kubectl logs -f <nombre-del-pod>
   ```

3. Escalar despliegues:
   ```bash
   kubectl scale deployment <nombre-del-despliegue> --replicas=<número>
   ```

4. Eliminar pods (si es necesario):
   ```bash
   ./delete-pods.sh
   ```

## Solución de Problemas

1. Si los pods no inician:
   ```bash
   kubectl describe pod <nombre-del-pod>
   ```

2. Verificar endpoints del servicio:
   ```bash
   kubectl get endpoints
   ```

3. Verificar políticas de red:
   ```bash
   kubectl get networkpolicies
   ```

## Limpieza

Para eliminar todos los despliegues:
```bash
kubectl delete -f k8s/
```

Nota: Asegúrese de actualizar las variables de entorno y configuraciones en los archivos YAML de Kubernetes según las necesidades específicas de su entorno.
