# Cloud Computing - My Learning Journey

This repository is a collection of my hands-on cloud computing labs. I built these labs step by step to understand how modern cloud applications are designed, containerized, deployed, and automated.

Instead of only reading theory, I practiced by writing code, building Docker images, running services on Kubernetes, working with AWS services, and using Terraform for infrastructure automation.


## Why I Built This Repository

I wanted one place to track what I actually learned by doing. Each lab focuses on a practical skill, and together they show my growth from basic cloud scripts to full cloud-native workflows.

## What I Learned Across These Labs

- How to interact with AWS services programmatically (especially DynamoDB)
- How to package applications with Docker for consistent deployment
- How to run containerized services in Kubernetes using deployments and services
- How serverless-style functions can run on Kubernetes with OpenFaaS
- How to define infrastructure declaratively with Terraform
- How to connect infrastructure changes to CI/CD workflows with GitHub Actions

## AWS Focus Areas

These are the AWS areas I focused on during this project journey:

- **Amazon DynamoDB**: table creation, data insertion, updates, and scripting with AWS SDK
- **IAM (conceptual + access flow)**: permissions required for AWS SDK and automation workflows
- **Amazon EKS (architecture mapping)**: understanding how Kubernetes workloads in local labs map to managed AWS Kubernetes
- **Amazon ECR (deployment mapping)**: where container images would be stored in AWS production setups
- **Amazon CloudWatch (observability mapping)**: logs/metrics thinking for production-grade services
- **S3 + DynamoDB for Terraform state (best-practice mapping)**: safe remote state and locking model for team IaC

## Docker, Kubernetes, and Terraform Experience

### Docker

I containerized multiple services in both Node.js and Python. This helped me understand image building, runtime consistency, and why containers are essential for cloud deployment.

### Kubernetes

I deployed services using Kubernetes manifests and worked with core resources such as:

- Deployments
- Services (including NodePort)
- Container specs and port exposure

This gave me practical confidence in orchestrating application workloads beyond local-only execution.

### Terraform

I used Terraform to manage Kubernetes/OpenFaaS resources as code. This was an important shift from manual setup to reproducible, version-controlled infrastructure.

## Repository Overview

- `Lab-3/` - AWS DynamoDB operations with Node.js (create/update/insert workflows)
- `Lab-4/` - Basic Node.js service containerization with Docker
- `Lab-5/` - Python Flask API containerization workflow
- `Lab-6/` - Containerized ML-style prediction API with Kubernetes deployment/service manifests
- `Lab-7/` - Flask-based classroom GPS/location microservice in Docker
- `Lab-9/` - OpenFaaS + Kubernetes + Terraform + GitHub Actions CI/CD workflow

## Highlight: Lab 9 (Cloud-Native Workflow)

Lab 9 is where many concepts came together in one pipeline:

- OpenFaaS function definition in `stack.yaml`
- Function handler implementation in Node.js
- Infrastructure deployment via `terraform/main.tf`
- CI/CD automation via `.github/workflows/openfaas-cd.yml`

This lab helped me connect development, operations, and automation in one practical setup.

## Tech Stack

- Languages: JavaScript (Node.js), Python
- Cloud/DevOps: AWS SDK, Docker, Kubernetes, Terraform, OpenFaaS, GitHub Actions

## Final Reflection

This repository reflects my practical cloud learning journey, not just final outputs. I learned how to think in a cloud-native way: build small services, containerize them, orchestrate them, automate infrastructure, and map local experiments to production-ready AWS architecture.
