# AWS CLI + DynamoDB Setup

Lab 3 uses DynamoDB via AWS SDK (`Lab-3/`).

## 1) Install AWS CLI v2

```bash
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
sudo apt-get install -y unzip
unzip awscliv2.zip
sudo ./aws/install
rm -rf aws awscliv2.zip
```

## 2) Configure credentials

```bash
aws configure
```

You will be prompted for:
- AWS Access Key ID
- AWS Secret Access Key
- Default region (example: `ap-southeast-2` or `us-east-1`)
- Output format (example: `json`)

## 3) Verify access

```bash
aws sts get-caller-identity
aws dynamodb list-tables --region ap-southeast-2
```

## 4) Optional: DynamoDB Local (for offline testing)

```bash
sudo apt-get install -y default-jre
curl -L -o dynamodb_local_latest.tar.gz https://s3.us-west-2.amazonaws.com/dynamodb-local/dynamodb_local_latest.tar.gz
mkdir -p "$HOME/dynamodb-local"
tar -xzf dynamodb_local_latest.tar.gz -C "$HOME/dynamodb-local"
rm dynamodb_local_latest.tar.gz
java -Djava.library.path="$HOME/dynamodb-local/DynamoDBLocal_lib" -jar "$HOME/dynamodb-local/DynamoDBLocal.jar" -sharedDb -port 8000
```
