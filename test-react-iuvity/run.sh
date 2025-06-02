docker rmi -f test-react-iuvity:latest

docker build -t test-react-iuvity .

kubectl apply -f k8s/deployment.yaml
kubectl apply -f k8s/hpa.yaml
kubectl apply -f k8s/service.yaml

kubectl get deployments
kubectl get pods
kubectl get services

kubectl port-forward service/test-react-iuvity-service 3000:80
