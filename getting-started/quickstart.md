---
sidebar_position: 2
---

# Quick Start Guide

Get started with Docker in under 30 minutes!

## Prerequisites

- A computer with Windows, macOS, or Linux
- Basic command line knowledge
- An internet connection

## Step 1: Install Docker Desktop

1. Visit [docker.com/get-started](https://www.docker.com/get-started/)
2. Download Docker Desktop for your operating system
3. Follow the installation wizard
4. Launch Docker Desktop

## Step 2: Verify Installation

Open your terminal and run:

```bash
docker --version
docker run hello-world
```

You should see Docker version information and a "Hello from Docker!" message.

## Step 3: Your First Container

Let's run a simple web server:

```bash
docker run -d -p 8080:80 nginx
```

Open your browser and visit `http://localhost:8080` - you should see the nginx welcome page!

## Step 4: Next Steps

### Beginner Track
1. Complete the [15-minute introduction](https://docs.docker.com/get-started/introduction/)
2. Try the [Docker Workshop](https://docs.docker.com/get-started/workshop/)
3. Learn about [building images](https://docs.docker.com/get-started/docker-concepts/building-images/)

### Language-Specific Learning
Choose your programming language from our [Language-Specific Guides](README.md#language-specific-guides)

### Video Learner?
Check out our [YouTube playlist](https://www.youtube.com/playlist?list=PLkA60AVN3hh_nsDu5HtEqZ-xfjF-0-PfX)

## Common Commands Cheat Sheet

```bash
# List running containers
docker ps

# List all containers (including stopped)
docker ps -a

# Stop a container
docker stop <container-id>

# Remove a container
docker rm <container-id>

# List images
docker images

# Remove an image
docker rmi <image-id>

# View logs
docker logs <container-id>

# Execute command in running container
docker exec -it <container-id> bash
```

## Getting Help

- **Documentation:** [docs.docker.com](https://docs.docker.com)
- **Community Forum:** [forums.docker.com](https://forums.docker.com)
- **Stack Overflow:** [stackoverflow.com/questions/tagged/docker](https://stackoverflow.com/questions/tagged/docker)

Happy containerizing! 🐳
