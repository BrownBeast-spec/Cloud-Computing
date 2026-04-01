# Installation Commands

This directory contains ready-to-run installation commands for all major services and tools used in this repository.

Target OS: Ubuntu/Debian Linux.

## Files

- `01-docker.md` - Docker Engine + Compose plugin
- `02-kubernetes-minikube.md` - kubectl, Minikube, and Helm
- `03-openfaas.md` - OpenFaaS and faas-cli setup
- `04-terraform.md` - Terraform CLI
- `05-aws-cli-dynamodb.md` - AWS CLI and optional DynamoDB Local
- `06-runtimes.md` - Node.js, Python, and Go

## Recommended order

1. Install runtimes (`06-runtimes.md`) if needed for local coding.
2. Install Docker (`01-docker.md`).
3. Install Kubernetes tools (`02-kubernetes-minikube.md`).
4. Install OpenFaaS (`03-openfaas.md`).
5. Install Terraform (`04-terraform.md`).
6. Install AWS tools (`05-aws-cli-dynamodb.md`).

Each file includes verification commands so you can confirm setup quickly.
