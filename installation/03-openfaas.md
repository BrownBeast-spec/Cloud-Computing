# OpenFaaS Installation

This repo has OpenFaaS functions in `stack.yaml` and `Lab-9/stack.yaml`.

## 1) Install faas-cli

```bash
curl -sL https://cli.openfaas.com | sudo sh
```

## 2) Add OpenFaaS Helm repos

```bash
helm repo add openfaas https://openfaas.github.io/faas-netes/
helm repo add openfaas-chart https://openfaas.github.io/faas
helm repo update
```

## 3) Create namespaces

```bash
kubectl apply -f https://raw.githubusercontent.com/openfaas/faas-netes/master/namespaces.yml
```

## 4) Install OpenFaaS in cluster

```bash
helm upgrade openfaas --install openfaas-chart/openfaas \
  --namespace openfaas \
  --set functionNamespace=openfaas-fn \
  --set generateBasicAuth=true
```

## 5) Port-forward gateway

```bash
kubectl rollout status -n openfaas deploy/gateway
kubectl port-forward -n openfaas svc/gateway 8080:8080
```

## 6) Login and verify

```bash
PASSWORD=$(kubectl get secret -n openfaas basic-auth -o jsonpath="{.data.basic-auth-password}" | base64 --decode)
echo "$PASSWORD" | faas-cli login --username admin --password-stdin
faas-cli version
faas-cli list
```

## 7) Deploy function from this repo

```bash
faas-cli up -f stack.yaml
faas-cli up -f Lab-9/stack.yaml
```
