# 🐳 Running Docker Training Resources in Docker

Multiple ways to run your Docusaurus site in containers!

## 🚀 Quick Start

### Option 1: Production Build (Recommended for Deployment)

```bash
# Build the production image
docker build -t docker-training-site .

# Run the container
docker run -d -p 8080:80 --name docker-training docker-training-site

# Visit http://localhost:8080
```

### Option 2: Development Mode with Hot-Reload

```bash
# Using docker-compose
docker-compose up dev

# Visit http://localhost:3000
# Changes to files will auto-reload!
```

### Option 3: Production with Docker Compose

```bash
# Build and run production version
docker-compose up prod -d

# Visit http://localhost:8080
```

## 📋 Available Commands

### Production Mode

```bash
# Build the image
docker build -t docker-training-site .

# Run container
docker run -d -p 8080:80 --name docker-training docker-training-site

# Stop container
docker stop docker-training

# Remove container
docker rm docker-training

# View logs
docker logs docker-training

# Check health
docker inspect --format='{{.State.Health.Status}}' docker-training
```

### Development Mode

```bash
# Start development server
docker-compose up dev

# Stop development server
docker-compose down

# Rebuild if dependencies change
docker-compose up dev --build
```

## 🎯 Use Cases

### For Local Development
Use **Development Mode** (`docker-compose up dev`):
- ✅ Hot-reload enabled
- ✅ See changes instantly
- ✅ Full debugging support
- ✅ Volume-mounted for live editing

### For Testing Production Build
Use **Production Mode** (`docker-compose up prod`):
- ✅ Optimized build
- ✅ Served with nginx
- ✅ Fast and efficient
- ✅ Matches GitHub Pages build

### For Deployment
Use the **Production Dockerfile**:
- ✅ Multi-stage build (small image size)
- ✅ nginx for serving
- ✅ Health checks included
- ✅ Security headers configured

## 🔧 Configuration

### Change Ports

**Development:**
Edit `docker-compose.yml`:
```yaml
ports:
  - "3001:3000"  # Change 3001 to your preferred port
```

**Production:**
```bash
docker run -p 9090:80 docker-training-site
```

### Environment Variables

Add to `docker-compose.yml`:
```yaml
environment:
  - CUSTOM_VAR=value
```

## 📦 Image Details

### Production Image
- **Base**: nginx:alpine
- **Size**: ~50-60 MB
- **Optimizations**:
  - Multi-stage build
  - Static files only
  - Gzip compression
  - Cache headers

### Development Image
- **Base**: node:18-alpine
- **Size**: ~180-200 MB (includes dev dependencies)
- **Features**:
  - Hot-reload
  - Full dev tools
  - Debugging support

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Change the port
docker run -p 8081:80 docker-training-site
```

### Build Fails
```bash
# Clean rebuild
docker build --no-cache -t docker-training-site .
```

### Development Hot-Reload Not Working
```bash
# Make sure you're using the dev service
docker-compose up dev

# Check volume mounts are correct
docker-compose config
```

### Container Won't Start
```bash
# Check logs
docker logs docker-training

# Check container status
docker ps -a
```

## 🚢 Deployment Options

### Deploy to Docker Hub

```bash
# Tag the image
docker tag docker-training-site yourusername/docker-training-site:latest

# Push to Docker Hub
docker push yourusername/docker-training-site:latest

# Others can run it
docker run -p 8080:80 yourusername/docker-training-site:latest
```

### Deploy to Cloud

**AWS ECS, Google Cloud Run, Azure Container Instances:**
All support running containers from your built image.

**DigitalOcean App Platform:**
Can deploy directly from your Dockerfile.

## 🎨 Customization

### Add Your Own nginx Config

Edit `nginx.conf` to customize:
- Cache policies
- Security headers
- Redirects
- Custom error pages

### Optimize Build

**Reduce image size:**
```dockerfile
# Use specific node version
FROM node:18.19-alpine

# Remove dev dependencies after build
RUN npm prune --production
```

## 📊 Performance

### Production Mode
- **Build time**: ~2-3 minutes
- **Image size**: ~50-60 MB
- **Memory usage**: ~10-20 MB
- **Startup time**: <2 seconds

### Development Mode
- **Build time**: ~1-2 minutes
- **Image size**: ~180-200 MB
- **Memory usage**: ~100-150 MB
- **Hot-reload**: <1 second

## ✅ Best Practices

1. **Use production mode for deployment**
2. **Use development mode for local work**
3. **Keep .dockerignore updated**
4. **Multi-stage builds for smaller images**
5. **Health checks for reliability**
6. **Version your images** (`v1.0.0`, `v1.1.0`, etc.)

## 🆘 Need Help?

Common issues:
- **Can't connect**: Check firewall/ports
- **Slow build**: Use `--no-cache` sparingly
- **Out of space**: Clean up with `docker system prune`

---

**Happy containerizing! 🐳**
