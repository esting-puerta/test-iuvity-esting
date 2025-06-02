docker image prune -f

docker rmi -f test-node-iuvity:latest

# Construir la imagen Docker
docker build -t test-node-iuvity .

# Ejecutar el contenedor
docker run -p 3500:3500 test-node-iuvity

# Aplicar el deployment
kubectl apply -f k8s/deployment.yaml

kubectl apply -f k8s/hpa.yaml
kubectl apply -f k8s/pdb.yaml

# Aplicar el servicio
kubectl apply -f k8s/service.yaml

# Verificar estado del deployment
kubectl get deployments -l app=test-node-iuvity

# Verificar pods
kubectl get pods -l app=test-node-iuvity

# Verificar servicio
kubectl get services -l app=test-node-iuvity

# Ejecutar el port-forward
kubectl port-forward service/test-node-iuvity-service 3500:80

# Verificar el estado del HPA
kubectl get hpa

