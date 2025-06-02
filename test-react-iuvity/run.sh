# Clean up unused containers and images
##docker container prune -f
docker image prune -f

# Remove specific image
docker rmi -f test-react-iuvity:latest

docker build -t test-react-iuvity .

kubectl apply -f k8s/deployment.yaml
kubectl apply -f k8s/hpa.yaml
kubectl apply -f k8s/service.yaml

kubectl get deployments -l app=test-react-iuvity
kubectl get pods -l app=test-react-iuvity
kubectl get services -l app=test-react-iuvity

kubectl port-forward service/test-react-iuvity-service 3000:80
