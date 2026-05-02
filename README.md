# DN42 Network Info Template

![License](https://img.shields.io/badge/license-MIT-orange.svg) ![Vue](https://img.shields.io/badge/Vue-3.5-42b883.svg) ![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178c6.svg)

This repository is a template for a DN42-style network information website. Use it as a starting point, then replace the site-specific data with your own network information.

## Quick Start

1. Create a new repository from this template on GitHub.
2. Install dependencies.
3. Edit the data in [src/data/index.ts](src/data/index.ts) to match your own network.
4. Build and deploy with your preferred workflow.

## What To Customize

The main content is centralized in [src/data/index.ts](src/data/index.ts). Start there and replace:

- Network name and ASN information.
- Contact links such as email, Telegram, or GitHub.
- Node list entries, endpoints, keys, and routing details.

You should also review [src/i18n/langs/en.ts](src/i18n/langs/en.ts) and [src/i18n/langs/zh.ts](src/i18n/langs/zh.ts) if you want to rename labels or page copy.

## Deployment

### GitHub Actions

If you want to deploy with GitHub Actions, add the following repository secrets:

- `SERVER_HOST`: Your server's IP address or hostname.
- `SERVER_USER`: Your server's SSH username. A non-root user with limited permissions is recommended.
- `SSH_PRIVATE_KEY`: Your SSH private key.
- `SERVER_PORT` (optional): Your server's SSH port, default `22`.
- `SERVER_DEPLOY_PATH`: The path on your server where the project is deployed.

After that, push changes to the default branch and the workflow in [.github/workflows/deploy-ssh.yml](.github/workflows/deploy-ssh.yml) will build and deploy automatically.

### Docker Compose

This project is a static site, so production deployment usually follows a multi-stage flow: build with Vite, then serve the generated files with Nginx.

```bash
docker compose up -d --build
```

If you want to run it behind an existing reverse proxy, forward traffic to the host port exposed by `compose.yaml`.

## Template TODO

- [ ] Add a batch ping tool for nodes (may need backend support)
