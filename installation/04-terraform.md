# Terraform Installation

This repo uses Terraform in `Lab-9/terraform/main.tf`.

## 1) Add HashiCorp repository

```bash
sudo apt-get update && sudo apt-get install -y gnupg software-properties-common curl
curl -fsSL https://apt.releases.hashicorp.com/gpg | sudo gpg --dearmor -o /usr/share/keyrings/hashicorp-archive-keyring.gpg
echo "deb [signed-by=/usr/share/keyrings/hashicorp-archive-keyring.gpg] https://apt.releases.hashicorp.com $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/hashicorp.list
```

## 2) Install Terraform

```bash
sudo apt-get update
sudo apt-get install -y terraform
```

## 3) Verify

```bash
terraform -version
```

## 4) Repo-specific check (Lab 9)

```bash
terraform -chdir=Lab-9/terraform init
terraform -chdir=Lab-9/terraform plan
```
