# Runtime Installation (Node.js, Python, Go)

This repo contains Node.js, Python Flask, and Go examples.

## Node.js (for Lab 3, Lab 4 Task-3, Lab 6, OpenFaaS function code)

Install Node 20 LTS via NodeSource:

```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs
```

Verify:

```bash
node -v
npm -v
```

## Python 3 + pip (for Lab 5 and Lab 7 Flask apps)

```bash
sudo apt-get update
sudo apt-get install -y python3 python3-pip python3-venv
```

Verify:

```bash
python3 --version
pip3 --version
```

## Go (for Lab-3/using_go)

```bash
sudo apt-get update
sudo apt-get install -y golang-go
```

Verify:

```bash
go version
```

## Repo dependency install commands

```bash
npm install --prefix Lab-3
npm install --prefix Lab-6
npm install --prefix hello-node
npm install --prefix Lab-9/hello-node
python3 -m pip install flask requests
go mod tidy -C Lab-3/using_go
```
