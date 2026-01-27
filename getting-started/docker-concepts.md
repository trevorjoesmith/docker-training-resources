---
sidebar_position: 3
---

# Docker Concepts

Understanding the core concepts of Docker will help you use it more effectively.

## What is a Container?

A container is a lightweight, standalone, executable package that includes everything needed to run a piece of software:
- Application code
- Runtime
- System tools
- Libraries
- Settings

### Key Benefits
- **Isolation**: Each container runs in its own isolated environment
- **Portability**: Runs consistently across different environments
- **Lightweight**: Shares the host OS kernel, unlike VMs
- **Fast**: Starts in seconds, not minutes

[Learn more about containers →](https://docs.docker.com/get-started/docker-concepts/the-basics/what-is-a-container/)

## What is an Image?

An image is a read-only template with instructions for creating a container. Think of it as a snapshot or blueprint.

### Key Points
- Images are built from a `Dockerfile`
- They consist of layers stacked on top of each other
- Each layer represents an instruction in the Dockerfile
- Layers are cached for faster builds

[Learn more about images →](https://docs.docker.com/get-started/docker-concepts/the-basics/what-is-an-image/)

## What is a Registry?

A registry is a storage and distribution system for Docker images. The most popular registry is Docker Hub.

### Popular Registries
- **[Docker Hub](https://hub.docker.com)** - Public registry with millions of images
- **GitHub Container Registry** - Integrated with GitHub
- **Amazon ECR** - AWS container registry
- **Google Container Registry** - GCP container registry

[Learn more about registries →](https://docs.docker.com/get-started/docker-concepts/the-basics/what-is-a-registry/)

## What is Docker Compose?

Docker Compose is a tool for defining and running multi-container applications using a YAML file.

### Use Cases
- Development environments
- Automated testing
- Single-host deployments

### Example `docker-compose.yml`
```yaml
version: '3.8'
services:
  web:
    image: nginx
    ports:
      - "8080:80"
  database:
    image: postgres
    environment:
      POSTGRES_PASSWORD: example
```

[Learn more about Docker Compose →](https://docs.docker.com/get-started/docker-concepts/the-basics/what-is-docker-compose/)

## Docker Products & Tools

### Docker Desktop
The easiest way to get started with Docker on Mac, Windows, or Linux.

[Download Docker Desktop →](https://www.docker.com/products/docker-desktop/)

### Docker Build Cloud
Speed up your builds with cloud-based build resources - up to 39x faster!

[Learn about Docker Build Cloud →](https://docs.docker.com/guides/docker-build-cloud/)

### Docker Scout
Automate software supply chain security and vulnerability remediation.

[Learn about Docker Scout →](https://docs.docker.com/guides/docker-scout/)

### Docker Hardened Images
Secure, enterprise-ready base images that reduce vulnerabilities.

## Common Docker Commands

```bash
# Pull an image
docker pull nginx

# Run a container
docker run -d -p 8080:80 nginx

# List running containers
docker ps

# Stop a container
docker stop <container-id>

# View logs
docker logs <container-id>

# Execute command in container
docker exec -it <container-id> bash

# Build an image
docker build -t myapp .

# Push to registry
docker push myapp
```

## Next Steps

Now that you understand the basics, check out:

- **[Language Guides](/docs/language-guides/overview)** - Learn Docker with your programming language
- **[AI & ML](/docs/ai-ml/overview)** - Containerize AI/ML workflows
- **[DevOps](/docs/devops/overview)** - CI/CD and cloud deployment

## Additional Resources

- [Official Docker Concepts Guide](https://docs.docker.com/get-started/docker-concepts/)
- [Docker Documentation](https://docs.docker.com)
- [Docker Community Forums](https://forums.docker.com)
