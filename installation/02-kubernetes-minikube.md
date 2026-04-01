# Kubernetes + Minikube Installation

This repo uses Kubernetes manifests (`Lab-6/k8s.yaml`) and local cluster workflows (Minikube in Lab 9).

## 1) Install kubectl

```bash
curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"
sudo install -o root -g root -m 0755 kubectl /usr/local/bin/kubectl
rm kubectl
```

## 2) Install Minikube

```bash
curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64
sudo install minikube-linux-amd64 /usr/local/bin/minikube
rm minikube-linux-amd64
```

## 3) Start Minikube with Docker driver

```bash
minikube start --driver=docker
```

## 4) Install Helm (useful for OpenFaaS install)

```bash
curl https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-3 | bash
```

## 5) Verify

```bash
kubectl version --client
minikube version
kubectl get nodes
helm version
```

## 6) Repo-specific check (Lab 6)

```bash
kubectl apply -f Lab-6/k8s.yaml
kubectl get deploy,svc
```
